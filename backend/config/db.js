// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect(process.env.MONGODB_URL)
//         .then(() => console.log("DB connected successfully"))
//         .catch((error) => console.log("Error: DB not connected", error));
// };


import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
          
        });
        console.log("✅ DB connected successfully");
    } catch (error) {
        console.error("❌ Error: DB not connected", error.message);
        process.exit(1); // Optional: Exit the process if the DB connection fails
    }
};
