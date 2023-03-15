import express, { Request, Response } from "express";
import { isLogin } from "@ltt-first-package/common";

const router = express.Router();

router.get("/api/users/currentuser", isLogin, (req: Request, res: Response) => {
  console.log(req.currentUser);
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentuserRouter };
