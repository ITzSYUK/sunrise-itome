<template>
  <section class="container text-center b pb-10">
    <div class="lg:h-[550px] pb-10 lg:pb-0">
      <p class="border-b b-dark py-4 md:py-5 text-[12px] md:text-[14px] lg:text-[16px]">
        Акция
      </p>

      <div class="flex flex-col items-center px-4">
        <h2 class="text-[24px]  text-center  md:text-[28px] leading-[30px] mt-7 lg:text-[46px] lg:leading-[52px] font-bold">
          <span class="text-nowrap">Закажи авто в этом месяце</span> <br>
          <p>и получи скидку 20% на наши услуги</p>
        </h2>
      </div>

      <div class="flex justify-center px-4 mt-5 md:mt-7 ">
        <button class="btn-red-filled p-3 w-full md:w-fit py-4 px-10" @click="requestModal(RequestStatus.discount)">
          Хочу скидку
        </button>
      </div>
    </div>
  </section>
</template>
