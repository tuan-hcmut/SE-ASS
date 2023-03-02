import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@ltt-first-package/common";
import { User } from "../models/usersModel";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email not valid!!"),
    body("password").trim().isLength({ min: 4, max: 20 }).withMessage("Password not valid!!"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new BadRequestError("Email already exist!!!");
    } else {
      const newUser = User.build({ email, password });
      await newUser.save();

      const token = jwt.sign(
        {
          id: newUser.id,
          email: newUser.email,
        },
        /// add ! to tell typescript that we are defined this variable
        process.env.JWT_KEY!
      );

      req.session = { token: token };
      return res.status(201).send(newUser);
    }
  }
);

export { router as signupRouter };
