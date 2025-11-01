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
  { name: 'Fast Food', image: fastFoodImg, productCount: '10 items', color: 'bg-green-100' },
  { name: 'Apple', image: appleImg, productCount: '13 items', color: 'bg-yellow-100' },
  { name: 'Cake', image: cakeImg, productCount: '5 items', color: 'bg-green-100' },
  { name: 'Headphone', image: headphoneImg, productCount: '21 items', color: 'bg-yellow-100' },
  { name: 'Kiwi', image: kiwiImg, productCount: '9 items', color: 'bg-green-100' },
  { name: 'Orange', image: orangeImg, productCount: '3 items', color: 'bg-yellow-100' },
]

const banners = [
  {
    title: 'Everyday Fresh & Clean with Our Products',
    image: vegetablesImg,
    buttonColor: 'bg-emerald-500',
    color: 'bg-yellow-100',
    url: '',
  },
  {
    title: 'Make your Breakfast Healthy and Easy',
    image: juiceImg,
    buttonColor: 'bg-emerald-500',
    color: 'bg-green-100',
    url: '',
  },
  {
    title: 'The best Organic Products Online',
    image: onionImg,
    buttonColor: 'bg-emerald-500',
    color: 'bg-blue-100',
    url: '',
  },
]
</script>

<template>
  <main class="container mx-auto px-4 py-8 space-y-8">
    <!-- Categories -->
    <section class="w-full mx-auto p-6">
      <h2 class="text-3xl font-semibold text-gray-900 mb-8">Categories</h2>
      <div class="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
        <CategoryCard
          v-for="(cat, index) in categories"
          :key="index"
          :name="cat.name"
          :image="cat.image"
          :productCount="cat.productCount"
          :color="cat.color"
        />
      </div>
    </section>

    <!-- Featured Banner -->
    <section class="w-full mx-auto p-6">
      <h2 class="text-3xl font-semibold text-gray-900 mb-8">Featured</h2>
      <div class="flex space-x-4 overflow-auto scrollbar-hide py-2">
        <BannerCard
          v-for="(banner, index) in banners"
          :key="index"
          :title="banner.title"
          :buttonColor="banner.buttonColor"
          :image="banner.image"
          :color="banner.color"
          :url="banner.url"
        />
      </div>
    </section>
  </main>
</template>
