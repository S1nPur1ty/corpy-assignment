<template>
    <div class="flex flex-col gap-6">

        <div class="flex flex-col md:flex-row justify-between gap-6">
            <div class="flex flex-col md:flex-row gap-6">
                <button type="button" class="flex gap-2 items-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <Icon name="fa6-solid:angle-down" />
                    アクション
                </button>

                <button type="button" class="flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <Icon name="fa6-solid:arrow-up-from-bracket" />
                    データセットをアップロード
                </button>
            </div>

            <div class="flex items-center px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <Icon name="fa6-solid:magnifying-glass" class="text-gray-400" />
                <input 
                    type="text" 
                    v-model="searchQuery" 
                    class="bg-transparent border-transparent focus:border-transparent focus:ring-0"
                    placeholder="ファイル名で検索する"
                />
            </div>
        </div>
    
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>                                
                            </div>
                        </th>
                        
                        <th scope="col" class="p-4 w-4">
                            
                        </th>

                        <th scope="col" class="px-6 py-3">
                        データセット名
                        </th>
                        <th scope="col" class="px-6 py-3">
                        行数X列数
                        </th>
                        <th scope="col" class="px-6 py-3">
                        作成日
                        </th>
                        <th scope="col" class="px-6 py-3">
                        更新日
                        </th>
                        <th scope="col" class="px-6 py-3">
                        ステータス
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="(file, index) in filteredFiles" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4" :key="index">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td class="w-4 p-4">
                        <Icon name="fa6-solid:angle-down" />
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ file.name }}
                    </th>
                    <td class="px-6 py-4">
                    {{ `${file.rows} x ${file.cols}` }}
                    </td>
                    <td class="px-6 py-4">
                    {{ file.createdAt }}
                    </td>
                    <td class="px-6 py-4">
                    {{ file.updatedAt }}
                    </td>
                    <td class="px-6 py-4">
                        <span :class="{
                            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300': file.status == 'OK',
                            'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300': file.status == 'Defective Value Exist',
                            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300': file.status == 'Uploading',
                        }" class="py-1 px-3 rounded-md">{{ file.status }}</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <nav aria-label="Page navigation example" class="ml-auto mt-auto">
            <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
                <a href="#" class="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                </a>
            </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({data: Object})
    
    const searchQuery = ref('')
    const filteredFiles = computed(() => {
        if (!searchQuery.value)
            return props.data

        return props.data.filter( file => 
            file.name.toLowerCase().includes(
                searchQuery.value.toLowerCase() 
            )
        )
    })
</script>