<script lang="ts" setup>
import Links from './Links.vue'
</script>

<template>
  <section class="lg:flex  border-b b-dark">
    <div
      class="container b-b lg:b-b-none pb-5 lg:pb-0 b-dark pt-10 basis-1/2"
    >
      <p class="text-xl font-bold">
        Связаться с нами
      </p>
      <p class="text-3xl font-bold mt-4">
        <a href="tel:8 (800) 234-23-50">
          8 (800) 234-23-50
        </a>
      </p>
      <p class="mt-3 text-gray">
        Владивосток, Пушкинская, 109, оф. 209
      </p>
      <a class="mt-3 block text-gray" href="mailto:mail@sunrise-auto.ru">
        mail@sunrise-auto.ru
      </a>
    </div>

    <Links />
  </section>
</template>
