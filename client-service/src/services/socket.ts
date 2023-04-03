import { io, Socket } from "socket.io-client";

const socket = io(`http://uwcv2.net`, {
  path: "/api/communication/socket.io",
});

export default socket;
