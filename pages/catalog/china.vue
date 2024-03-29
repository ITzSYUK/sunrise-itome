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

const best_categories = [
  'Кроссоверы',
  'Компактные кроссоверы',
  'Джипы',
  'Минивены',
  'Седаны',
  'Электрокары',
]

const best_category = ref(best_categories[0])

const { data } = await useAuto(best_category, 'Лучшее', 'china')

const top_categories = [
  'Кроссоверы',
  'Компактные кроссоверы',
  'Джипы',
  'Минивены',
  'Седаны',
  'Электрокары',
]

const top_category = ref(top_categories[0])

const { data: top } = await useAuto(top_category, 'ТОП', 'china')

useHead({
  title: 'Автомобили из Китая',
})

const advantages = [
  {
    title: 'Чистая предыстория',
    description: `Вы покупаете авто с оригинальными документами и нескрученным пробегом. Состояние автомобиля лично оценивает наш специалист на этапе просмотра и предоставляет детальный видеоотчёт.`,
  },
  {
    title: 'Улучшенное качество',
    description: `За последние несколько лет китайские автопроизводители заметно повысили качество сборки. Приведём статистику по авто, купленным в период с 2021 по 2022 год. По данным рейтинга J. D. Power, на основе опроса около 40 тысяч владельцев китайских авто, среди всех китайских брендов самым качественным оказался Changan. Он отстал от Toyota всего на один балл. Следом — Chery и GAC. Китайским маркам удалось опередить европейские, японские и американские бренды.`,
  },
  {
    title: 'Огромный выбор электрокаров',
    description: `В Китае самый большой выбор электромобилей в мире. Есть возможность заказать авто из разных ценовых сегментов: от бюджетных до класса люкс.`,
  },
  {
    title: 'Доступная цена',
    description: `Ведущие автопроизводители из КНР успешно конкурируют с лидерами мирового рынка, выпуская достойные авто по приемлемым ценам. Стоимость проходимых свежих кроссоверов в Китае начинается от 1 млн. руб. Точно такой же класс, но в Японии — от 2 млн. руб.`,
  },
]
</script>

<template>
  <CatalogHeader
    image-src="/images/china.webp"
    form-title="Нужен авто в отличном состоянии из Китая?"
  >
    <template #title>
      Автомобили из Китая
    </template>

    <template #description>
      Дешевле в два раза, чем у дилеров в России. Проведём личный <br>
      осмотр авто на месте, предоставим видеоотчёт на этапе проверки. <br>
      Купим, привезём, доставим в любой город РФ.
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
        Лучшие предложения из Китая
      </template>

      <template #content>
        Торгуется на маркетплейсах
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
      link-title="Больше на маркетплейсе"
    >
      <SwiperSlide v-for="car in data" :key="car.name">
        <CarEntity :car="car" />
      </SwiperSlide>
    </ListWithPagination>
  </section>

  <RunningString class="mt-150px" :strings="['CHANGAN', 'GEELY', 'CHERY', 'EXEED', 'HAVAL', 'CHERY']" />

  <DeliveryInfo
    class="mt-50"
    head="К привозу доступны"
    title="новые авто и авто с пробегом"
  >
    <template #additional>
      Самые востребованные марки на Российском рынке: Chery, Haval и Geely. <br>
      Не знаете, что выбрать?  Поможем вам определиться
    </template>
  </DeliveryInfo>

  <section class="mt39 container">
    <SectionHeader>
      <template #title>
        Подборка ТОП-авто из Китая
      </template>

      <template #content>
        Интересные предложения на сегодня
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
    title="Сколько стоит авто из Китая?"
    description="Укажите пожелания по авто и ваши контактные данные. Мы рассчитаем
актуальную стоимость автомобиля и свяжемся с вами."
    image-src="free_consultation_3.webp"
  />

  <Advantages
    title="Преимущества покупки авто из Кореи"
    :advantages="advantages"
    class="mt-50"
  />

  <PrinciplesList class="mt-50" :is-button-visible="true" />

  <DeliveryInfo
    class="mt-50"
    title="до 10 дней"
    description="Среднее время покупки и доставки авто из Кореи"
    additional="(6-10 дней срок растаможки)"
  />

  <DownLoadPDF class="mt-50" />

  <YoutubeVideos class="mt-50" />

  <ClientReviews class="mt-50" />
</template>
