import { defineStore } from 'pinia'
import { api } from '@/services/api'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    groups: [],
    categories: [],
    promotions: [],
  }),

  getters: {
    getGroups: (state) => state.groups,
    getPromotions: (state) => state.promotions,
    getCategoriesByGroup: (state) => (groupName) => {
      if (groupName === 'Group All') return state.categories
      return state.categories.filter(
        (c) => c.group && c.group.toLowerCase().trim() === groupName.toLowerCase().trim(),
      )
    },
  },

  actions: {
    async loadAll() {
      const [g, c, p] = await Promise.all([
        api.getGroups(),
        api.getCategories(),
        api.getPromotions(),
      ])

      this.groups = g.data
      this.categories = c.data
      this.promotions = p.data
    },
  },
})
