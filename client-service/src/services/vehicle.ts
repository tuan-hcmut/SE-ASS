import axios from "axios";
import { VehiclePayload } from "../shared/variables";

export const getAll = async () => {
  try {
    const vehicles = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/api/vehicles/allVehicles`,
    });

    return vehicles.data as VehiclePayload[];
  } catch (err) {
    console.error(err);
  }
};
