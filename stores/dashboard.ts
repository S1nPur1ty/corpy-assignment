import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', () => {
  const tabIndex = ref(0)

  const setTabIndex = (newTabIndex: number) => tabIndex.value = newTabIndex

  return { tabIndex, setTabIndex }
})
