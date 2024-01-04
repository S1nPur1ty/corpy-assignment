import { defineStore } from 'pinia'
import type { Theme } from '@/types/general'

export const useThemeStore = defineStore( 'theme', {
  state: () => ( {
    theme: useColorMode().preference as Theme
  } ),
  
  actions: {
    toggle() {
      const newTheme = useColorMode().preference === 'light' ? 'dark' : 'light'
      useColorMode().preference = newTheme
      this.theme = newTheme
    },

    onMounted() {
      this.theme = useColorMode().preference as Theme
    }
  }
} )