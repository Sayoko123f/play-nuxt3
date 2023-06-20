import mongoose from "mongoose";
import * as jwtDefault from "jsonwebtoken";
import * as bcryptDefault from "bcryptjs";
const jwt = (jwtDefault as any).default as typeof jwtDefault;
const bcrypt = (bcryptDefault as any).default as typeof bcryptDefault;

interface IUser {
  email: string;
  password?: string;
  username: string;
  tokens: { token: string }[];
}

interface IUserMethods {
  generateAuthToken(): Promise<string>;
}

type UserModel = mongoose.Model<IUser, {}, IUserMethods>;

const schema = new mongoose.Schema<IUser, UserModel, IUserMethods>(
  {
    email: { type: String, required: true, unique: true },
    password: String,
    username: { type: String, required: true },
    tokens: [{ token: { type: String, required: true } }],
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

schema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, "secret");
  console.log(token);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

export const User = mongoose.model("User", schema, "user");
