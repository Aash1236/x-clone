//creating server

import express from "express";
import databaseConnection from "./config/database.js"
import dotenv from "dotenv"; 
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import tweetRoute from "./routes/tweetRoute.js"

dotenv.config({
    path:".env"
})

databaseConnection();

const app = express();

//adding middleware
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser());

//routes / api

app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);



app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})
