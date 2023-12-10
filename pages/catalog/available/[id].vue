<script lang='ts' setup>
import { SliderWithGallery } from '~/widgets/_catalog/_aviable-auto/SliderWithGallery'

const { pb } = useAPI()

const { data: auto } = await useAsyncData('car', () => {
  return pb.collection('avaiable').getOne<IAuto>(useRoute().params.id as string)
})

const images = computed(() => {
  return auto.value?.images.map((img) => {
    return toImg(auto.value, img)
  })
})

const description = computed(() => {
  if (auto.value?.description === '')
    return 'У авто нет описания'

  else
    return auto.value?.description
})
</script>

<template>
  <section class="container py-10">
    <NuxtLink to="/catalog/available">
      <button class="btn-black-outline gap-5 w-full md:w-50">
        <NuxtIcon name="arrow-left" />
        Все авто
      </button>
    </NuxtLink>

    <h1 class="text-4xl font-bold mt-10">
      {{ auto?.name }}
    </h1>

    <div class="mt-4 md:flex gap-5">
      <SliderWithGallery class="basis-2/3 h-1/2" :images="images" />

      <div class="basis-1/3">
        <p class="text-4xl font-bold b p-7">
          {{ toPrice(auto?.price) }} ₽
        </p>

        <div class="b p-7 flex flex-col gap-4">
          <div class="flex justify-between">
            <p class="text-gray">
              Год выпуска
            </p>
            <p>{{ auto?.release_year }}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray">
              Объём двигателя
            </p>
            <p>{{ auto?.engine_capability }}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray">
              Мощность
            </p>
            <p>{{ auto?.power }}</p>
          </div>
          <div class="flex justify-between">
            <p class="text-gray">
              Пробег
            </p>
            <p>{{ auto?.mileage }}</p>
          </div>
        </div>

        <div class="p-7 b">
          <p class="text-2xl font-bold my-2">
            Описание
          </p>

          <div v-html="description" />
        </div>

        <div>
          <div class="p-7 b">
            <div class="flex items-start gap-4">
              <NuxtPicture
                src="/images/sunrise_badge.webp"
                class="text-red"
                alt="Изображение автомобиля"
              />

              <div>
                <p>SUNRISE AUTO</p>
                <p>Владивосток, Пушкинская, 109, офис 209</p>
              </div>
            </div>

            <button class="btn-red-filled w-full mt-4 font-bold" @click="requestModal(RequestStatus.inspection)">
              Записаться на осмотр
            </button>

            <button class="btn-red-outline w-full mt-4 p-4 font-bold" @click="requestModal(RequestStatus.consultation)">
              Узнать детали
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
