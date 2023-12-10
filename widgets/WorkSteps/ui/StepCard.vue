<script lang="ts" setup>
defineProps<{
  imageSrc: string
}>()
</script>

<template>
  <article
    class="mt-5  p-10 h-[500px] w-full bg-black flex flex-col absolute top-0 justify-center b items-center z-10 overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 w-full h-full flex justify-center items-center -z-10 pointer-events-none"
    >
      <NuxtImg :src="`/images/${imageSrc}`" alt="Шаг из схемы работы" class="object-contain" />
    </div>

    <div class="text-center flex flex-col items-center gap-5 text-shadow-xl">
      <slot name="step" />

      <h3 class="text-3xl lg:text-5xl font-bold">
        <slot name="title" />
      </h3>

      <slot name="description" />

      <slot name="button" />
    </div>
  </article>
</template>
