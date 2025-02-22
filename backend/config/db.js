import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("DB connected successfully"))
        .catch((error) => console.log("Error: DB not connected", error));
};
