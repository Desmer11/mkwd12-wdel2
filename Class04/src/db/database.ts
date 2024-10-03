import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

export const connect = async () => {
  if (!MONGO_URL) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URL, {
      dbName: "budgets-db",
    });

    console.log("Connected to mongo success.");
  } catch (error) {
    throw new Error("Connection to MongoDB failed.");
  }
};
