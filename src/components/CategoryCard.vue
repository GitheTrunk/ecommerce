<template>
  <div
    class="category-card shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
    :class="bgColor"
  >
    <img :src="image" :alt="name" class="w-full aspect-square object-contain p-4" />
    <div class="flex flex-col items-center justify-center p-2 text-center">
      <h3 class="text-lg font-semibold text-gray-800">{{ name }}</h3>
      <p class="text-gray-500 text-sm">{{ unit }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true },
  unit: { type: String, default: '' },
  bgColor: { type: String, default: 'bg-white' },
})
</script>
