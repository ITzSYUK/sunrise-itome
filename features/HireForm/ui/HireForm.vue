<script lang="ts" setup>
const name = ref('')
const phone = ref('')

const experience = ref('')
</script>

<template>
  <form class="flex flex-col gap-3 ">
    <input
      v-model="name"
      type="text"
      placeholder="Ваше имя"
      required
      class="input"
    >
    <input
      v-model="phone"
      type="tel"
      placeholder="Номер телефона"
      required
      class="input"
    >

    <textarea
      v-model="experience"
      cols="30"
      class="input"
      rows="5"
      placeholder="Опыт работы"
    />

    <button class="btn-red-filled">
      Отправить резюме
    </button>

    <a class="text-center text-gray text-sm" href="#">
      Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
    </a>
  </form>
</template>
