import { defineStore } from 'pinia'
type Theme = 'light' | 'dark'

export const useThemeStore = defineStore( 'theme', {
  state: () => ({
    currentTheme: useColorMode().preference as Theme
  }),
  actions: {
    toggle() {
      useColorMode().preference = useColorMode().preference === 'light' ? 'dark' : 'light'
    }
  }
} )