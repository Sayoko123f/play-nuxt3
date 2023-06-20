// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    mongoUrl: "mongodb://192.168.12.41:25017/test",
  },
  nitro: {
    plugins: ["~/server/install-mongo.ts"],
  },
});
