import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  type theme = 'light' | 'dark';

  const toggleTheme = () => {
    useColorMode().preference = useColorMode().preference === 'light' ? 'dark' : 'light';
  }

  const currentTheme = computed(() => useColorMode().preference);

  return { toggleTheme, currentTheme }
})
