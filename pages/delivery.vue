<script lang="ts" setup>
import socials from '~/shared/socials';
import { DownLoadPDF } from '~/widgets/_catalog/DownloadPDF'

useHead({
  title: 'Доставка авто из Японии, Кореи и Китая в любой город РФ',
})
</script>

<template>
  <section class="relative h-150 w-full overflow-hidden">
    <div class="container pt-10 md:w-1/2">
      <h1 class="text-28px md:text-36px lg:text-46px font-bold leading-34px  md:leading-42px lg:leading-52px">
        Доставка авто из Японии, Кореи и Китая в любой город РФ
      </h1>
      <p class="mt-4">
        Вы можете забрать свой автомобиль с нашей стоянки во Владивостоке, или
        мы организуем доставку в ваш город: на автовозе или по железной дороге в
        вагонах закрытого типа, морем, на камчатку и сахалин
      </p>

      <div class="md:flex gap-2 w-full py-10 px-4 md:px-0 text-nowrap font-bold absolute bottom-0 ">
        <button class="btn-red-filled px-15 w-full my2 md:w-80" title="Рассчитать стоимость" @click="requestModal(RequestStatus.price)">
          Рассчитать стоимость
        </button>
        <a class="btn-red-outline px-15 w-full my2 md:w-80 flex justify-center items-center" :href="socials.whatsapp">
          Написать в WhatsApp
        </a>
      </div>

      <NuxtPicture
        src="/images/frames/delivery.webp"
        class="absolute right-0 bottom-0 -z-10"
        alt="Доставка авто"
      />
    </div>
  </section>

  <DownLoadPDF class="mt-50" />
</template>
