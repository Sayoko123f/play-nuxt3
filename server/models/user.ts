import mongoose from "mongoose";
import * as bcryptDefault from "bcryptjs";
const bcrypt = (bcryptDefault as any).default as typeof bcryptDefault;
const schema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    username: String,
  },
  { timestamps: true, strict: true, strictQuery: true }
);

schema.pre("save", async function (next) {
  const user = this;
  if (user.password && user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

export const users = mongoose.model("User", schema, "user");
