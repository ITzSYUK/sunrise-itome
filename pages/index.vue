<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import { CarEntity } from '~/entities/Car'
import { AutoCategories } from '~/widgets/AutoCategories'
import { ClientReviews } from '~/widgets/ClientReviews'
import { FreeConsultation } from '~/widgets/FreeConsultation'
import { NewsBlock } from '~/widgets/NewsBlock'
import { PrinciplesList } from '~/widgets/PrinciplesList'
import { StockBlock } from '~/widgets/StockBlock'
import { WorkSteps } from '~/widgets/WorkSteps'
import { YoutubeVideos } from '~/widgets/YoutubeVideos'
import { WelcomeBlock } from '~/widgets/WelcomeBlock'

const firstBlockCategories = [
  'Кей-кары',
  'Хэтчбеки',
  'Универсалы',
  'Минивены',
  'Седаны',
  'Кроссоверы и джипы',
]

const best_category = ref(firstBlockCategories[0])

const { data } = await useAuto(best_category, 'Лучшее', 'japan')
const { data: avaiable } = await useAvaiable()

useHead({
  title: 'SUNRISE — Лучшее авто из Японии, Кореи и Китая',
})
</script>

<template>
  <WelcomeBlock />
  <StockBlock class="mt-25" />

  <section class="mt39 container">
    <SectionHeader>
      <template #title>
        Лучшие предложения из Японии
      </template>

      <template #content>
        Торгуется на аукционах
      </template>
    </SectionHeader>

    <AutoCategories
      class="mt-15"
      :categories="firstBlockCategories"
      :active-cat="best_category"
      @select-tab="best_category = $event"
    />

    <ListWithPagination
      class="mt-7"
      link-title="Больше на аукционе"
    >
      <SwiperSlide v-for="car in data" :key="car.name">
        <CarEntity :car="car" />
      </SwiperSlide>
    </ListWithPagination>
  </section>

  <section class="mt39 container">
    <SectionHeader>
      <template #title>
        Авто в наличии во Владивостоке
      </template>

      <template #content>
        Оцените авто при личном осмотре, или мы сделаем для вас видеообзор. Все
        авто в отличном состоянии, <br>
        полный пакет документов. Поможем с выбором и доставим в любой город РФ.
      </template>
    </SectionHeader>

    <ListWithPagination
      class="mt-7"
      link-title="Больше вариантов"
      link-href="/catalog/available"
    >
      <SwiperSlide v-for="car in avaiable" :key="car.name">
        <CarEntity :is-detailed-link="true" :car="car" />
      </SwiperSlide>
    </ListWithPagination>
  </section>

  <FreeConsultation
    class="mt-50"
    title="Бесплатная консультация"
    description="Подберем для вас лучший вариант автомобиля, вышлем актуальную стоимость, расскажем о сроках доставки и схеме работы."
    image-src="free_consultation.webp"
  />

  <YoutubeVideos class="mt-50" />

  <PrinciplesList class="mt-50" />

  <WorkSteps class="mt-50" />

  <NewsBlock class="mt-50" />

  <ClientReviews class="mt-50" />
</template>
