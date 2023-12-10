<script lang="ts" setup>
import { YandexMap, YandexMarker, loadYmap } from 'vue-yandex-maps'

const zoom = ref(17)

const settings = { lang: 'ru_RU', coordorder: 'latlong', debug: false, version: '2.1', apiKey: '823c4375-e7b6-42f9-80e9-2b459fe45e18' }

onMounted(async () => {
  await loadYmap(settings)
})

function increaseZoom() {
  zoom.value = zoom.value + 1
}

function decreaseZoom() {
  zoom.value = zoom.value - 1
}

useHead({
  title: 'Контакты',
})
</script>

<template>
  <section class="container mt-10">
    <section class="md:flex justify-between">
      <div>
        <p class="text-4xl font-bold">
          Владивосток, <br>
          Пушкинская 109, офис 209
        </p>
        <p class="text-gray text-xl mt-4">
          Ежедневно с 10:00 до 18:00
        </p>
      </div>

      <div>
        <a class="text-4xl font-bold" href="tel:8 (800) 234-23-50">8 (800) 234-23-50</a>
        <a class="text-gray text-xl md:text-right mt-4 block" href="mailto:mail@sunrise-auto.ru">
          mail@sunrise-auto.ru
        </a>

        <div class="flex gap-4 md:float-right mt-5">
          <a
            href="#"
            class="w-10 h-10 bg-red hover:bg-dark_red rounded-full flex justify-center items-center"
          >
            <NuxtIcon name="socials/youtube" class="text-xl" />
          </a>
          <a
            href="#"
            class="w-10 h-10 bg-red hover:bg-dark_red rounded-full flex justify-center items-center"
          >
            <NuxtIcon name="socials/whatsapp" class="text-xl" />
          </a>
          <a
            href="#"
            class="w-10 h-10 bg-red hover:bg-dark_red rounded-full flex justify-center items-center"
          >
            <NuxtIcon name="socials/instagram" class="text-xl" />
          </a>
          <a
            href="#"
            class="w-10 h-10 bg-red hover:bg-dark_red rounded-full flex justify-center items-center"
          >
            <NuxtIcon name="socials/telegram" class="text-xl" />
          </a>
        </div>
      </div>
    </section>

    <ClientOnly>
      <div class="relative w-full my-10">
        <YandexMap :zoom="zoom" class="w-full h-500px z-100" :coordinates="[43.114150, 131.917059]">
          <YandexMarker
            :coordinates="[43.114150, 131.917059]" marker-id="sunrise" :options="{
              iconLayout: 'default#imageWithContent',
              iconImageHref: '/images/sunrise-baloon.png',
              iconImageSize: [45, 50],
              iconOffset: [-25, -40],
            }"

            :properties="{
              hintContent: 'Владивосток, Пушкинская 109, офис 209',
            }"
          />
        </YandexMap>

        <div class="absolute right-28px top-1/3 flex flex-col gap-2 text-3xl">
          <button
            class="btn-black-outline bg-white text-black hover:border-black hover:bg-slate-200"
            @click="decreaseZoom"
          >
            -
          </button>
          <button
            class="btn-black-outline bg-white text-black hover:border-black hover:bg-slate-200"
            @click="increaseZoom"
          >
            +
          </button>
        </div>
      </div>
    </ClientOnly>

    <div class="flex gap-4 items-center">
      <NuxtIcon name="location_point" class="text-red text-4xl" />

      <p class="text-3xl font-bold">
        Как к нам добраться?
      </p>
    </div>

    <p class="text-gray mt-2">
      Пушкинская 109, офис 209, вход через “Никодент”, 2 этаж.
    </p>
  </section>
</template>
