import { users } from "../../models";
interface IRequestBody {
  email: string;
  password: string;
  username: string;
}
export default defineEventHandler(async (event) => {
  console.log("POST /api/users");
  const { email, password, username } = await readBody<IRequestBody>(event);
  try {
    const userData = await users.findOne({
      email,
    });
    if (userData) {
      throw createError({
        statusCode: 409,
        statusMessage: `User with given ${email} already exists.`,
      });
    } else {
      console.log("Create user");
      const newUserData = await users.create({
        email,
        password,
        username,
      });
      return {
        id: newUserData._id,
        username: newUserData.username,
      };
    }
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: `Server Error`,
    });
  }
});
