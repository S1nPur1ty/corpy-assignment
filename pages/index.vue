<template>
  <div class="grid grid-rows-[auto_1fr] min-h-screen overflow-scroll">
    <!-- Header -->
    <Header />

    <div class="grid grid-cols-[auto_1fr] flex-1">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main content -->
      <main class="p-5">
        <DashboardContentView />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
</script>