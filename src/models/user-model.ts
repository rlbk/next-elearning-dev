import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    clerkUserId: { type: String, required: true, unique: true },
    profilePic: { type: String, required: false },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true },
);

if (mongoose.models && mongoose.models["users"])
  delete mongoose.models["users"];

const User = mongoose.model("users", userSchema);
export default User;
