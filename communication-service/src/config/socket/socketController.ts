import { CustomSocket, UserPayload, MessageData } from "../../shared/variables";
import jwt from "jsonwebtoken";
import { Server, Socket } from "socket.io";
const redisClient = require("./../redis/index");

const listUsers = async (socket: CustomSocket, io: Server) => {
  const UsersOnline = await redisClient.hgetall(`UsersOnline`);
  const messages = await redisClient.lrange(`chat:${socket.currentUser?.id}`, 0, -1);
  // console.log(JSON.stringify(UsersOnline));
  io.emit("list-users-online", JSON.stringify(UsersOnline));
  socket.emit("messages", messages);
};

module.exports.initializeUser = async (socket: CustomSocket, io: Server) => {
  console.log("Socket connected!!!");
  if (socket.request.user !== undefined) {
    socket.currentUser = socket.request.user;
  } else if (!socket.request.session?.token) {
    // thhrow error here
  } else {
    try {
      const payload = jwt.verify(socket.request.session.token, process.env.JWT_KEY!) as UserPayload;
      socket.currentUser = payload;
    } catch (e) {}
    // console.log(`User:${JSON.stringify(socket.currentUser)}`);
    // console.log(`SocketID: ${socket.currentUser?.id}`);
    socket.join(socket.currentUser?.id!);

    await redisClient.hmset("UsersOnline", `${socket.currentUser?.id}`, JSON.stringify(socket.currentUser));
    listUsers(socket, io);
  }
  const messages = await redisClient.lrange(`chat:${socket.currentUser?.id}`, 0, -1);
  socket.emit("messages", messages);
};

module.exports.removeUser = async (socket: CustomSocket, io: Server) => {
  console.log(`Socket disconnected: ${socket.currentUser?.id}`);
  await redisClient.hdel("UsersOnline", socket.currentUser?.id);
  listUsers(socket, io);
};

module.exports.getAllInfor = async (socket: CustomSocket, io: Server) => {
  listUsers(socket, io);
};

module.exports.recieveMessage = async (socket: CustomSocket, data: MessageData) => {
  const dataStore = [data.userChat.id, data.user.id, data.message].join(".");

  await redisClient.lpush(`chat:${data.userChat.id}`, dataStore);
  await redisClient.lpush(`chat:${data.user.id}`, dataStore);
  const messages = await redisClient.lrange(`chat:${socket.currentUser?.id}`, 0, -1);
  socket.to(data.userChat?.id!).emit("send-message", { messages, userChat: data.userChat });
};
