<template>
  <div class="w-full mx-auto min-h-screen">
    <section class="w-full mx-auto md:p-8">
      <div v-if="loading" class="flex justify-center py-20">
        <p class="animate-pulse text-gray-500">Loading categories...</p>
      </div>

      <div v-else>
        <ShowCase />
        <MenuBar
          NameMenu="Featured Categories"
          :groups="storeGroups"
          @group-selected="currentGroupName = $event"
          class="mb-10"
        />

        <div class="flex overflow-x-auto space-x-4 pb-2 mb-10">
          <productCard
            v-for="category in categoryList"
            :key="category.id"
            :name="category.name"
            :image="category.image"
            :productCount="category.productCount"
            :color="category.color || category.color_hex"
            class="transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl"
          />
        </div>

        <div class="flex justify-center items-center w-full mb-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <productPromotion
              v-for="promotion in storePromotions"
              :key="promotion.id"
              :title="promotion.title"
              :image="promotion.image"
              :color="promotion.color || promotion.color_hex"
              :buttonColor="promotion.buttonColor || promotion.button_color_hex"
              :url="promotion.url"
            />
          </div>
        </div>

        <MenuBar
          NameMenu="Popular Product"
          :groups="storeGroups"
          @group-selected="currentGroupName = $event"
          class="mb-10"
        />

        <div class="flex overflow-x-auto space-x-4 pb-2">
          <productSale
            v-for="product in storeProductSale"
            :key="product.id"
            :productImage="product.image"
            :productRating="product.rating"
            :brand="product.brand"
            :description="product.name"
            :weight="product.size"
            :discountPrice="product.promotionAsPercentage"
            :originalPrice="product.price"
            :bgpromotion="product.bgpromotion"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import productCard from '@/components/productCard.vue'
import productPromotion from '@/components/productPromotion.vue'
import productSale from '@/components/productSale.vue'
import ShowCase from '@/components/ShowCase.vue'
import { useProductStore } from '@/stores/productStore'
import { mapState } from 'pinia'

export default {
  name: 'HomeView',

  components: { MenuBar, productCard, productPromotion, productSale, ShowCase },

  data() {
    return {
      currentGroupName: 'Group All',
      loading: true,
    }
  },

  computed: {
    ...mapState(useProductStore, {
      storeGroups: 'getGroups',
      storePromotions: 'getPromotions',
      storeProductSale: 'getProductSales',
      categoryList(store) {
        return store.categories
      },
    }),
  },

  async created() {
    const store = useProductStore()
    await store.loadAll()
    console.log('Categories loaded:', store.categories)
    console.log('Promotions loaded:', store.promotions)
    console.log('Product Sales loaded:', store.products)
    this.loading = false
  },
}
</script>
