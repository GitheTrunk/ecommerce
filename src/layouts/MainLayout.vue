<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import NavCategory from '@/components/NavCategory.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderComponent />
    <NavCategory />
    <main class="p-8">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>
