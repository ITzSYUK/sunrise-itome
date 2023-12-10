<template>
  <section class="container">
    <SectionHeader>
      <template #title>
        Доставим авто в ваш город
      </template>

      <template #content>
        Стоимость доставки зависит от типа транспортного средства и города
        доставки
      </template>
    </SectionHeader>

    <div class="b md:flex justify-between p-10 pb-25 md:pb-10 mt-15">
      <div class="">
        <p class="text-18px md:text-20px lg:text-32px font-bold">
          Скачайте PDF-файл чтобы ознакомиться с тарифами и сроками доставки в
          ваш город
        </p>

        <button class="btn-red-filled mt-40 hidden gap-4 lg:flex font-bold">
          <NuxtIcon name="download" class="text-2xl" />
          <span>Ознакомиться с тарифами</span>
        </button>
      </div>

      <div class="basis-1/2 flex justify-center">
        <NuxtImg src="/images/pdf.webp" alt="PDF" class="object-cover" />
      </div>

      <button class="btn-red-filled mt-20 gap-4 md:hidden w-full">
        <NuxtIcon name="download" class="text-2xl" />
        <span>Ознакомиться с тарифами</span>
      </button>
    </div>
  </section>
</template>
