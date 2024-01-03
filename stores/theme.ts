import { defineStore } from 'pinia'
type Theme = 'light' | 'dark'

export const useThemeStore = defineStore( 'theme', {
  state: () => ({
    theme: useColorMode().preference as Theme
  }),
  actions: {
    toggle() {
      const newTheme = useColorMode().preference === 'light' ? 'dark' : 'light'
      useColorMode().preference = newTheme;
      this.theme = newTheme;
    },

    onMounted() {
      this.theme = useColorMode().preference as Theme;
    }
  }
} )