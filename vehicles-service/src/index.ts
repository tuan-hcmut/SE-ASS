import mongoose, { ConnectOptions } from "mongoose";
import { app } from "./app";
import { Vehicle } from "../models/vehiclesModel";

const connectDB = async () => {
  if (!process.env.JWT_KEY) throw new Error("JWT_KEY must be defined!!!");
  if (!process.env.MONGO_URL) throw new Error("MONGO_URL must be defined!!!");

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("Connected DB!!");

    const sampleVehicles = [
      {
        type: "Suzuki 400kg Garbage Truck",
        weight: "2000kg",
        capacity: "400kg",
        description: "The truck features a sealed casting design, a flip-top cover, a collection groove for collecting water...",
        fuelConsumptions: "20 liters/100km",
        photo: "https://bachhoamoitruong.com/wp-content/uploads/2020/03/xe-quet-rac-suzuki.jpg",
      },
      {
        type: "Jac X150 1.300KG Garbage Truck",
        weight: "3400kg",
        capacity: "1300kg",
        description:
          "his garbage truck is produced by Jac Motors based on Japanese technology standards and has been certified by the Vietnam Register",
        fuelConsumptions: "35 liters/100km",
        photo: "https://bachhoamoitruong.com/wp-content/uploads/2020/03/xe-cho-rac-jax.jpg",
      },
      {
        type: "Hyundai HD260 20CBM Garbage Truck",
        weight: "4000kg",
        capacity: "1500kg",
        description: "Hyundai garbage trucks come in a variety of models and capacities, but the Hyundai HD260 with a capacity of...",
        fuelConsumptions: "40 liters/100km",
        photo: "https://bachhoamoitruong.com/wp-content/uploads/2020/03/xe-cho-rac-huynh-dai.jpg",
      },
      {
        type: "Hino Hooklift Garbage Truck",
        weight: "1500kg",
        capacity: "150kg",
        description: "The Hino Hooklift Garbage Truck is also one of the 4 popular models in the market due to its advantageous structure...",
        fuelConsumptions: "15 liters/100km",
        photo: "https://bachhoamoitruong.com/wp-content/uploads/2020/03/xe-cho-rac-Hooklift-hino.jpg",
      },
    ];

    const res = await Vehicle.insertMany(sampleVehicles);
  } catch (e) {
    console.log(e);
  }
};

connectDB();

app.listen(3000, () => {
  console.log("Listening on port 3000!!");
});
