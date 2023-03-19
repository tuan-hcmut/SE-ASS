const express = require("express");
// import { isLogin, requireAuth, NotFoundError, errorHandler } from "@ltt-first-package/common";
import cookieSession from "cookie-session";
import passport from "passport";
// import { getRouter } from "./router/get";

const app = express();

app.set("trust proxy", true);
app.use(express.json({ limit: "10kb" }));
// app.use(
//   cookieSession({
//     signed: false,
//     secure: process.env.NODE_ENV !== "test",
//   })
// );

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["123123123"],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use(getRouter);

// app.all("*", async () => {
//   // if we use async then this func will return a promise, so we have use next() and attach error in this in order to move to another middleware
//   // so we can use express-async-errors package to handle this, so every time throw new err in async func, it will care for us
//   throw new NotFoundError();
// });

////////////  handle error //////////////
// app.use(errorHandler);

export { app };
