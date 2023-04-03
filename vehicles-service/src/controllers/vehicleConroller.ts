import express, { Request, Response } from "express";
import { Vehicle } from "../../models/vehiclesModel";

exports.getAllVihicles = async (req: Request, res: Response) => {
  const vehicles = await Vehicle.find();

  return res.status(200).send(vehicles);
};
