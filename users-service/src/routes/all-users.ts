import express from "express";

const authController = require("./../controllers/authController");

const router = express.Router();

router.get("/api/users/allusers", authController.allUser);

export { router as allUserRouter };
