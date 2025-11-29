<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />
    <main class="p-8">
      <router-view />
    </main>
  </div>
</template>
