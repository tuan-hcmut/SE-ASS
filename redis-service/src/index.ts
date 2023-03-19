import { app } from "./app";
const initSockets = require("./../src/socket");

const server = app.listen(3000, () => {
  console.log("Listening on port 3000!!");
});

const io = require("socket.io")(server, { cors: { origin: "*" } });
initSockets(io);
