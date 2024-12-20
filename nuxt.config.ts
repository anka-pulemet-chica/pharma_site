// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/clear.css', '~/assets/css/main.css', '~/assets/css/vars.css'],
  modules: ['@nuxt/image', '@nuxtjs/strapi', '@nuxtjs/i18n'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    cookie: {},
    cookieName: 'strapi_jwt',

  },
  runtimeConfig: {
    public: {
      // StrapiUrl: 'https:/strapi.phmg.by',
      StrapiUrl: 'http://localhost:1337'
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      // useCookie: true,
      // cookieKey: 'i18n_redirected',
      // redirectOn: 'root',
      // alwaysRedirect: true,
      // fallbackLocale: 'en'
    },
    locales: [
      {
        name: 'Russian',
        code: 'ru',
        language: 'ru',
        file: 'ru.json'
      },
      {
        name: 'English',
        code: 'en',
        language: 'en',
        file: 'en.json'
      },
      
      {
        name: 'Chinese',
        code: 'zh',
        language: 'zh',
        file: 'zh.json'
      }
    ],
    lazy: true,
    defaultLocale: 'ru',
    langDir: 'lang/'
    },

    ssr: false
  },
)

//de132d9cf8adbe8057a76f90bae30bc7c2301dbb98ef7e8aee46d42154019c6972f35105102e627cf263489c64bb735acd3588b8e5145f66b26d55e082b1cd1627dbd050043aa93e9afa626cbd0be0d93fefc415603df673e56923c9329b088a02c00ad492163a989bd0cb4be2a862e7d3640c65afb1fd344aaa6ac85bee4467