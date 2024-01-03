<template>
  <div class="grid grid-rows-[auto_1fr] min-h-screen">
    <Header class="sticky top-0 z-10" />
    <div class="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <main class="box-border overflow-scroll">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from '~/components/base/Header.vue'
  import Sidebar from '~/components/base/Sidebar.vue'
</script>