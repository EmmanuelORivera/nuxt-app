// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css', 'bootstrap/dist/css/bootstrap.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      secretApi: process.env.NUXT_SECRET_API,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
})
