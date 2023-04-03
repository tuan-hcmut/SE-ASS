import { Socket } from "socket.io";
import { IncomingMessage } from "http";

export interface UserPayload {
  email?: string;
  id?: string;
  fullName?: string;
  role?: string;
  photo?: string;
}

export interface CustomIncomingMessage extends IncomingMessage {
  currentUser?: UserPayload;
  user?: UserPayload;
  session?: any;
  cookie?: string;
}

export interface CustomSocket extends Socket {
  currentUser?: UserPayload;
  request: CustomIncomingMessage;
}

export interface UserRabbitmq {
  email: string;
  photo?: string;
  role: string;
  id?: string;
  fullName: string;
}

export interface MessageData {
  message: string;
  user: UserPayload;
  userChat: UserPayload;
}
