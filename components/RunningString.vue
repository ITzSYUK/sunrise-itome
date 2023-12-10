<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

defineProps<{
  strings: string[]
}>()

// Важное примечание
// Бесконечный слайдер будет работать только в том случае, если элементов массива в 2 раза больше, чем slides-per-view.
// Т.е. минимум 6 элементов для slides-per-view = 3
// https://github.com/nolimits4web/swiper/issues/6471

const modules = [Autoplay]
</script>

<template>
  <section class="border-y py-68px border-dark">
    <div class="container">
      <Swiper
        :modules="modules"
        wrapper-class="!ease-linear"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :speed="4000"
        :loop="true"
        :breakpoints="{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
        :navigation="false"
      >
        <SwiperSlide v-for="string in strings" :key="string" class="text-style text-center">
          {{ string }}
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.text-style {
  font-feature-settings: "clig" off, "liga" off;
  font-family: RF Dewi;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 64px; /* 100% */
  -webkit-text-stroke: 1px rgb(255, 255, 255);
  -webkit-text-fill-color: transparent;
}

.swiper-wrapper {
  transition-timing-function: linear;
}
</style>
