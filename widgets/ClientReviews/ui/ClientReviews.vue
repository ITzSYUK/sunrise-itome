<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import { ReviewEntity } from '~/entities/Review'
</script>

<template>
  <section class="container">
    <ListWithPagination :slides-per-view="1">
      <SwiperSlide v-for="review in 5" :key="review">
        <ReviewEntity />
      </SwiperSlide>
    </ListWithPagination>
  </section>
</template>
