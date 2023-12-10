<script lang='ts' setup>
const props = defineProps<{
  isDetailedLink?: boolean
  car?: IAuto
}>()

const image = computed(() => toImg(props?.car, props.car?.images[0]))

const engineCubes = computed(() => {
  return props.car?.engine_capability.replace('см3', 'см³')
})
</script>

<template>
  <article class="border b-dark p-5">
    <div class="">
      <img :src="image" alt="" class="object-cover  wfull h-388px">
    </div>

    <h3 class="text-xl lg:text-2xl font-bold my-5">
      {{ car?.name }}
    </h3>

    <ul class="text-[14px] lg:text-[16px]">
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Год выпуска</span>
        <span>{{ car?.release_year }}</span>
      </li>
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Объём двигателя </span>
        <span>{{ engineCubes }}</span>
      </li>
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Мощность</span>
        <span>{{ car?.power }}</span>
      </li>
      <li v-if="!car" class="flex justify-between border b-dark p-3">
        <span class="text-gray">Топливо</span>
        <span>Бензин</span>
      </li>
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Пробег</span>
        <span>{{ car?.mileage }}</span>
      </li>
    </ul>

    <p class="text-2xl my-5 font-bold">
      {{ toPrice(car?.price) }} ₽
    </p>

    <div class=" text-[16px] md:text-[18px] lg:text-[20px] font-bold">
      <NuxtLink>
        <button class="btn-red-filled w-full" title="Отправить заявку на осмотр" @click="requestModal(RequestStatus.consultation)">
          {{ car ? 'Хочу такой же' : 'Заявка на осмотр' }}
        </button>
      </NuxtLink>
      <NuxtLink v-if="isDetailedLink" :to="`/catalog/available/${car?.id}`" class="btn-red-outline w-full mt-2 block text-center">
        Подробнее
      </NuxtLink>
    </div>
  </article>
</template>
