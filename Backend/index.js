//creating server

import express from "express";
import databaseConnection from "./config/database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";
import path from "path";

dotenv.config({
  path: ".env",
});

databaseConnection();

const app = express();
const _dirname = path.resolve();
//adding middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
//using cors
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));
//routes / api

app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.use(express.static(path.join(_dirname, "Frontend/X-app/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend/X-app", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`);
});
