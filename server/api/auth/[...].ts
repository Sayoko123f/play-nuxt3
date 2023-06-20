import { createRouter, defineEventHandler, useBase } from "h3";
import { User } from "../../models";
import type { LoginBody } from "types";
const router = createRouter();

router.post(
  "/login",
  defineEventHandler(async (event) => {
    const { email, password } = await readBody<LoginBody>(event);
    try {
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      return { user, token };
    } catch (err) {
      return createError({ statusCode: 400, statusMessage: "帳號或密碼錯誤" });
    }
  })
);
// router.get(
//   "/world",
//   defineEventHandler((event) => {
//     return "World from World API";
//   })
// );

export default useBase("/api/auth/", router.handler);
