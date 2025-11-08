<template>
  <div class="min-h-screen bg-gray-50">
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <p class="text-gray-500 text-lg animate-pulse">Loading data...</p>
    </div>

    <!-- Main app content -->
    <router-view v-else :categories="categories" :promotions="promotions" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      categories: [],
      promotions: [],
      loading: true,
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const res = await axios.get('http://localhost:3000/api/categories')
        this.categories = res.data
        console.log('Categories loaded:', this.categories)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
    async fetchPromotions() {
      try {
        const res = await axios.get('http://localhost:3000/api/promotions')
        this.promotions = res.data
        console.log('Promotions loaded:', this.promotions)
      } catch (error) {
        console.error('Error fetching promotions:', error)
      }
    },
    async initializeData() {
      this.loading = true
      await Promise.all([this.fetchCategories(), this.fetchPromotions()])
      this.loading = false
    },
  },
  async mounted() {
    await this.initializeData()
  },
}
</script>
