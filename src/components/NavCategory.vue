<template>
  <nav class="w-full bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-2 flex items-center gap-3">
      <!-- Browse All Categories Dropdown -->
      <div class="relative group">
        <button
          class="text-white bg-green-400 border border-green-400 rounded-xl flex items-center gap-1 px-2 py-1 text-gray-700 text-sm font-semibold hover:text-gray-600 transition-colors whitespace-nowrap"
        >
          <i class="pi pi-objects-column text-base"></i>
          <span class="m-2">Browsen all</span>
          <i class="pi pi-chevron-down text-xs"></i>
        </button>
        <!-- Dropdown Menu -->
        <div
          class="absolute hidden group-hover:block top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-36 z-50"
        >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Fast Food</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Fresh Produce</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Dairy</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Bakery</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >Beverages</a
          >
        </div>
      </div>

      <!-- Hot Deals -->
      <a
        href="#"
        class="flex items-center gap-1 py-3 px-2 text-gray-700 text-sm font-semibold hover:text-green-600 transition-colors whitespace-nowrap"
      >
        <i class="pi pi-bolt text-base text-orange-500"></i>
        <span class="font-semibold">Hot Deals</span>
      </a>

      <!-- Main Navigation Links -->
      <a
        href="#"
        class="py-3 px-2 text-gray-700 text-sm font-semibold hover:text-green-600 transition-colors"
        >Home</a
      >

      <!-- Food Dropdown -->
      <div class="relative group">
        <button
          class="flex items-center gap-0.5 py-3 px-2 text-gray-700 text-sm font-semibold hover:text-green-600 transition-colors"
        >
          <span>Food</span>
          <i class="pi pi-chevron-down text-xs"></i>
        </button>
        <div
          class="absolute hidden group-hover:block top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-32 z-50"
        >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Fruits</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Vegetables</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >Grains</a
          >
        </div>
      </div>

      <!-- Vegetables Dropdown -->
      <div class="relative group">
        <button
          class="flex items-center gap-0.5 py-3 px-2 text-gray-700 text-sm font-semibold hover:text-green-600 transition-colors whitespace-nowrap"
        >
          <span>Vegetables</span>
          <i class="pi pi-chevron-down text-xs"></i>
        </button>
        <div
          class="absolute hidden group-hover:block top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-36 z-50"
        >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Leafy Greens</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Root Vegetables</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >Fresh Herbs</a
          >
        </div>
      </div>

      <!-- Drink Link -->
      <a
        href="#"
        class="py-3 px-2 text-gray-700 text-sm font-semibold hover:text-green-600 transition-colors"
        >Drink</a
      >

      <!-- Cookies Link -->
      <a
        href="#"
        class="py-3 px-2 text-gray-700 text-sm font-semibold hover:text-green-600 transition-colors"
        >Cookies</a
      >

      <!-- Meat & Seafood Dropdown -->
      <div class="relative group">
        <button
          class="flex items-center gap-0.5 py-3 px-2 text-gray-700 text-sm font-semibold hover:text-green-600 transition-colors whitespace-nowrap"
        >
          <span>Meat & Seafood</span>
          <i class="pi pi-chevron-down text-xs"></i>
        </button>
        <div
          class="absolute hidden group-hover:block top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-32 z-50"
        >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Beef</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b"
            >Chicken</a
          >
          <a
            href="#"
            class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >Seafood</a
          >
        </div>
      </div>

      <!-- Bakery Link -->
      <a
        href="#"
        class="py-3 px-2 text-gray-700 text-sm font-semibold hover:text-green-600 transition-colors"
        >Bakery</a
      >

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Support Center -->
      <div class="flex items-center gap-1.5 py-3 px-3 text-left">
        <i class="pi pi-headphones text-base text-green-600" style="font-size: 2rem"></i>
        <div class="ml-2">
          <p class="text-l text-gray-700 font-semibold">012 345 678</p>
          <p class="text-xs text-gray-500">24/7 Support</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import 'primeicons/primeicons.css'
</script>

<style scoped>
.group:hover .group-hover\:block {
  display: block;
}
</style>
