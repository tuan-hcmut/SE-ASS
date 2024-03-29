const express = require("express");
import "express-async-errors";
import { errorHandler, NotFoundError } from "@ltt-first-package/common";
require("./services/passport");

const app = express();

app.set("trust proxy", true);

app.use(express.json({ limit: "10kb" }));

app.all("*", async (req: Request, res: Response) => {
  // if we use async then this func will return a promise, so we have use next() and attach error in this in order to move to another middleware
  // so we can use express-async-errors package to handle this, so every time throw new err in async func, it will care for us
  throw new NotFoundError();
});

////////////  handle error //////////////
app.use(errorHandler);

export { app };
