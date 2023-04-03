import express from "express";

const vehicleController = require("../controllers/vehicleConroller");

const router = express.Router();

router.get("/api/vehicles/allVehicles", vehicleController.getAllVihicles);

export { router as getVehiclesRouter };
