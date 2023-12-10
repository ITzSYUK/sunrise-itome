<script lang="ts" setup>

</script>

<template>
  <section class="container">
    <SectionHeader>
      <template #title>
        Что такое конструктор?
      </template>
    </SectionHeader>

    <div class="mt-15 lg:flex items-stretch gap-5">
      <div class="w-full h-full b-y b-dark basis-1/2">
        <div class="text-gray text-sm lg:text-base my-5">
          Такой автомобиль перед прохождением таможни разбирают на три основные
          части: двигатель, кузов и ходовую часть. На каждую из них оформляется
          отдельная таможенная декларация. После таможенных процедур авто заново
          собирается. На руки клиент получает только ГТД. На учёт поставить
          невозможно.
        </div>

        <NuxtImg
          src="/images/mother_plate.webp"
          class="w-full object-cover h-full"
          alt="Изображение комплектующих авто"
        />
      </div>

      <div class="b b-dark p5 text-sm lg:text-base basis-1/2">
        <p class="text-2xl font-bold">
          Плюсы и минусы услуги
        </p>

        <div class="mt-10 text-[12px] md:text-[14px] lg:text-[16px]">
          <div class="flex items-center gap-4 bg-dark bg-opacity-40 p-4 my-4">
            <NuxtIcon name="plus" class="text-green-500" />

            Можно завести целый авто без документов по выгодной цене
          </div>
          <div class="flex items-center gap-4 bg-dark bg-opacity-40 p-4 my-4">
            <NuxtIcon name="plus" class="text-green-500" />

            Автомобиль-конструктор используется как донор запчастей для старых
            или поломанных авто
          </div>
          <div class="flex items-center gap-4 bg-dark bg-opacity-40 p-4 my-4">
            <NuxtIcon name="plus" class="text-green-500" />

            Для рамных автомобилей конструктор используется для перестановки
            кузова и двигателя, в таком случае номер рамы остаётся прежним
          </div>
          <div class="flex items-center gap-4 bg-dark bg-opacity-40 p-4 my-4">
            <NuxtIcon name="minus" class="text-red" />

            Такой автомобиль нельзя поставить на учёт, потому что на него нет
            документов
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
