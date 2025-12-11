<template>
  <header class="w-full bg-white shadow-sm border-b border-gray-200 shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between space-x-20">
      <img
        src="@/assets/imgs/Logo.png"
        alt="Logo"
        class="h-12 w-auto cursor-pointer object-contain"
      />

      <SearchBar @search="handleSearch" />
      <div class="flex items-center gap-6 text-gray-700 text-sm">
        <button class="flex items-center gap-1 hover:text-green-600 cursor-pointer">
          <i class="pi pi-user text-lg"></i>
          <span>Account</span>
        </button>

        <button class="flex items-center gap-1 hover:text-green-600 cursor-pointer">
          <i class="pi pi-sync text-lg"></i>
          <span>Compare</span>
        </button>

        <button class="flex items-center gap-1 hover:text-green-600 cursor-pointer">
          <i class="pi pi-heart text-lg"></i>
          <span>Wishlist</span>
        </button>

        <button class="flex items-center gap-1 hover:text-green-600 cursor-pointer">
          <i class="pi pi-shopping-cart text-lg"></i>
          <span>Cart</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import 'primeicons/primeicons.css'
import SearchBar from '@/components/SearchBar.vue'

const handleSearch = (query) => {
  console.log('Search query:', query)
}
</script>
