const express = require("express");
import "express-async-errors";
import cookieSession from "cookie-session";
const app = express();

// import { currentuserRouter } from "./routes/current-user";
// import { signinRouter } from "./routes/signin";
// import { signoutRouter } from "./routes/signout";
// import { signupRouter } from "./routes/signup";
import { errorHandler, NotFoundError } from "@ltt-first-package/common";

app.set("trust proxy", true);
app.use(express.json({ limit: "10kb" }));
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.get("/", (req: any, res: any) => {
  res.send("hello");
});
// app.use(currentuserRouter);
// app.use(signinRouter);
// app.use(signoutRouter);
// app.use(signupRouter);

app.all("*", async () => {
  // if we use async then this func will return a promise, so we have use next() and attach error in this in order to move to another middleware
  // so we can use express-async-errors package to handle this, so every time throw new err in async func, it will care for us
  throw new NotFoundError();
});

////////////  handle error //////////////
app.use(errorHandler);

export { app };
