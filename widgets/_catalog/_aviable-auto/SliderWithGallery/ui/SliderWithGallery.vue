<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Navigation, Pagination, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps<{
  images: string[]
}>()

const thumbsSwiper = ref<any>(null)
const currentIndex = ref(0)

const buttonLeft = ref<HTMLButtonElement | null>(null)
const buttonRight = ref<HTMLButtonElement | null>(null)

function changeThumb(swiper: any) {
  thumbsSwiper?.value.slideTo(swiper.activeIndex)
  currentIndex.value = swiper.activeIndex
}

function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper
}

const modules = [Pagination, Navigation, Thumbs]
</script>

<template>
  <div class="md:w-1/3">
    <div class="relative">
      <Swiper
        :pagination="{
          type: 'fraction',
          horizontalClass: 'fraction',
        }"
        :thumbs="{ swiper: thumbsSwiper?.value }"
        :navigation="{
          nextEl: buttonRight,
          prevEl: buttonLeft,
          disabledClass: 'opacity-40',
        }"
        :modules="modules"
        @slide-change="changeThumb"
      >
        <SwiperSlide v-for="img in images" :key="img">
          <img :src="img" alt="Изображение автомобиля" class="w-full object-cover h-600px">
        </SwiperSlide>
      </Swiper>

      <div class="absolute top-1/2 z-10 w-full justify-between flex px-28px">
        <button ref="buttonLeft" class="h-14 w-14 btn-black-outline bg-black" title="slide left">
          <NuxtIcon name="arrow-left-smooth" />
        </button>

        <button ref="buttonRight" class="h-14 w-14 btn-black-outline bg-black" title="slide right">
          <NuxtIcon name="arrow-right-smooth" />
        </button>
      </div>
    </div>

    <div v-if="images.length > 1" class="hidden md:block">
      <Swiper
        :slides-per-view="4"
        :free-mode="true"
        :space-between="0"
        :watch-slides-progress="true"
        :modules="modules"
        class="mySwiper mt-5"
        @swiper="setThumbsSwiper"
      >
        <SwiperSlide v-for="(img, key) in images" :key="img">
          <img :src="img" alt="Изображение автомобиля" class="w-full h-50 !m-0 opacity-40" :class="{ '!opacity-100': currentIndex === key }">
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
.fraction {
  background-color:rgba(0, 0, 0, 0.5);
  width: fit-content;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  position: absolute;
  right: 0;
  left: auto;
  bottom: 0;
}
</style>
