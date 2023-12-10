<script lang="ts" setup>
import ServiceCard from './ServiceCard.vue'

const config = [
  {
    title: 'Авто из Японии под полную пошлину',
    imgSrc: '/images/camry.webp',
    href: '/catalog/japan/full-duty',
  },
  {
    title: 'Авто из Кореи',
    imgSrc: '/images/korea.webp',
    href: '/catalog/korea',
  },
  {
    title: 'Авто из Китая',
    imgSrc: '/images/china.webp',
    href: '/catalog/china',
  },
  {
    title: 'Мотоциклы',
    imgSrc: '/images/motorcycle.webp',

    href: '/catalog/motorcycle',
  },
  {
    title: 'Коммерческие',
    imgSrc: '/images/truck.webp',

    href: '/catalog/commercial',
  },
  {
    title: 'Авто в наличии',
    imgSrc: '/images/supra.webp',

    href: '/catalog/avaiable',
  },
  {
    title: 'Авто из Японии конструкторы',
    imgSrc: '/images/camry.webp',

    href: '/catalog/japan/constructor',
  },
  {
    title: 'Битые авто из Японии',
    imgSrc: '/images/services/wheel.webp',
    href: '/catalog/japan/broken-auto',
  },
  {
    title: 'Доставка по РФ',
    imgSrc: '/images/planet_big.webp',
    href: '/delivery',
  },
]
</script>

<template>
  <section class="container">
    <h1 class="text-center text-4xl font-bold my-10">
      Сервисы
    </h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      <ServiceCard
        v-for="item in config"
        :key="item.title"
        :title="item.title"
        :img-src="item.imgSrc"
        :href="item.href"
      />
    </div>
  </section>
</template>
