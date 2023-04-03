import mongoose from "mongoose";

interface VehicleAttribute {
  type: string;
  weight: string;
  capacity: string;
  description: string;
  fuelConsumptions: string;
  photo?: string;
}

interface VehicleDoc extends mongoose.Document {
  type: string;
  weight: string;
  capacity: string;
  description: string;
  fuelConsumptions: string;
  photo?: string;
}

interface VehicleModel extends mongoose.Model<VehicleDoc> {
  build(attribute: VehicleAttribute): VehicleDoc;
}

const vehicleSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      require: true,
    },
    weight: {
      type: String,
      require: true,
    },

    capacity: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    fuelConsumptions: {
      type: String,
      require: true,
    },

    photo: {
      type: String,
      require: true,
      default: "",
    },
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

/////// create new method  //////////
vehicleSchema.statics.build = (attribute: VehicleAttribute) => {
  return new Vehicle(attribute);
};

const Vehicle = mongoose.model<VehicleDoc, VehicleModel>("Vehicle", vehicleSchema);

export { Vehicle };
