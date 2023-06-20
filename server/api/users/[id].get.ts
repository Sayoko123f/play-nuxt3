import { users } from "../../models";
export default defineEventHandler(async (event) => {
  const userId = event?.context?.params?.id;
  if (!userId) {
    throw createError({
      statusCode: 404,
      statusMessage: `User with id ${userId} doesn't exists.`,
    });
  }
  console.log(`GET /api/users/${userId}`);
  try {
    console.log("Find user");
    const userData = await users.findOne({
      _id: userId,
    });
    if (userData) {
      console.log("User found");
      return {
        id: userData._id,
        username: userData.username,
      };
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: `User with id ${userId} doesn't exists.`,
      });
    }
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: `Server Error`,
    });
  }
});
