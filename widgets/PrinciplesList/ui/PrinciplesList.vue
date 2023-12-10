<script lang="ts" setup>
import PrincipleCard from './PrincipleCard.vue'

defineProps<{
  isButtonVisible?: boolean
}>()

const principles = [
  {
    imageSrc: 'armchair.webp',
    title: 'Предоставляем выбор',
    description:
      'Вы сможете выбрать авто из огромного ассортимента. Мы предлагаем к покупке только те автомобили, которые прошли предварительную проверку. Согласовываем с вами. После чего вы называете вариант, подходящий именно для вас.',
  },
  {
    imageSrc: 'robo-hand.webp',
    title: 'Распределяем обязанности',
    description:
      'Заказчики «не теряются» в контактном листе, потому что работу выполняет команда, а не один человек. Каждый сотрудник отвечает за свои задачи, чтобы получить нужный результат. Например, менеджер встречает клиента и помогает с выбором авто, а логист уже проводит все операции по доставке и даёт клиенту оперативную обратную связь.',
  },
  {
    imageSrc: 'helmet.webp',
    title: 'Все авто страхуем',
    description: `Из Японии и Кореи автомобили перевозим на крытых паромах, из Китая — на крытых автовозах, чтобы избежать повреждений. В случае ущерба, возмещение происходит наперёд — до взыскания денежных средств с перевозчика.`,
  },
  {
    imageSrc: 'planet.webp',
    title: 'Всегда выходим на связь',
    description:
      'Отвечаем на сообщения клиентов без задержек, предоставляем видеотчёты ещё на этапе просмотра авто. Наш договор — простой и понятный. Вы понимаете, за что платите.',
  },

  {
    imageSrc: 'drone.webp',
    title: 'Быстрая доставка',
    description:
      'Наши партнёры из Японии, Кореи и Китая доставляют авто за 10-15 дней. Это регулярные рейсы по отлаженным схемам без простоев на границе.',
  },

  {
    imageSrc: 'svechi.webp',
    title: 'Помогаем принять решение',
    description: `Если у вас ограниченный бюджет и нет полного понимания, какую машину лучше привезти, — мы поможем определиться. Расскажем о плюсах и минусах любого автомобиля. У нашей команды большой опыт в решении подобных вопросов. Все сотрудники регулярно проходят повышение квалификации.`,
  },
]
</script>

<template>
  <section class="container">
    <SectionHeader class="mb-15">
      <template #title>
        Преимущества заказа авто через SUNRISE AUTO
      </template>
    </SectionHeader>

    <section class="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
      <PrincipleCard
        v-for="principle in principles"
        :key="principle.title"
        :title="principle.title"
        :description="principle.description"
        :image-src="principle.imageSrc"
      />
    </section>

    <NuxtLink
      v-if="isButtonVisible"
      to="/buy-steps"
      class="float-right mt-5 btn-red-outline w-full md:w-70 text-center"
    >
      Схема заказа авто
    </NuxtLink>
  </section>
</template>
