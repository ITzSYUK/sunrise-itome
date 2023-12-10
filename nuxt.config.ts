// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@morev/vue-transitions/nuxt',
    'nuxt-icons',
    '@nuxt/image',
  ],
  plugins: ['~/plugins/click-outside.ts', { src: '~/plugins/maska.ts', mode: 'client' }],
  css: ['@/shared/global.css', '@unocss/reset/tailwind.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { name: 'description', content: 'Автомобили и мотоциклы из Японии, Кореи и Китая' },
      ],
    },
  },

})
