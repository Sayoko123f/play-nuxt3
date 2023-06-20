import { useUserStore } from "@/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUserStore().user;
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (!user) {
    console.log("[middleware/auth]: 未登入");
    return navigateTo("/login");
  }
});
