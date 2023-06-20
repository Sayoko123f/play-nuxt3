import { User } from "../../models";
export default defineEventHandler(async (event) => {
  console.log("GET /api/users");
  try {
    console.log("Find users");
    const usersData = await User.find();
    return usersData.map((user) => ({
      id: user._id,
      username: user.username,
      password: user.password,
      tokens: user.tokens,
    }));
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: "Something went wrong.",
    });
  }
});
