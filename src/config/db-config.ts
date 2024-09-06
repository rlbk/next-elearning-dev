import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || "");
    console.log("✔️ Mongodb connected");
  } catch (error) {
    console.log(`❌ Error connecting to MongoDB`, error);
  }
};
