import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String, default: null },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);    // We create a model (Table) named "User" using the userSchema defined above.

export default User;
