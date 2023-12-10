<template>
  <article class="lg:flex justify-between b">
    <div class="">
      <div class="border-b b-dark  flex items-center gap-2 pt-10 pb-6 px-10">
        <NuxtIcon name="user" class="text-xl" />
        <span class="font-bold text-[20px]">Mister Client</span>
      </div>

      <div class="p-7 px-10">
        <div class="flex gap-2">
          <NuxtIcon v-for="star in 5" :key="star" name="star" class="text-red text-xl" />
        </div>

        <p class="font-bold text-[18px] md:text-[20px] lg:text-[24px] mt-5">
          Парни тачку то привезли, мне ваще нравится! Самое крутое, что привезли
          тачку именно ту, что я хотел!! ЕЗЖУ ТЕПЕРЬ !! Блин теперь тачки только
          у вас заказывать буду!
        </p>

        <p class="mt-35">
          18.07.2023
        </p>
      </div>
    </div>

    <NuxtImg
      src="/images/reviews/user.webp"
      alt="Отзыв"
      class="object-contain w-full lg:w-fit "
    />
  </article>
</template>
