<template>
  <section
    class="relative w-full bg-[#FEF5E4] mb-10 rounded-2xl flex flex-col md:flex-row items-center justify-between md:p-16"
  >
    <div class="max-w-xl space-y-4">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        Don’t miss amazing<br />grocery deals
      </h1>

      <p class="text-gray-600 text-lg">Sign up for the daily newsletter</p>

      <div class="flex p-0 items-center bg-white rounded-full p-2 w-full md:w-[380px] shadow">
        <i class="pi pi-send ml-2" style="color: green"></i>
        <input
          type="email"
          placeholder="Your email address"
          class="flex-1 px-4 py-2 rounded-full focus:outline-none text-gray-700"
        />
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-full transition"
        >
          Subscribe
        </button>
      </div>
    </div>

    <div class="mt-0 md:mt-0">
      <img
        src="@/assets/imgs/apple_bag.png"
        alt="Grocery bag with apples"
        class="absolute top-0 right-0 w-140 object-contain"
      />
    </div>
    <img
      src="@/assets/imgs/backgroundLayerBig.png"
      class="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
    />
  </section>
</template>

<script>
import 'primeicons/primeicons.css'
export default {
  name: 'ShowCase',
}
</script>
