<template>
  <div class="w-full mx-auto min-h-screen">
    <section class="w-full mx-auto md:p-8">
      <MenuBar
        NameMenu="Featured Categories"
        :groups="storeGroups"
        @group-selected="currentGroupName = $event"
        class="mb-10"
      />
      <div class="flex overflow-x-auto space-x-4 pb-2 mb-10">
        <productCard
          v-for="category in categories"
          :key="category.id"
          :name="category.name"
          :image="category.image"
          :productCount="category.productCount"
          :color="category.color || category.color_hex"
          class="transform transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl"
        />
      </div>

      <div class="flex justify-center items-center w-full">
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
    </section>

    <section class="w-full mx-auto md:p-8">
      <MenuBar
        NameMenu="Popular Products"
        :groups="storeGroups"
        @group-selected="currentGroupName = $event"
        class="mb-12"
      />
    </section>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
import { mapState } from 'pinia'
import { useProductStore } from '@/stores/productStore'
import productCard from '@/components/productCard.vue'
import productPromotion from '@/components/productPromotion.vue'
export default {
  name: 'HomeView',
  components: { MenuBar, productCard, productPromotion },
  data() {
    return { currentGroupName: 'Group All' }
  },
  computed: {
    ...mapState(useProductStore, {
      storeGroups: 'getGroups',
      storePromotions: 'getPromotions',
      categoryList(store) {
        return store.getCategoriesByGroup(this.currentGroupName)
      },
    }),
  },
  props: {
    groups: Array,
    categories: Array,
    promotions: Array,
  },
  created() {
    const store = useProductStore()
    store.setGroups(this.groups)
    store.setCategories(this.categories)
    store.setPromotions(this.promotions)

    console.log('HomeView loaded props:', {
      groups: this.groups,
      categories: this.categories,
      promotions: this.promotions,
    })
  },
}
</script>
