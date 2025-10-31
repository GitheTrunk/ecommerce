<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-6 md:gap-10"
    :class="bgBannerColor"
  >
    <div class="w-full md:w-1/2 space-y-4 text-center md:text-left">
      <h2 class="text-2xl font-semibold text-gray-800">{{ description }}</h2>
      <button
        class="px-10 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-colors duration-300"
      >
        {{ buttonText }}
      </button>
    </div>

    <img :src="image" :alt="description" class="w-full md:w-1/2 max-h-60 object-contain" />
  </div>
</template>

<script setup>
defineProps({
  description: { type: String, required: true },
  buttonText: { type: String, default: 'Shop Now' },
  image: { type: String, required: true },
  bgBannerColor: { type: String, default: 'bg-white' },
})
</script>
