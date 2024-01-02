<template>

    <div class="p-5 flex flex-col gap-6 h-full dark:bg-gray-900 ">
        <div class="flex flex-col gap-2">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">データセット</h1>
            <p class="text-lg text-gray-500">データセットを管理する</p>
        </div>
  
        <ul class="flex flex-wrap gap-6 text-sm font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            
            <li @click="selectedTabIndex = 0" class="hover:text-blue-600" :class="{ 'border-b-2 border-blue-600 text-blue-600': selectedTabIndex === 0 }">
              <a href="#" class="inline-block py-3">
                  数値データ
              </a>
            </li>
            <li @click="selectedTabIndex = 1" class="hover:text-blue-600" :class="{ 'border-b-2 border-blue-600 text-blue-600': selectedTabIndex === 1 }">
              <a href="#" class="inline-block py-3">
                  画像データ
              </a>
            </li>
            <li @click="selectedTabIndex = 2" class="hover:text-blue-600" :class="{ 'border-b-2 border-blue-600 text-blue-600': selectedTabIndex === 2 }">
              <a href="#" class="inline-block py-3">
                  テキストデータ
              </a>
            </li>
        </ul>          
  
        
        <div class="dark:text-white">
            <component :is="tabComponent" />
        </div>
  
    </div>
    
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';

export default defineComponent({
    components: {
        TabularDataComponent: defineAsyncComponent(() => import('./content/TabularDataComponent.vue')),
        ImageDataComponent: defineAsyncComponent(() => import('./content/ImageDataComponent.vue')),
        TextDataComponent: defineAsyncComponent(() => import('./content/TextDataComponent.vue')),
    },
    setup() {
        const tabs = ['TabularDataComponent', 'ImageDataComponent', 'TextDataComponent'];

        const selectedTabIndex = ref(0);

        const tabComponent = computed(() => {
            return tabs[selectedTabIndex.value];
        });

        return {
            tabs,
            selectedTabIndex,
            tabComponent,
        };
    }
});
</script>