<template>
  <section
    class="relative w-full bg-green-400 mb-10 rounded-2xl flex flex-col md:flex-row items-center justify-between md:p-16 overflow-hidden"
  >
    <div class="max-w-xl space-y-4 relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        {{ currentCategory?.name || 'Loading...' }}
      </h1>

      <p class="text-gray-500 text-lg">
        <span class="cursor-pointer hover:underline" @click="$router.push('/')"> Home </span>

        <span class="mx-2">></span>

        <span class="cursor-pointer hover:underline" @click="$router.push('/category')">
          Category
        </span>

        <span class="mx-2">></span>

        <span class="font-medium text-gray-600">
          {{ currentCategory?.name || 'Loading...' }}
        </span>
      </p>
    </div>

    <img
      src="@/assets/imgs/backgroundLayer.png"
      class="absolute inset-0 w-full h-full object-cover opacity-20"
    />
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/productStore'

const route = useRoute()
const categoryId = route.params.categoryId

const productStore = useProductStore()
const { categories } = storeToRefs(productStore)

onMounted(() => {
  if (!categories.value || categories.value.length === 0) {
    productStore.loadAll() // loads categories + others
  }
})

const currentCategory = computed(() => {
  if (!categories.value || categories.value.length === 0) return null

  return categories.value.find((cat) => String(cat.id) === String(categoryId)) || null
})
</script>
