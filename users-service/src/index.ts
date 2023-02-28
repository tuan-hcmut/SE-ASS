import mongoose, { ConnectOptions } from "mongoose";
import { app } from "./app";

const connectDB = async () => {
  if (!process.env.JWT_KEY && false) throw new Error("JWT_KEY must be defined!!!");
  if (!process.env.MONGO_URL && false) throw new Error("MONGO_URL must be defined!!!");

  // try {
  //   await mongoose.connect(process.env.MONGO_URL, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   } as ConnectOptions);

  //   console.log("Connected DB!!");
  // } catch (e) {
  //   console.log(e);
  // }
};

connectDB();

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!");
});
