<script lang="ts" setup>
const name = ref('')
const phone = ref('')

const additional = ref('')
</script>

<template>
  <form class="flex flex-col gap-3">
    <input
      v-model="name"
      type="text"
      placeholder="Ваше имя"
      required
      class="input w-full"
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

    <textarea
      v-model="additional"
      cols="30"
      class="input"
      rows="5"
      placeholder="Пожелания к авто (марка, модель, год, объём, цвет и т.д.)"
    />

    <button class="btn-red-filled">
      Отправить заявку
    </button>

    <a class="text-center text-gray text-sm" href="#">
      Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
    </a>
  </form>
</template>
