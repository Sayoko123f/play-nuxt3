import type { Model, HydratedDocument } from "mongoose";
import type { Except } from "type-fest";

export interface LoginBody {
  email: string;
  password: string;
}
export interface IUser {
  email: string;
  password: string;
  username: string;
  tokens: { token: string }[];
}
export type FUser = Except<IUser, "tokens" | "password">;

export type LoginResponse = { user: FUser; token: string };

export interface IUserMethods {
  generateAuthToken(): Promise<string>;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  findByCredentials(
    email: string,
    password: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
}
