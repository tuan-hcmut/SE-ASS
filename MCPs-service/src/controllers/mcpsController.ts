import { Request, Response } from "express";

exports.viewAllMCPs = async (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null });
};
