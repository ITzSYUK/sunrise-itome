<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
  additional?: string
  head?: string
}>()
</script>

<template>
  <section class="container relative">
    <div
      class="absolute w-full text-center h-full flex flex-col gap-7 justify-center items-center"
    >
      <p>{{ head }}</p>

      <slot name="head" />

      <h2 class="text-[36px] md:[text-48px] lg:text-[64px] font-bold">
        {{ title }}
        <slot name="title" />
      </h2>

      <p class="text-18px md:text-20px lg:text-28px text-center font-semibold">
        {{ description }}
        <slot name="description" />
      </p>

      <p>{{ additional }}</p>
      <slot name="additional" />
    </div>

    <NuxtImg
      src="images/frames/delivery_info.webp"
      alt="Доставка"
      class="w-full h[500px]"
    />
  </section>
</template>
