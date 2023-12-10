<script lang="ts" setup>
defineProps<{
  title: string
}>()

const name = ref('')
const phone = ref('')
</script>

<template>
  <form class="flex flex-col gap-3 w-90 b p-7 bg-black">
    <p class="text-xl font-bold">
      {{ title }}
    </p>

    <p class="text-gray">
      Оставьте свой номер для бесплатной консультации
    </p>

    <input
      v-model="name"
      type="text"
      placeholder="Ваше имя"
      required
      class="input"
    >
    <ClientOnly>
      <input
        v-model="phone"
        v-maska data-maska="+7 (###) ### ##-##"
        type="tel"
        placeholder="Номер телефона"
        required
        class="input w-full"
      >
    </ClientOnly>

    <button class="btn-red-filled mt-2">
      Отправить
    </button>
  </form>
</template>
