<template>
    <aside class="flex flex-col items-center py-1 gap-2 bg-white border-r border-r-1 border-gray-200 dark:bg-gray-900 dark:border-gray-700" aria-label="Sidebar">
        <nav>
            <ul class="flex flex-col gap-2 p-2">
                <li
                    v-for="(icon, index) in icons" :key="index"
                    class="flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-800"
                    :class="{ 'bg-gray-100 dark:bg-gray-800 dark:text-white': tabIndex === index, 'text-gray-500': tabIndex !== index }"
                    @click="setTabIndex(index)"
                    >
                    <Icon :name="icon" />
                </li>
            </ul>
            <hr class="dark:border-gray-700" />
        </nav>

        <button type="button" class="flex gap-2 items-center justify-center h-9 w-9 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Icon name="fa6-solid:plus" class="text-white" />
        </button>
    </aside>
</template>

<script setup lang="ts">
    const tabIndex = ref(0)
    const setTabIndex = ( newTabIndex: number ) => tabIndex.value = newTabIndex
    const icons = [
        'fa6-solid:database',
        'fa6-solid:robot',
        'fa6-solid:rocket',
        'fa6-solid:chart-column'
    ]
</script>