<template>
    <header class="flex flex-row items-center justify-between p-2 bg-white h-20 border-b border-b-1 border-gray-200">
        <div>
            <img src="@/assets/images/logo.svg">
        </div>

        <div class="flex flex-row items-center gap-5 text-gray-600">
            <Icon name="fa6-solid:bell" class="w-5 h-5" />

            <button type="button" class="flex gap-2 items-center justify-center h-9 w-9 text-white bg-[#202A37] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <p class="font-extralight text-xs">CO</p>
            </button>
        </div>
    </header>
</template>