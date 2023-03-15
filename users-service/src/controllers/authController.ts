import express, { Request, Response } from "express";
import { User } from "../models/usersModel";
import { Password } from "../services/password";
import { BadRequestError } from "@ltt-first-package/common";
import jwt from "jsonwebtoken";
import { body } from "express-validator";
import { promisify } from "util";
const aws = require("aws-sdk");
const uuid = require("uuid");

//////   acccess to the type have been delare (Request in express) and modify it
declare global {
  namespace Express {
    interface Request {
      file?: any;
    }
  }
}

const rendertoken = (user: any) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      photo: user.photo,
    },
    /// add ! to tell typescript that we are defined this variable
    process.env.JWT_KEY!
  );

  return token;
};
exports.signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError("Fail!!!");
  }

  const passwordComapre = await Password.comparePassword(user.password, password);
  if (!passwordComapre) {
    throw new BadRequestError("Fail!!!");
  }

  const token = rendertoken(user);
  req.session = { token: token };
  return res.status(200).send(user);
};

exports.signUp = async (req: Request, res: Response) => {
  const { email, password, fullName } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new BadRequestError("Email already exist!!!");
  } else {
    const newUser = User.build({ email, password, fullName });
    await newUser.save();

    const token = rendertoken(newUser);
    req.session = { token: token };
    return res.status(201).send(newUser);
  }
};

exports.allUser = async (req: Request, res: Response) => {
  const users = await User.find({});
  return res.status(200).send(users);
};

exports.signOut = async (req: Request, res: Response) => {
  req.session = null;
  return res.send({});
};

exports.photoUploadUrl = async (req: Request, res: Response) => {
  const { type } = req.body;

  const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
    region: "ap-southeast-1",
  });

  const key = `${req.currentUser!.id}/${uuid.v1()}.${type.split("/")[1]}`;
  // const url = await promisify(s3.getSignedUrl)("putObject", {
  //   Bucket: "uwc-bucket",
  //   ContentType: "jpeg",
  //   Key: key,
  // });

  s3.getSignedUrl(
    "putObject",
    {
      Bucket: "uwc-bucket",
      ContentType: type,
      Key: key,
    },
    (err: any, url: any) => {
      return res.send({ key, url });
    }
  );
};

exports.updateUserInfor = async (req: Request, res: Response) => {
  const { id, fullName, photo } = req.body;
  const user = await User.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        fullName,
        photo,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );
  const token = rendertoken(user);
  req.session = { token: token };

  return res.status(201).send(user);
};
