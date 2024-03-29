const express = require("express");
import "express-async-errors";
import cookieSession from "cookie-session";
import passport from "passport";
import { errorHandler, NotFoundError } from "@ltt-first-package/common";

require("./services/passport");
const keys = require("./config/keys");

const app = express();

import { currentuserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { allUserRouter } from "./routes/all-users";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { updateUserRouter } from "./routes/update-user";

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
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(currentuserRouter);
app.use(signinRouter);
app.use(allUserRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(updateUserRouter);

app.all("*", async () => {
  // if we use async then this func will return a promise, so we have use next() and attach error in this in order to move to another middleware
  // so we can use express-async-errors package to handle this, so every time throw new err in async func, it will care for us
  throw new NotFoundError();
});

////////////  handle error //////////////
app.use(errorHandler);

export { app };
