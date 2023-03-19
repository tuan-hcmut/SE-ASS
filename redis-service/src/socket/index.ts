import { Server, Socket } from "socket.io";

const initSockets = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("Socket connected!!!");

    socket.on("message", (data) => {
      console.log(data);
    });
  });
};

module.exports = initSockets;
