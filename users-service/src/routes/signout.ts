import express, { Request, Response } from "express";
const authController = require("./../controllers/authController");

const router = express.Router();

router.post("/api/users/signout", authController.signOut);

export { router as signoutRouter };
