<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue'
import BannerCard from '@/components/BannerCard.vue'
import fastFoodImg from '@/assets/imgs/fast-food.png'
import appleImg from '@/assets/imgs/apple.png'
import cakeImg from '@/assets/imgs/cake.png'
import headphoneImg from '@/assets/imgs/headphone.png'
import kiwiImg from '@/assets/imgs/kiwi.png'
import orangeImg from '@/assets/imgs/orange.png'
import vegetablesImg from '@/assets/imgs/vegetables.png'
import juiceImg from '@/assets/imgs/juice.png'
import onionImg from '@/assets/imgs/onion_garlic.png'

const categories = [
  { name: 'Fast Food', image: fastFoodImg, unit: '10 items', bgColor: 'bg-green-100' },
  { name: 'Apple', image: appleImg, unit: '13 items', bgColor: 'bg-yellow-100' },
  { name: 'Cake', image: cakeImg, unit: '5 items', bgColor: 'bg-green-100' },
  { name: 'Headphone', image: headphoneImg, unit: '21 items', bgColor: 'bg-yellow-100' },
  { name: 'Kiwi', image: kiwiImg, unit: '9 items', bgColor: 'bg-green-100' },
  { name: 'Orange', image: orangeImg, unit: '3 items', bgColor: 'bg-yellow-100' },
]

const banners = [
  {
    description: 'Everyday Fresh & Clean with Our Products',
    image: vegetablesImg,
    bgBannerColor: 'bg-yellow-100',
  },
  {
    description: 'Make your Breakfast Healthy and Easy',
    image: juiceImg,
    bgBannerColor: 'bg-green-100',
  },
  {
    description: 'The best Organic Products Online',
    image: onionImg,
    bgBannerColor: 'bg-blue-100',
  },
]
</script>

<template>
  <main class="container mx-auto px-4 py-8 space-y-8">
    <!-- Categories -->
    <section>
      <h2 class="text-3xl font-semibold text-gray-900 mb-8">Categories</h2>
      <div class="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
        <CategoryCard
          v-for="(cat, index) in categories"
          :key="index"
          :name="cat.name"
          :image="cat.image"
          :unit="cat.unit"
          :bgColor="cat.bgColor"
        />
      </div>
    </section>

    <!-- Featured Banner -->
    <section>
      <h2 class="text-3xl font-semibold text-gray-900 mb-8">Featured</h2>
      <div class="flex space-x-4 overflow-auto scrollbar-hide py-2">
        <BannerCard
          v-for="(banner, index) in banners"
          :key="index"
          :description="banner.description"
          :image="banner.image"
          :bgBannerColor="banner.bgBannerColor"
        />
      </div>
    </section>
  </main>
</template>
