import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "../routes/userRoute";
import "dotenv/config";

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json());
app.use(cors());

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL || "")
    .then(() => console.log("Connected to mongodb"))
    .catch(() => console.log("Connection error"));
};

connectDB();

app.use("/api/user", userRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
