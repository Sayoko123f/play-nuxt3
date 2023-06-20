import { defineStore } from "pinia";
import type { FUser, LoginBody, LoginResponse } from "types";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as FUser | null,
    token: "",
  }),
  actions: {
    async login(body: LoginBody) {
      const res = await $fetch<LoginResponse>("/api/auth/login", {
        method: "POST",
        body,
      });
      localStorage.setItem("token", res.token);
      this.user = res.user;
      this.token = res.token;
      return res;
    },
  },
});
