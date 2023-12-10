<script lang="ts" setup>
import { ConsultationFormMini } from '~/features/ConsultationForm'
import { FreeConsultation } from '~/widgets/FreeConsultation'
import { PrinciplesList } from '~/widgets/PrinciplesList'
import {
  CatalogFooterRelative,
} from '~/widgets/_catalog/CatalogHeader'
import { AutoComparison } from '~/widgets/_catalog/_broken-auto/AutoComparison'
import { WhyToBuyBroken } from '~/widgets/_catalog/_broken-auto/WhyToBuyBroken'

useHead({
  title: 'Битые авто из Японии',
})

const buyAdvantages = [
  'Авто с минимальным пробегом до 1 000 км по адекватной цене',
  'Можно заранее оценить ремонт и понять процент выгоды',
  'Экономия 20-30% с учётом восстановления авто',
  'Выгодная покупка авто под запчасти. Дешевле, чем в России',
]
</script>

<template>
  <section class="overflow-hidden relative">
    <div class="pt-10 container">
      <div class="flex  justify-between min-h-70">
        <div class="">
          <h1 class="text-28px md:text-36px lg:text-46px font-bold">
            Битые автомобили из Японии
          </h1>

          <p class="text-14px md:text-16px mt-5">
            Поможем выбрать и привезти аварийное авто для восстановления или под запчасти
          </p>
        </div>

        <div class="hidden md:flex">
          <ConsultationFormMini title="Как заказать авто под запчасти?" />
        </div>
      </div>

      <button class="btn-red-filled px-15 w-full md:w-max mt-20 font-bold" title="Рассчитать стоимость" @click="requestModal(RequestStatus.price)">
        Рассчитать стоимость
      </button>
    </div>

    <NuxtImg src="/images/frames/frame.webp" class="w-full absolute top-0 left-0 -z-10 md:block hidden  h-full pointer-events-none" />
    <NuxtImg src="/images/frames/frame_mobile.webp" class="w-full absolute top-0 left-0 -z-10 md:hidden  h-full pointer-events-none" />
    <div class="bg-black">
      <CatalogFooterRelative :strings="buyAdvantages" class="container mt-5" />
    </div>
  </section>

  <WhyToBuyBroken class="mt-50" />

  <AutoComparison class="mt-50" />

  <FreeConsultation
    class="mt-50"
    title="Сколько стоит авто из Японии?"
    description="Укажите пожелания по авто и ваши контактные данные. Мы рассчитаем
актуальную стоимость автомобиля и свяжемся с вами."
    image-src="free_consultation.webp"
  />

  <PrinciplesList class="mt-50" :is-button-visible="true" />
</template>
