<script lang="ts" setup>
import { Swiper } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

const buttonLeft = ref<HTMLButtonElement | null>(null)
const buttonRight = ref<HTMLButtonElement | null>(null)
const paginationContainer = ref<HTMLDivElement | null>(null)

const modules = [Pagination, Navigation]
</script>

<template>
  <section class="relative">
    <Swiper
      :navigation="{
        nextEl: buttonRight,
        prevEl: buttonLeft,
        disabledClass: 'opacity-40',
      }"
      :pagination="{
        type: 'progressbar',
        el: paginationContainer,
        progressbarFillClass: 'absolute top-0 left-0 w-full h-1px bg-white origin-left',
        enabled: true,
      }"
      :modules="modules"
      :slides-per-view="1"
    >
      <slot />
    </Swiper>

    <div ref="paginationContainer" class="h-1px w-full mt-7 bg-dark relative" />

    <section
      class="flex justify-between items-center z-10 absolute bottom-5 right-5"
    >
      <div class="flex gap-2 mt-4">
        <button
          ref="buttonLeft"
          class="p-3 btn-black-outline bg-black text-white transition"
          title="slide left"
        >
          <NuxtIcon name="arrow-left-smooth" />
        </button>

        <button
          ref="buttonRight"
          class="p-3 btn-black-outline bg-black text-white transition"
          title="slide right"
        >
          <NuxtIcon name="arrow-right-smooth" />
        </button>
      </div>
    </section>
  </section>
</template>
