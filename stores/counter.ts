import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed( () => count.value % 2 === 0 ? 'even' : 'odd' );
  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, doubleCount, increment, decrement }
})