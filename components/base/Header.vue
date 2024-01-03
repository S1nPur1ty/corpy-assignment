<template>
    <header class="flex flex-row items-center justify-between p-2 bg-white h-20 border-b border-b-1 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700">
        <div>
            <img src="@/assets/images/logo.svg">
        </div>
        
        <div class="flex flex-row items-center gap-5 text-gray-600">
            <button v-if="isMounted" class="flex flex-row items-center gap-2 text-gray-600" @click="themeStore.toggle()">
                <Icon v-if="themeStore.theme === 'light'" name="fa6-solid:moon" class="w-5 h-5" />
                <Icon v-else name="fa6-solid:sun" class="w-5 h-5" />
            </button>

            <Icon name="fa6-solid:bell" class="w-5 h-5 cursor-pointer" />

            <div class="relative" @mouseleave="isOpen = false">
                <button data-dropdown-toggle="dropdown" 
                    @mouseenter="isOpen = true"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                    type="button">
                    {{ localeStore.currentLanguage.toUpperCase() }}
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div class="absolute top-10 right-0 pt-2 flex" :class="{'flex': isOpen, 'hidden': !isOpen}">
                    <div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                        <ul class="text-sm p-1 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li v-for="language in localeStore.languages" :key="language" @click="localeStore.setLanguage(language as Language)">
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-600 dark:hover:text-white">{{ language.toUpperCase() }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <button type="button" class="flex gap-2 items-center justify-center h-9 w-9 text-white bg-[#202A37] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <p class="font-extralight text-xs">CO</p>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { useThemeStore } from '@/stores/themeStore'
    import { useLocaleStore } from '@/stores/localeStore'
    import { type Language } from '@/types/general'

    const isOpen = ref(false)

    const localeStore = useLocaleStore()
    const { locale } = useI18n()

    watch( () => localeStore.currentLanguage, 
        (newLanguage) => {
            locale.value = newLanguage
            isOpen.value = false
        }, {immediate: true}
    )

    const themeStore = useThemeStore()
    const isMounted = ref(false)

    onMounted( () => {
        themeStore.onMounted()
        isMounted.value = true
    } )
</script>