import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true) // to prevent unknown field Queries

    if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found!");
    if (isConnected) return console.log("Already Connected!");

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log("Connected to MongoDB!");

    } catch (error) {
        console.log(error);
    }
}