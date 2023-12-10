<script lang="ts" setup>
import { CatalogFooter } from '~/widgets/_catalog/CatalogHeader'
</script>

<template>
  <section class="bg-black text-white text-left container pt-10 relative">
    <div class="w-full md:w-2/3 lg:w-1/2 lg:p-0 relative top-0 left-0 z-10">
      <h1 class="text-[28px] text-nowrap font-bold leading-[34px] md:(text-[36px] leading-[42px]) lg:(text-[46px] leading-[52px])">
        Автомобили из Японии, <br> Кореи и Китая
      </h1>
      <p class="mt-4 lg:(text-[18px] leading-[22px] tracking-[-0.32px]) ">
        Наши специалисты работают во всех странах привоза, оценивают авто и
        делают видеообзоры на этапе просмотра. Заказывая автомобиль через нашу
        компанию, вы получаете надёжный проверенный авто за минимальные сроки.
      </p>
    </div>

    <div class="pt-[254px] 2xl:pt-[540px] flex flex-col md:flex-row gap-5 z-10 relative justify-between">
      <div class="flex gap-4">
        <button class="btn-red-filled p-3 px-15 h-13 w-full md:w-74 text-nowrap font-bold" title="Рассчитать стоимость" @click="requestModal(RequestStatus.price)">
          Рассчитать стоимость
        </button>
      </div>
    </div>

    <video autoplay loop muted class="absolute top-0 left-0 wfull h-full object-cover">
      <source src="/sunrise-welcome.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <CatalogFooter class="mt-4 relative bg-black" />
  </section>
</template>
