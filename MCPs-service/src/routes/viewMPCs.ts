import express from "express";
import { isLogin } from "@ltt-first-package/common";
const mcpsController = require("./../controllers/mcpsController");

const router = express.Router();

router.get("/api/mcps/view", isLogin, mcpsController.viewAllMCPs);

export { router as viewMCPsRouter };
