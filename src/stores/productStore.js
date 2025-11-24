import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    products: [],
    promotions: [],
    categories: [],
  }),

  getters: {
    getGroups: (state) => state.groups,

    getPromotions: (state) => state.promotions,

    getCategoriesByGroup: (state) => {
      return (groupName) =>
        groupName === 'Group All'
          ? state.categories
          : state.categories.filter((c) => c.group === groupName)
    },

    getProductsByGroup: (state) => {
      return (groupName) =>
        groupName === 'Group All'
          ? state.products
          : state.products.filter((p) => p.group === groupName)
    },

    getProductById: (state) => {
      return (id) => state.products.find((p) => p.id === id)
    },

    getPopularProducts: (state) => state.products.filter((p) => p.countId > 10),
  },

  actions: {
    setCategories(categories) {
      this.categories = categories
    },
    setProducts(products) {
      this.products = products
    },
    setPromotions(promotions) {
      this.promotions = promotions
    },
    setGroups(groups) {
      this.groups = groups
    },
  },
})
