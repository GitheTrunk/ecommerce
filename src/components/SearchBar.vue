<template>
  <form
    @submit.prevent="handleSearch"
    class="flex w-full max-3xl rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-green-500"
  >
    <div class="relative">
      <select
        v-model="selectedCategory"
        class="h-12 pl-4 pr-10 bg-gray-50 text-gray-700 text-sm focus:outline-none border-none appearance-none rounded-l-full"
      >
        <option v-for="cat in categories" :key="cat.id" :value="cat.id">
          {{ cat.name }}
        </option>
      </select>
      <i
        class="pi pi-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs"
      ></i>
    </div>

    <!-- Input -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for items"
      class="flex-1 h-12 px-4 text-sm text-gray-400 focus:outline-none"
    />

    <!-- Button -->
    <button
      type="submit"
      class="flex items-center gap-2 px-6 bg-green-500 text-white font-medium text-sm hover:bg-green-600 active:bg-green-700 transition-colors"
    >
      <i class="pi pi-search text-sm"></i>
      Search
    </button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '@/services/api'
import 'primeicons/primeicons.css'

const emit = defineEmits(['search'])

const searchQuery = ref('')
const selectedCategory = ref('all')
const categories = ref([])

onMounted(async () => {
  try {
    const res = await api.getCategories()
    categories.value = [{ id: 'all', name: 'All Categories' }, ...res.data]
  } catch (err) {
    console.error('Failed to load categories', err)
  }
})

const handleSearch = () => {
  emit('search', {
    keyword: searchQuery.value,
    category: selectedCategory.value,
  })
}
</script>
