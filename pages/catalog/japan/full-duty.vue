<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import { CarEntity } from '~/entities/Car'
import { AutoCategories } from '~/widgets/AutoCategories'
import { ClientReviews } from '~/widgets/ClientReviews'
import { FreeConsultation } from '~/widgets/FreeConsultation'
import { PrinciplesList } from '~/widgets/PrinciplesList'
import { YoutubeVideos } from '~/widgets/YoutubeVideos'
import { Advantages } from '~/widgets/_catalog/Advantages'
import { CatalogFooter, CatalogHeader } from '~/widgets/_catalog/CatalogHeader'
import { DeliveryInfo } from '~/widgets/_catalog/DeliveryInfo'
import { DownLoadPDF } from '~/widgets/_catalog/DownloadPDF'

useHead({
  title: 'Автомобили под полную пошлину',
})

const best_categories = [
  'Кей-кары',
  'Хэтчбеки',
  'Универсалы',
  'Минивены',
  'Седаны',
  'Кроссоверы и джипы',
]

const best_category = ref(best_categories[0])

const { data } = await useAuto(best_category, 'Лучшее', 'japan')

const top_categories = [
  'ТОП до 1 млн',
  'Кей-кары',
  'Хэтчбеки',
  'Универсалы',
  'Минивены',
  'Седаны',
  'Кроссоверы и джипы',
]

const top_category = ref(top_categories[0])

const { data: top } = await useAuto(top_category, 'ТОП', 'japan')

const advantages = [
  {
    title: 'Чистая предыстория',
    description: `Вы покупаете авто с оригинальными документами и нескрученным пробегом. Состояние автомобиля лично оценивает наш специалист на этапе просмотра и предоставляет детальный видеоотчёт.`,
  },
  {
    title: 'Доступная цена и качество',
    description: `Цены на автомобили из Кореи значительно ниже, чем на те же, собранные в РФ.
А качество — выше. Детали для корейских авто производят либо в Южной Корее, либо в Германии.`,
  },
  {
    title: 'Большой выбор',
    description: `Широкий модельный ряд под любой запрос
и бюджет. Из Кореи можно привезти не только корейские авто, но и автомобили европейских марок.`,
  },
  {
    title: 'Широкие опции',
    description: `Комплектации у корейских авто намного богаче, чем у аналогов из России. Даже
в базовых комплектациях будет салон из
эко-кожи, подогревы руля, сидений и т.д.`,
  },
]
</script>

<template>
  <CatalogHeader
    image-src="/images/camry.webp"
    form-title="Нужен авто в отличном состоянии из Японии?"
  >
    <template #title>
      Автомобили <br> с аукционов Японии
    </template>

    <template #description>
      Поможем с выбором, купим, привезём, доставим в любой город РФ.
    </template>

    <template #button-group>
      <div class="md:flex gap-2 py-10 px-4 md:px-0 font-bold">
        <button class="btn-red-filled px-15 w-full my2 md:w-80" title="Рассчитать стоимость" @click="requestModal(RequestStatus.price)">
          Рассчитать стоимость
        </button>
        <button class="btn-red-outline px-15 w-full my2 md:w-80">
          Перейти на аукцион
        </button>
      </div>
    </template>

    <template #footer>
      <CatalogFooter />
    </template>
  </CatalogHeader>

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
      :categories="best_categories"
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

  <RunningString class="mt-150px" :strings="['TOYOTA', 'MITSUBISHI', 'HONDA', 'MAZDA', 'LEXUS', 'HONDA']" />

  <section class="mt39 container">
    <SectionHeader>
      <template #title>
        Подборка ТОП-авто
      </template>

      <template #content>
        Торгуется на аукционах
      </template>
    </SectionHeader>

    <AutoCategories
      class="mt-15"
      :categories="top_categories"
      :active-cat="top_category"
      @select-tab="top_category = $event"
    />

    <ListWithPagination
      class="mt-7"
      link-title="Больше на аукционе"
    >
      <SwiperSlide v-for="car in top" :key="car.name">
        <CarEntity :car="car" />
      </SwiperSlide>
    </ListWithPagination>
  </section>

  <FreeConsultation
    class="mt-50"
    title="Сколько стоит авто из Японии?"
    description="Укажите пожелания по авто и ваши контактные данные. Мы рассчитаем
актуальную стоимость автомобиля и свяжемся с вами."
    image-src="free_consultation.webp"
  />

  <Advantages
    title="Преимущества покупки авто из Кореи"
    :advantages="advantages"
    class="mt-50"
  />

  <PrinciplesList class="mt-50" :is-button-visible="true" />

  <DeliveryInfo
    class="mt-50"
    title="до 15 дней"
    description="Среднее время покупки и доставки авто из Японии"
    additional="(6-10 дней срок растаможки)"
  />

  <DownLoadPDF class="mt-50" />

  <YoutubeVideos class="mt-50" />

  <ClientReviews class="mt-50" />
</template>
