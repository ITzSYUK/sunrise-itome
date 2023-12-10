<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import { TeamMember } from '~/entities/TeamMember'
import { HireBlock } from '~/widgets/HireBlock'
import { PrinciplesList } from '~/widgets/PrinciplesList'
import { BlockQuote } from '~/widgets/TeamQuote'

useHead({
  title: 'О компании',
})

const team = [
  {
    name: 'Роман Андреевич',
    position: 'Руководитель / Логист / Менеджер',
    imgSrc: '/images/team/team1.webp',
  },
  {
    name: 'Костюченко Олег',
    position: 'Менеджер / Экспедитор',
    imgSrc: '/images/team/team2.webp',
  },
  {
    name: 'Потешкин Антон',
    position: 'Менеджер / Экспедитор',
    imgSrc: '/images/team/team3.webp',
  },
]
</script>

<template>
  <section class="container relative h-100 py-10">
    <h1 class="text-28px md:text-46px font-bold">
      Под заказ — всегда дешевле
    </h1>

    <p class="mt-5">
      Поможем выгодно привезти любой автомобиль.
    </p>

    <NuxtImg
      src="/images/constructor_car.webp"
      alt="Изображение автомобиля"
      class="absolute right-0 top-0 -z-10"
    />
  </section>

  <section
    class="flex lg:grid grid-cols-6 gap-4 mt-50 container overflow-auto lg:overflow-initial"
  >
    <article
      class="flex flex-col gap-4 p-10 b b-dark items-center text-center font-bold text-xl min-w-70 lg:min-w-min"
    >
      <NuxtPicture src="/images/icons/ad1.webp" alt="Изображение автомобиля" />
      <span>3 страны привоза</span>
    </article>
    <article
      class="flex flex-col gap-4 p-10 b b-dark items-center text-center font-bold text-xl min-w-70 lg:min-w-min"
    >
      <NuxtPicture src="/images/icons/ad2.webp" alt="Изображение автомобиля" />
      <span>с 2016 года на рынке</span>
    </article>
    <article
      class="flex flex-col gap-4 p-10 b b-dark items-center text-center font-bold text-xl min-w-70 lg:min-w-min"
    >
      <NuxtPicture src="/images/icons/ad3.webp" alt="Изображение автомобиля" />
      <span>20 человек в команде</span>
    </article>
    <article
      class="flex flex-col gap-4 p-10 b b-dark items-center text-center font-bold text-xl min-w-70 lg:min-w-min"
    >
      <NuxtPicture src="/images/icons/ad4.webp" />
      <span>Доставка во все города РФ</span>
    </article>
    <article
      class="flex flex-col gap-4 p-10 b b-dark items-center text-center font-bold text-xl min-w-70 lg:min-w-min"
    >
      <NuxtPicture src="/images/icons/ad6.webp" alt="Изображение автомобиля" />
      <span>1000+ авто привезено</span>
    </article>
    <article
      class="flex flex-col gap-4 p-10 b b-dark items-center text-center font-bold text-xl min-w-70 lg:min-w-min"
    >
      <NuxtPicture src="/images/icons/ad5.webp" alt="Изображение автомобиля" />
      <span>На связи 24\7</span>
    </article>
  </section>

  <BlockQuote class="mt-50" />

  <PrinciplesList class="mt-50" />

  <ListWithPagination class="container mt-50">
    <SwiperSlide v-for="member in team" :key="member.name">
      <TeamMember
        :img-src="member.imgSrc"
        :name="member.name"
        :position="member.position"
      />
    </SwiperSlide>
  </ListWithPagination>

  <HireBlock class="mt-50" />
</template>
