<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
</script>

<template>
  <section class="container">
    <SectionHeader>
      <template #title>
        Зачем покупать и ввозить аварийное авто
      </template>

      <template #content>
        Главный плюс - это экономия ваших денег
      </template>
    </SectionHeader>

    <div class="grid grid-cols-1 xl:grid-cols-2 mt-15 gap-5 ">
      <div class=" b b-dark ">
        <NuxtImg src="/images/broken_auto.webp" class="object-cover" alt="Изображение сломанного грузовика" />
      </div>

      <div class="text-gray flex flex-col gap-4 b b-dark p-10 mt-4 lg:mt-0">
        <p>
          Представьте ситуацию: у вас есть 2 млн рублей, а машина, которая вам
          нравится, стоит 2,5 миллиона. Чтобы заработать или накопить ещё денег,
          нужно время. Сам авто за это время может подорожать. Что делать?
        </p>

        <p>
          Не ждать и заказать авто с незначительными повреждениями в ваш бюджет.
          Стоимость битого авто из Японии вместе со стоимостью его ремонта в
          России будет значительно ниже, чем покупка целого такого же авто.
          Экономия может составить до 20-30%.
        </p>

        <p>
          После того, как мы привезём такой автомобиль в Россию, мы можем
          порекомендовать проверенные сервисы для восстановления авто.
        </p>
      </div>
    </div>
  </section>
</template>
