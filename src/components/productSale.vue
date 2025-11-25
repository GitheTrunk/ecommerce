<template>
  <div
    class="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden w-60"
  >
    <!-- Promotion Badge & Image -->
    <div
      class="relative h-48 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white"
    >
      <div
        v-if="promotionNumber"
        class="absolute top-4 left-4 text-white text-sm font-bold px-4 py-1.5 rounded-full"
        :style="{ backgroundColor: bgpromotion || '#FF6F61' }"
      >
        {{ promotionNumber }}
      </div>

      <!-- Image Container -->
      <div class="w-40 h-40 flex items-center justify-center">
        <img
          v-if="!imageError"
          :src="currentImage"
          alt="product"
          class="w-40 h-40 object-contain transition-opacity duration-300"
          @load="imageLoaded = true"
          @error="imageError = true"
          :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }"
        />
        <div
          v-if="!imageLoaded && !imageError"
          class="animate-spin border-4 border-gray-200 border-t-gray-400 rounded-full w-10 h-10"
        ></div>
        <img
          v-if="imageError"
          src="@/assets/imgs/default.png"
          alt="placeholder"
          class="w-40 h-40 object-contain"
        />
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-4 space-y-3">
      <p class="text-xs text-gray-500 font-medium">{{ brand || 'Hodo Foods' }}</p>
      <p class="text-sm font-semibold text-gray-900 line-clamp-2">{{ description }}</p>

      <!-- Star Rating -->
      <div class="flex items-center gap-2">
        <div class="flex gap-0.5">
          <template v-for="n in stars.full" :key="'full-' + n">
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.951-.69l1.286-3.974z"
              />
            </svg>
          </template>

          <svg
            v-if="stars.half"
            class="w-4 h-4 text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <defs>
              <linearGradient id="halfGrad">
                <stop offset="50%" stop-color="currentColor" />
                <stop offset="50%" stop-color="#ddd" />
              </linearGradient>
            </defs>
            <path
              fill="url(#halfGrad)"
              d="M12 2l2.39 7.26h7.63l-6.18 4.49 2.39 7.26L12 16.52l-6.23 4.49 2.39-7.26-6.18-4.49h7.63z"
            />
          </svg>

          <template v-for="n in stars.empty" :key="'empty-' + n">
            <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.951-.69l1.286-3.974z"
              />
            </svg>
          </template>
        </div>
        <span class="text-sm text-gray-700 font-medium">({{ rating }})</span>
      </div>

      <p class="text-xs text-gray-500">{{ weight }}</p>

      <div class="w-full flex items-center justify-between">
        <div class="flex items-baseline gap-2">
          <span class="text-xl font-bold text-green-600">${{ price }}</span>
          <span class="text-sm text-gray-400 line-through">${{ originalPrice }}</span>
        </div>

        <div class="pt-2">
          <button
            v-if="!isQtyVisible"
            @click="addFirstTimes"
            class="bg-green-100 text-green-600 px-4 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition"
          >
            Add +
          </button>
          <div v-else class="flex items-center justify-evenly gap-2">
            <button
              @click="decreaseQty"
              class="flex-1 border border-gray-300 text-gray-700 py-1.5 rounded-lg hover:bg-gray-50 transition"
            >
              −
            </button>
            <span class="flex-1 text-center font-semibold text-gray-900">{{ qty }}</span>
            <button
              @click="increaseQty"
              class="flex-1 border border-gray-300 text-gray-700 py-1.5 rounded-lg hover:bg-gray-50 transition"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductSale',
  props: {
    productImage: String,
    promotionNumber: [String, Number],
    brand: String,
    description: String,
    weight: [String, Number],
    price: [String, Number],
    originalPrice: [String, Number],
    bgpromotion: String,
  },
  data() {
    return {
      isQtyVisible: false,
      qty: 1,
      imageLoaded: false,
      imageError: false,
      currentImage: this.productImage || '',
    }
  },
  watch: {
    productImage(newVal) {
      this.currentImage = newVal
      this.imageLoaded = false
      this.imageError = false
    },
  },
  computed: {
    rating(): number {
      return 4
    },
    stars() {
      const full = Math.floor(this.rating)
      const half = this.rating % 1 >= 0.5 ? 1 : 0
      const empty = 5 - full - half
      return { full: Array(full).fill(0), half, empty: Array(empty).fill(0) }
    },
  },
  methods: {
    addFirstTimes() {
      this.isQtyVisible = true
      this.handleQtyChange()
    },
    increaseQty() {
      this.qty++
      this.handleQtyChange()
    },
    decreaseQty() {
      if (this.qty > 1) {
        this.qty--
        this.handleQtyChange()
      }
    },
    handleQtyChange() {
      this.$emit('qty-changed', this.qty)
    },
  },
}
</script>
