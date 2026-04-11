/** @type {import('nuxt').NuxtConfig} */
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})