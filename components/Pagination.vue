<script lang='ts' setup>
const props = defineProps<{
  pages: number
  currentPage: number
}>()

const emit = defineEmits(['next', 'past'])

const isNextAvaiable = computed(() => {
  return props.currentPage < props.pages
})

const isPastAvaiable = computed(() => {
  return props.currentPage > 1
})
</script>

<template>
  <div class="flex justify-center gap-2 mt-15">
    <button class="btn-black-outline px-4 opacity-50" :class="{ 'opacity-100': isPastAvaiable }" :disabled="!isPastAvaiable" @click="emit('past')">
      <NuxtIcon name="arrow-left-smooth" />
    </button>

    <button v-for="i in props.pages" :key="i" class="btn-black-outline">
      {{ i }}
    </button>

    <button class="btn-black-outline px-4" :class="{ 'opacity-100': isNextAvaiable }" :disabled="!isNextAvaiable" @click="emit('next')">
      <NuxtIcon name="arrow-right-smooth" />
    </button>
  </div>
</template>
