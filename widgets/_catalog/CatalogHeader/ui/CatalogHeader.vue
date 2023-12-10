<script lang="ts" setup>
import { ConsultationFormMini } from '~/features/ConsultationForm'

defineProps<{
  imageSrc: string
  formTitle: string
}>()
</script>

<template>
  <section class="container">
    <div class="relative">
      <div class="flex justify-between pt-10">
        <div>
          <h1 class="text-[28px] leading-[34px] md:(text-[36px] leading-[42px]) lg:(text-[46px] leading-[52px]) font-bold">
            <slot name="title" />
          </h1>

          <p class="mt-5 text-[14px] md:text-[16px]">
            <slot name="description" />
          </p>
        </div>

        <div class="hidden md:block">
          <ConsultationFormMini :title="formTitle" />
        </div>
      </div>

      <div class="mt-25 md:mt-0">
        <slot name="button-group" />
      </div>

      <div
        class="absolute right-0 top-0 -z-10 flex  justify-center items-end w-full h-full"
      >
        <NuxtImg
          :src="imageSrc"
          alt="Автомобили с аукционов Японии"
          class="h-full object-contain"
        />
      </div>
    </div>

    <slot name="footer" />
  </section>
</template>
