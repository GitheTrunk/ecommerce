<template>
  <div
    class="w-40 h-56 shadow-lg rounded-xl overflow-hidden transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-pointer"
    :style="{ color, backgroundColor: color || '#FFFFFF' }"
    @click="goToCategory"
  >
    <img
      :src="getFullImageUrl(imageSource)"
      :alt="name"
      class="w-full aspect-square object-contain p-6 transition-transform duration-300"
      @error="handleImageError"
    />
    <div class="flex flex-col items-center justify-center text-center">
      <h3 class="text-xl font-semibold text-gray-800">{{ name }}</h3>
      <p class="text-gray-400 font-medium text-sm pt-1">{{ productCount }} items</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
const FALLBACK_IMAGE = '@/assets/imgs/default.png'

export default {
  name: 'ProductCard',
  props: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    productCount: { type: [String, Number], required: true },
    color: { type: String, default: 'bg-white' },
    categoryId: { type: [String, Number], required: true },
  },
  setup(props) {
    const router = useRouter()

    const goToCategory = () => {
      router.push({
        name: 'category',
        params: { categoryId: props.categoryId },
      })
    }
    return {
      goToCategory,
    }
  },
  data() {
    return {
      imageSource: this.image,
    }
  },
  watch: {
    image(newImage) {
      this.imageSource = newImage
    },
  },
  methods: {
    getFullImageUrl(imgPath) {
      if (!imgPath || imgPath === FALLBACK_IMAGE) return imgPath
      return imgPath.startsWith('http') ? imgPath : `http://localhost:3000/${imgPath}`
    },
    handleImageError() {
      this.imageSource = FALLBACK_IMAGE
    },
  },
}
</script>
