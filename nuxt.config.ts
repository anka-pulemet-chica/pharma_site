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
      // StrapiUrl: 'http://strapi.phmg.by',
      StrapiUrl: 'https://strapi.phmg.by',
      // StrapiUrl: 'http://localhost:1337'
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

    ssr: true
  },
)
