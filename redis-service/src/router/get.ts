import express from "express";
import { isLogin, requireAuth, NotFoundError, errorHandler } from "@ltt-first-package/common";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", isLogin, requireAuth, (req: Request, res: Response) => {
  console.log(45654);
  return res.send("Welcome redis service");
});

export { router as getRouter };
