import { app } from "./app";
import createTables from "./models/mcpsModel";

const connectDB = async () => {
  if (!process.env.JWT_KEY) throw new Error("JWT_KEY must be defined!!!");
  if (!process.env.MYSQL_URL) throw new Error("MYSQL_URL must be defined!!!");

  createTables()
    .then(() => {
      console.log("Tables created successfully");
    })
    .catch((err: any) => {
      console.error("Error creating tables:", err);
    });
};

// connectDB();

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
});
