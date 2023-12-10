<script lang="ts" setup>
defineProps<{
  imgSrc: string
  name: string
  position: string
}>()
</script>

<template>
  <article class="flex flex-col gap-2 b b-dark">
    <NuxtImg :src="imgSrc" alt="Изображение члена команды" />

    <div class="p-4">
      <p class="text-xl font-bold">
        {{ name }}
      </p>

      <p class="text-gray my-2">
        {{ position }}
      </p>

      <button class="btn-red-filled w-full mt-4 gap-2 font-bold">
        Написать в WhatsApp

        <NuxtIcon name="socials/whatsapp" />
      </button>
    </div>
  </article>
</template>
