/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'corpy-dark': '#202a37',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

