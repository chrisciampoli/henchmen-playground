import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#102338',
          900: '#0B1A2E'
        },
        coral: {
          400: '#F07A5C',
          500: '#E85A3C'
        }
      }
    }
  },
  plugins: []
} satisfies Config