import express from "express";
import { body } from "express-validator";
import { validateRequest } from "@ltt-first-package/common";

const authController = require("./../controllers/authController");

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email not valid!!"),
    body("fullName").trim().isLength({ min: 1, max: 40 }).withMessage("full name not valid!!"),
    body("password").trim().isLength({ min: 4, max: 20 }).withMessage("Password not valid!!"),
  ],
  validateRequest,
  authController.signUp
);

export { router as signupRouter };
