<script lang='ts' setup>
import { useContactsModal } from '~/widgets/_modals/Contracts'

useHead({
  title: 'Как заказать',
})

const { isModalOpened } = useContactsModal()
</script>

<template>
  <SectionHeader class="mt-5">
    <template #title>
      Простая схема покупки авто
    </template>
  </SectionHeader>

  <section class="container mt-15">
    <article class="relative b h-130 my-4">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг первый</p>

          <h2 class="text-26px md:text-32px lg:text-46px font-bold text-shadow-xl">
            Заявка
          </h2>

          <p class="">
            Позвоните, напишите или оставьте заявку на сайте. Мы вышлем варианты
            со <br> стоимостью, расскажем об этапах покупки, сроках и доставки до
            Владивостока.
          </p>

          <button class="btn-red-filled w-70" title="Оставить заявку" @click="requestModal(RequestStatus.consultation)">
            Оставить заявку
          </button>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-center">
        <NuxtImg src="/images/steps/wheel.webp" alt="Шаг" class="object-cover" />
      </div>
    </article>
    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг второй</p>

          <h2 class="text-26px md:text-32px lg:text-46px font-bold text-shadow-xl">
            Двусторонний договор
          </h2>

          <p class="">
            Заключаем двусторонний договор, вы вносите гарантийный взнос. <br> Это
            можно сделать онлайн или лично у нас в офисе.
          </p>

          <button class="btn-red-filled w-70 gap-4" @click="isModalOpened = true">
            <NuxtIcon name="download" class="text-xl" />
            Скачать договор
          </button>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-center">
        <NuxtImg src="/images/steps/paper_clip_1.webp" alt="Шаг" class="object-cover" />
        <NuxtImg src="/images/steps/paper_clip_2.webp" alt="Шаг" class="object-cover" />
      </div>
    </article>
    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг третий</p>

          <h2 class="text-26px md:text-32px lg:text-46px font-bold text-shadow-xl">
            Подбор и покупка авто
          </h2>

          <p class="">
            После заключения договора мы приступаем к поиску нужного для вас
            автомобиля. <br> Мы закрепляем с вами менеджера, с которым вы будете в
            постоянном контакте. <br> Ставки на конкретный авто делаем после вашего
            согласования.
          </p>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-end items-center">
        <NuxtImg
          src="/images/steps/car.webp"
          alt="Шаг"
          class="w-full h-full object-cover"
        />
      </div>
    </article>
    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг четвёртый</p>

          <h2 class="text-26px md:text-32px lg:text-46px font-bold text-shadow-xl">
            Оплата инвойса
          </h2>

          <p class="">
            Вы оплачиваете расходы по Японии, Корее или Китаю через выгодный <br> для
            вас банк. Мы подготавливаем авто к отправке в Россию.
          </p>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-between">
        <NuxtImg src="/images/steps/coin_1.webp" alt="Шаг" class="object-cover" />
        <NuxtImg src="/images/steps/coin_2.webp" alt="Шаг" class="object-cover" />
      </div>
    </article>

    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг пятый</p>

          <h2 class="text-26px md:text-32px lg:text-46px font-bold text-shadow-xl">
            Растаможка авто
          </h2>

          <p>
            Когда автомобиль прибудет во Владивосток, вы оплачиваете пошлину и
            комиссию компании. <br> Со всеми клиентами после оплаты связывается наш
            логист и помогает подготовить все <br> необходимые документы и действия
            для быстрой растаможки автомобилей.
          </p>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-center items-start">
        <NuxtImg src="/images/constructor_car.webp" alt="Шаг" class="object-cover h-full " />
      </div>
    </article>
    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг шестой</p>

          <h2 class="text-26px md:text-32px lg:text-46px font-bold text-shadow-xl">
            Доставка и передача авто
          </h2>

          <p class="">
            Вы можете забрать автомобиль с нашей стоянки во Владивостоке, <br> или мы
            организуем доставку в любой город РФ.
          </p>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-center items-start">
        <NuxtImg src="/images/shipping.webp" alt="Шаг" class="h-full object-contain" />
      </div>
    </article>
  </section>
</template>
