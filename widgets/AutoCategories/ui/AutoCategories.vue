<script lang="ts" setup>
const props = defineProps<{
  categories: string[]
  activeCat: string
}>()

const emit = defineEmits(['selectTab'])

function next() {
  props.categories.indexOf(props.activeCat) < props.categories.length - 1 && emit('selectTab', props.categories[props.categories.indexOf(props.activeCat) + 1])
}

function past() {
  props.categories.indexOf(props.activeCat) > 0 && emit('selectTab', props.categories[props.categories.indexOf(props.activeCat) - 1])
}
</script>

<template>
  <div>
    <ul class="hidden xl:flex mt-4">
      <li
        v-for="cat in categories"
        :key="cat"
        class="cursor-pointer b  b-dark p-4 w-full text-center transition flex justify-center items-center"
        :class="{ 'btn-red-filled': activeCat === cat }"
        @click="emit('selectTab', cat)"
      >
        {{ cat }}
      </li>
    </ul>

    <div class="flex justify-between xl:hidden mt-4">
      <button class="btn-black-outline" :class="{ 'opacity-50': props.categories.indexOf(props.activeCat) === 0 }" @click="past">
        <NuxtIcon name="arrow-left-smooth" />
      </button>
      <span
        class="b-y b-dark p-3 flex justify-center items-center text-sm md:text-base w-full"
      >{{ props.activeCat }}</span>

      <button class="btn-black-outline" :class="{ 'opacity-50': props.categories.indexOf(props.activeCat) + 1 === props.categories.length }" @click="next">
        <NuxtIcon name="arrow-right-smooth" />
      </button>
    </div>
  </div>
</template>
