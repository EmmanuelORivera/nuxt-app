// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      secretApi: process.env.NUXT_SECRET_API,
    },
  },
})
