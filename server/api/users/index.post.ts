import { User } from "../../models";
interface IRequestBody {
  email: string;
  password: string;
  username: string;
}
export default defineEventHandler(async (event) => {
  console.log("POST /api/users");
  const { email, password, username } = await readBody<IRequestBody>(event);
  try {
    const userData = await User.findOne({
      email,
    });
    if (userData) {
      throw createError({
        statusCode: 409,
        statusMessage: `User with given ${email} already exists.`,
      });
    } else {
      console.log("Create user");
      const newUserData = await User.create({
        email,
        password,
        username,
      });
      const token = await newUserData.generateAuthToken();
      return {
        id: newUserData._id,
        username: newUserData.username,
        token,
      };
    }
  } catch (err) {
    console.error(err);
    throw createError({
      statusCode: 500,
      statusMessage: `Server Error`,
    });
  }
});
