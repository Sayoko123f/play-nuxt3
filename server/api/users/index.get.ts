import { users } from "../../models";
export default defineEventHandler(async (event) => {
  console.log("GET /api/users");
  try {
    console.log("Find users");
    const usersData = await users.find();
    return usersData.map((user) => ({
      id: user._id,
      username: user.username,
    }));
  } catch (err) {
    throw createError({
      statusCode: 400,
      statusMessage: "Something went wrong.",
    });
  }
});
