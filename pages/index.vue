<template>
  <div class="grid grid-rows-[auto_1fr] min-h-screen bg-gray-100">
    <!-- Header -->
    <Header />

    <div class="grid grid-cols-[50px_1fr] flex-1">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main content -->
      <main class="p-10">
        <DashboardContentView />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
</script>
