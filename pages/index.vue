<template>

  <div class="p-5 flex flex-col gap-6 h-full dark:bg-gray-900">
      <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-bold leading-tight text-gray-900 dark:text-white">{{ $t('dataset') }}</h1>
          <p class="text-lg text-gray-500">{{ $t('manageDatasets') }}</p>
      </div>

      <ul class="flex gap-6 overflow-x-scroll whitespace-nowrap text-sm font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li v-for="(tab, index) in tabs" 
              @click="selectedTabIndex = index" 
              class="hover:text-blue-600" 
              :class="{ 'border-b-2 border-blue-600 text-blue-600': selectedTabIndex === index }"
            >
            <a href="#" class="inline-block py-3">
                {{ $t(tab.name) }}
            </a>
          </li>
      </ul>
      
      <div class="dark:text-white">
          <component :is="tabComponent" :data="data" />
      </div>
  </div>
  
</template>


<script setup lang="ts">
  import { defineAsyncComponent, computed, ref } from 'vue'
  import { useAsyncData } from 'nuxt/app'

  const TabularDataComponent = defineAsyncComponent(() => import('@/components/dashboard/TabularDataComponent.vue'))
  const ImageDataComponent = defineAsyncComponent(() => import('@/components/dashboard/ImageDataComponent.vue'))
  const TextDataComponent = defineAsyncComponent(() => import('@/components/dashboard/TextDataComponent.vue'))

  const { data } = await useAsyncData( () => $fetch('/api/files') )

  const tabs = [
    {
      name: 'tabularData',
      component: TabularDataComponent
    },
    {
      name: 'imageData',
      component: ImageDataComponent
    },
    {
      name: 'textData',
      component: TextDataComponent
    }
  ]

  const selectedTabIndex = ref(0)
  const tabComponent = computed( () => tabs[selectedTabIndex.value].component )
</script>