// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Corpy & Co - Dashboard',
    }
  },
  devtools: { enabled: true },
  css: [ '~/assets/css/main.css' ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt', 
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
})