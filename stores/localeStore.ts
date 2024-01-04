import { defineStore } from 'pinia'
import { type Language } from '@/types/general'

export const useLocaleStore = defineStore( 'locale', {
  state: () => ( {
    languages: ['en', 'jp'],
    currentLanguage: 'jp' as Language,
  } ),
  actions: {
    setLanguage( newLanguage: Language ) {
      this.currentLanguage = newLanguage
    },
  },
} )