<script lang="ts" setup>
import { Swiper } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

const props = defineProps<{
  linkTitle?: string
  linkHref?: string
  slidesPerView?: number
}>()

const buttonLeft = ref<HTMLButtonElement | null>(null)
const buttonRight = ref<HTMLButtonElement | null>(null)
const paginationContainer = ref<HTMLDivElement | null>(null)

const modules = [Pagination, Navigation]

const breakPoints = computed(() => {
  if (props.slidesPerView) {
    return null
  }
  else {
    return {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    }
  }
})
</script>

<template>
  <section>
    <Swiper
      :space-between="20"
      :slides-per-view="slidesPerView ?? 3"
      :pagination="{
        type: 'progressbar',
        el: paginationContainer,
        progressbarFillClass: 'absolute top-0 left-0 w-full h-1px bg-white origin-left',
        enabled: true,
        lockClass: 'hidden',
      }"
      :breakpoints="breakPoints"
      :navigation="{
        nextEl: buttonRight,
        prevEl: buttonLeft,
        disabledClass: 'opacity-40',
      }"
      :modules="modules"
    >
      <slot />
    </Swiper>

    <div ref="paginationContainer" class="!relative mt-5 !h-1px !bg-dark" />

    <section class="md:flex  items-center mt-7" :class="{ 'justify-between': linkTitle, 'justify-center': !linkTitle }">
      <div class="flex gap-2 mt-10 md:mt-0 justify-center">
        <button ref="buttonLeft" class="h-12 w-12 btn-black-outline" title="slide left">
          <NuxtIcon name="arrow-left-smooth" />
        </button>

        <button ref="buttonRight" class="h-12 w-12 btn-black-outline" title="slide right">
          <NuxtIcon name="arrow-right-smooth" />
        </button>
      </div>

      <NuxtLink
        v-if="linkTitle"
        :to="linkHref"
        class="btn-red-outline mt-5 w-full h-12 md:(w-fit mt-0) flex cursor-pointer justify-center items-center gap-2"
      >
        {{ linkTitle }}

        <NuxtIcon name="arrow-right-smooth" class="mt-1" />
      </NuxtLink>
    </section>
  </section>
</template>
