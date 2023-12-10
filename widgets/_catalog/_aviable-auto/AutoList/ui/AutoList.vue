<script lang="ts" setup>
import { CarEntity } from '~/entities/Car'

defineProps<{
  cars: IAuto[]
}>()
</script>

<template>
  <section class="container">
    <div class="text-center">
      <SectionHeader>
        <template #title>
          Авто в наличии
        </template>

        <template #content>
          Все автомобили вы можете посмотреть на стоянке нашего офиса с 10:00 до
          18:00 по адресу: Пушкинская 109, офис 209
        </template>
      </SectionHeader>
    </div>

    <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15">
      <CarEntity v-for="car in cars" :key="car.name" :car="car" :is-detailed-link="true" />
    </section>
  </section>
</template>
