<script lang="ts" setup>
const name = ref('')
const phone = ref('')

const additional = ref('')
</script>

<template>
  <form>
    <div class="md:flex gap-4">
      <input
        v-model="name"
        type="text"
        placeholder="Ваше имя"
        required
        class="input w-full"
      >
      <input
        v-model="phone"
        v-maska data-maska="+7 (###) ### ##-##"
        type="tel"
        placeholder="Номер телефона"
        required
        class="input w-full"
      >
    </div>

    <textarea
      v-model="additional"
      cols="30"
      class="input w-full mt-4"
      rows="5"
      placeholder="Пожелания к авто (марка, модель, год, объём, цвет и т.д.)"
    />

    <div class="md:flex items-center gap-4 mt-4">
      <button class="btn-red-filled w-full md:w-1/2">
        Отправить заявку
      </button>

      <p class="text-center text-gray text-sm mt-4 md:mt-0">
        Нажимая на кнопку, вы соглашаетесь <br>
        с политикой конфиденциальности
      </p>
    </div>
  </form>
</template>
