<template>
    <aside class="flex flex-col items-center py-1 gap-2 bg-white border-r border-r-1 border-gray-200" aria-label="Sidebar">

        <nav>
            <ul class="flex flex-col gap-2 p-2">
                <li class="flex items-center justify-center bg-gray-100 w-9 h-9 rounded-lg">
                    <Icon name="fa6-solid:database" />
                </li>
                <li class="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500">
                    <Icon name="fa6-solid:robot" />
                </li>
                <li class="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500">
                    <Icon name="fa6-solid:rocket" />
                </li>
                <li class="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500">
                    <Icon name="fa6-solid:chart-column" />
                </li>
            </ul>
            <hr />
        </nav>

        <button type="button" class="flex gap-2 items-center justify-center h-9 w-9 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <Icon name="fa6-solid:plus" class="text-white" />
        </button>
        
    </aside>
</template>