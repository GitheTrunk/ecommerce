import { defineStore } from 'pinia'
import { api } from '@/services/api'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    groups: [],
    categories: [],
    promotions: [],
    products: [],
  }),

  getters: {
    getGroups: (state) => state.groups,
    getPromotions: (state) => state.promotions,
    getProductSales: (state) => state.products,
    getCategories: (state) => state.categories,
    getCategoriesByGroup: (state) => (groupName) => {
      if (groupName === 'Group All') return state.categories
      return state.categories.filter(
        (c) => c.group && c.group.toLowerCase().trim() === groupName.toLowerCase().trim(),
      )
    },
  },

  actions: {
    async loadAll() {
      const [g, c, p, s] = await Promise.all([
        api.getGroups(),
        api.getCategories(),
        api.getPromotions(),
        api.getProductSales(),
      ])

      this.groups = g.data
      this.categories = c.data
      this.promotions = p.data
      this.products = s.data
      this.products = s.data.map((product) => {
        let parsedImage = ''
        try {
          const arr = JSON.parse(product.image)
          parsedImage = arr[0] ?? ''
        } catch (e) {
          parsedImage = product.image ?? ''
        }

        return {
          ...product,
          image: `http://localhost:3000/${parsedImage}`,
        }
      })
    },
  },
})
