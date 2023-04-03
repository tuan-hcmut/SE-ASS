import cookieSession from "cookie-session";
import { NextFunction } from "express";
import { Socket } from "socket.io";
import passport from "passport";

const sessionSocketMiddleware = cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== "test",
  keys: ["123123123"],
});

const passportInit = passport.initialize();
const passportSession = passport.session();

const wrap = (configure: any) => (socket: Socket, next: NextFunction) => configure(socket.request, {}, next);

module.exports = { sessionSocketMiddleware, passportInit, passportSession, wrap };
