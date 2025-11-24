<template>
  <div class="w-full h-14 shadow-sm flex items-center justify-between px-4">
    <!-- Title -->
    <div class="text-gray-800 text-lg font-semibold">
      {{ NameMenu }}
    </div>

    <!-- Groups List -->
    <ul class="flex space-x-6">
      <li
        v-for="group in groups"
        :key="group"
        @click="handleGroupClick(group)"
        :class="[
          'cursor-pointer pb-1 transition-all duration-200',
          activeGroup === group
            ? 'font-bold border-b-2 border-green-600 text-green-600'
            : 'text-gray-600 hover:text-gray-900',
        ]"
      >
        {{ group }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MenuBar',

  props: {
    NameMenu: {
      type: String,
      required: true,
    },
    groups: {
      type: Array,
      required: true,
    },
  },

  emits: ['group-selected'],

  setup(props, { emit }) {
    const activeGroup = ref('Group All')

    // When API loads groups later, pick first group
    watch(
      () => props.groups,
      (newVal) => {
        if (newVal && newVal.length > 0 && activeGroup.value === 'Group All') {
          activeGroup.value = newVal[0]
          emit('group-selected', activeGroup.value)
        }
      },
      { immediate: true },
    )

    const handleGroupClick = (group) => {
      activeGroup.value = group
      emit('group-selected', group)
    }

    return {
      activeGroup,
      handleGroupClick,
    }
  },
})
</script>

<style scoped>
li {
  list-style: none;
}
</style>
