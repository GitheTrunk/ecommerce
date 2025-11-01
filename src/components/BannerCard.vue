<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-6 md:gap-10"
    :class="color"
  >
    <div class="w-full md:w-1/2 space-y-4 text-center md:text-left">
      <h2 class="text-2xl font-semibold text-gray-800">{{ title }}</h2>
      <button
        class="px-10 py-2 text-white rounded-lg hover:bg-emerald-400 transition-colors duration-300"
        :class="buttonColor"
        @click="shopNow(promotion)"
      >
        Shop Now <i class="pi pi-arrow-right"></i>
      </button>
    </div>

    <img :src="image" :alt="title" class="w-full md:w-1/2 max-h-60 object-contain" />
  </div>
</template>

<script setup>
import 'primeicons/primeicons.css'
defineProps({
  title: { type: String, required: true },
  buttonColor: { type: String, default: 'bg-white' },
  image: { type: String, required: true },
  color: { type: String, default: 'bg-white' },
  url: { type: String, default: '' },
})
function shopNow(promotion) {
  alert("Let's shop Make your Breakfast Healthy and Easy " + promotion)
}
</script>
