import { Server } from "socket.io";
const { initializeUser, removeUser, getAllInfor, recieveMessage } = require("./socketController");

import { CustomSocket, MessageData } from "../../shared/variables";

const initSockets = (io: Server) => {
  io.on("connection", (socket: CustomSocket) => {
    initializeUser(socket, io);

    socket.on("get-all-infor", () => getAllInfor(socket, io));

    socket.on("send-message", (data: MessageData) => recieveMessage(socket, data));

    socket.on("disconnect", () => {
      removeUser(socket, io);
    });
  });
};

module.exports = initSockets;
