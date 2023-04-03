import { Server, Socket } from "socket.io";
import mongoose, { ConnectOptions } from "mongoose";
import { app } from "./app";
import { consume } from "./config/rabbitmq/consume";

const initSockets = require("./../src/config/socket");

const { sessionSocketMiddleware, wrap, passportInit, passportSession } = require("./config/socket/sessionSocketMiddleware");

if (!process.env.REDIS_HOST) throw new Error("REDIS_HOST must be defined!!!");
if (!process.env.JWT_KEY) throw new Error("JWT_KEY must be defined!!!");
if (!process.env.RABBITMQ_URL) throw new Error("RABBITMQ_URL must be defined!!!");
if (!process.env.MONGO_URL) throw new Error("MONGO_URL must be defined!!!");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log("Connected DB!!");

    consume(process.env.RABBITMQ_URL!, "NEW_USER");
  } catch (e) {
    console.log(e);
  }
};

connectDB();

const server = app.listen(3000, () => {
  console.log("Listening on port 3000!!");
});

const io = new Server(server, {
  path: "/api/communication/socket.io",
  cors: { origin: "*" },
});

io.use(wrap(sessionSocketMiddleware));
io.use(wrap(passportInit));
io.use(wrap(passportSession));

initSockets(io);
