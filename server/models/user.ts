import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String, bcrypt: true },
    username: String,
  },
  { timestamps: true, strict: true, strictQuery: true }
);
export const users = mongoose.model("User", schema, "user");
