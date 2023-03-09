import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "@ltt-first-package/common";
import passport from "passport";

const authController = require("./../controllers/authController");

const router = express.Router();

router.post(
  "/api/users/signin",
  [body("email").isEmail().withMessage("Email not valid!!"), body("password").trim().notEmpty().withMessage("No empty!!")],
  validateRequest,
  authController.signin
);

router.get(
  "/api/users/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/api/users/auth/google/callback", passport.authenticate("google"), (req: Request, res: Response) => {
  return res.redirect("http://uwcv2.site");
});

export { router as signinRouter };
