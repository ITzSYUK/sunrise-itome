<script lang="ts" setup>
defineProps<{
  imageSrc: string
  title: string
  description: string
}>()
</script>

<template>
  <TransitionSlide>
    <article class="b p-5 ">
      <div class="h-60 p-5">
        <NuxtImg :src="`/images/${imageSrc}`" alt="Преимущество" class="" />
      </div>

      <p class="text-2xl font-semibold">
        {{ title }}
      </p>

      <p class="mt-4">
        {{ description }}
      </p>
    </article>
  </TransitionSlide>
</template>
