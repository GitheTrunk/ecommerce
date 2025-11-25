import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

export const api = {
  getGroups() {
    return axios.get(`${BASE_URL}/groups`)
  },
  getCategories() {
    return axios.get(`${BASE_URL}/categories`)
  },
  getPromotions() {
    return axios.get(`${BASE_URL}/promotions`)
  },
}
