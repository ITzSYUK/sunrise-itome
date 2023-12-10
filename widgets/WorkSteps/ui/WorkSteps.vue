<script lang="ts" setup>
import StepCard from './StepCard.vue'

const container = ref<HTMLDivElement>()
const bottom = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    bottom.value = container.value?.getBoundingClientRect().bottom
  })
})
</script>

<template>
  <section class="container">
    <SectionHeader class="mb-15">
      <template #title>
        Схема работы
      </template>
    </SectionHeader>

    <div ref="container" class="h-3500px">
      <div class="sticky h-500px top-20">
        <TransitionExpand no-opacity>
          <StepCard image-src="planet_big.webp" class="top-0 transition" :class="{ 'scale-100 top-30': bottom < 1700, 'scale-80': bottom > 1700 }">
            <template #step>
              Шаг пятый
            </template>

            <template #title>
              Доставка автомобиля
            </template>

            <template #description>
              Вы забираете авто с нашей бесплатной стоянки во Владивостоке, <br>
              или мы организуем доставку в ваш город
            </template>
          </StepCard>
        </TransitionExpand>
        <TransitionExpand no-opacity>
          <StepCard v-if="bottom > 1700" image-src="shipping.webp" class="top-7 scale-85">
            <template #step>
              Шаг четвертый
            </template>

            <template #title>
              Перевозка и таможенное оформление
            </template>

            <template #description>
              После того, как авто прибудет во Владивосток, вы оплачиваете <br>
              таможенные расходы и комиссию компании.
            </template>
          </StepCard>
        </TransitionExpand>
        <TransitionExpand no-opacity>
          <StepCard v-if="bottom > 2000" image-src="brembo.webp" class="top-14 scale-90">
            <template #step>
              Шаг третий
            </template>

            <template #title>
              Согласование и покупка автомобиля
            </template>

            <template #description>
              Подбираем наиболее подходящие под запрос автомобили. Предоставляем информацию <br>
              по каждому лоту. Согласовываем ставки и покупаем понравившейся лот. Вы оплачиваете <br>
              стоимость авто с доставкой до Владивостока без учёта таможенных расходов.
            </template>
          </StepCard>
        </TransitionExpand>
        <TransitionExpand no-opacity>
          <StepCard v-if="bottom > 2500" image-src="engine.webp" class="top-21 scale-95">
            <template #step>
              Шаг второй
            </template>

            <template #title>
              Заключение договора
            </template>

            <template #description>
              Составляем договор, прописываем все параметры авто и конечный бюджет <br>
              с доставкой до Владивостока. Вы вносите гарантийный взнос 50 000 рублей.
            </template>
          </StepCard>
        </TransitionExpand>
        <TransitionExpand no-opacity>
          <StepCard v-if="bottom > 2900" image-src="wheel.webp" class="top-28">
            <template #step>
              Шаг первый
            </template>

            <template #title>
              Консультация и подбор автомобиля
            </template>

            <template #description>
              Оставьте заявку на сайте или позвоните нам. Наш менеджер поможет <br>
              выбрать подходящие варианты перед началом покупки.
            </template>
          </StepCard>
        </TransitionExpand>
      </div>
    </div>
  </section>
</template>
