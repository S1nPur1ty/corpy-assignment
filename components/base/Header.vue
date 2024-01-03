<template>
    <header class="flex flex-row items-center justify-between p-2 bg-white h-20 border-b border-b-1 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700">
        <div>
            <img src="@/assets/images/logo.svg">
        </div>

        <div class="flex flex-row items-center gap-5 text-gray-600">
            <button v-if="isMounted" class="flex flex-row items-center gap-2 text-gray-600" @click="themeStore.toggle()">
                <Icon v-if="themeStore.currentTheme === 'light'" name="fa6-solid:moon" class="w-5 h-5" />
                <Icon v-else name="fa6-solid:sun" class="w-5 h-5" />
            </button>

            <Icon name="fa6-solid:bell" class="w-5 h-5 cursor-pointer" />

            <button type="button" class="flex gap-2 items-center justify-center h-9 w-9 text-white bg-[#202A37] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <p class="font-extralight text-xs">CO</p>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { useThemeStore } from '@/stores/theme'
    
    const themeStore = useThemeStore()
    const isMounted = ref(false)

    onMounted(() => {
        isMounted.value = true
    })
</script>