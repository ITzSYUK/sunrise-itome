<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import AutoCard from './AutoCard.vue'
</script>

<template>
  <section class="container">
    <section class="mt39 container">
      <SectionHeader>
        <template #title>
          Сравните рыночную стоимость авто и цену аварийного
        </template>

        <template #content>
          Аварийное авто будет стоить намного дешевле целого
        </template>
      </SectionHeader>

      <ListWithPagination
        class="mt-7"
        :slides-per-view="1"
      >
        <SwiperSlide v-for="car in 5" :key="car">
          <div class="md:flex gap-2 my-2">
            <AutoCard class="my-2 md:my-0" />
            <AutoCard />
          </div>
        </SwiperSlide>
      </ListWithPagination>
    </section>
  </section>
</template>
