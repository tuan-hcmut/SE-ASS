import express, { Request, Response } from "express";
import { User } from "../models/usersModel";
import { Password } from "../services/password";
import { BadRequestError } from "@ltt-first-package/common";
import jwt from "jsonwebtoken";

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

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    /// add ! to tell typescript that we are defined this variable
    process.env.JWT_KEY!
  );

  req.session = { token: token };
  return res.status(200).send(user);
};
