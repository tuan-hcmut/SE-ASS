import express from "express";
import { body } from "express-validator";
import { validateRequest, requireAuth, isLogin } from "@ltt-first-package/common";

const authController = require("./../controllers/authController");

const router = express.Router();

router.post("/api/users/photoUploadUrl", isLogin, requireAuth, authController.photoUploadUrl);

router.post(
  "/api/users/updateUserInfor",
  [body("fullName").trim().isLength({ min: 1, max: 40 }).withMessage("full name not valid!!")],
  validateRequest,
  isLogin,
  requireAuth,
  authController.updateUserInfor
);

export { router as updateUserRouter };
