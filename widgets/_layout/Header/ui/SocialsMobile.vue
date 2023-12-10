<script lang='ts' setup>
import socials from '~/shared/socials'
</script>

<template>
  <div
    class=" justify-between hidden md:flex h-15 md:px10 lg:px-[94px] border-y b-dark items-center"
  >
    <ul class="flex">
      <a class="border-x b-dark p-4  hover:bg-red cursor-pointer transition" :href="socials.youtube">
        <NuxtIcon
          class="text-xl transition"
          name="socials/youtube"
        />
      </a>
      <a class="border-x b-dark p-4  hover:bg-red cursor-pointer transition" :href="socials.whatsapp">
        <NuxtIcon
          class="text-xl transition"
          name="socials/whatsapp"
        />
      </a>
      <a class="border-x b-dark p-4  hover:bg-red cursor-pointer transition" :href="socials.instagram">
        <NuxtIcon
          class="text-xl transition"
          name="socials/instagram"
        />
      </a>
      <a class="border-x b-dark p-4  hover:bg-red cursor-pointer transition" :href="socials.telegram">
        <NuxtIcon
          class="text-xl transition"
          name="socials/telegram"
        />
      </a>
    </ul>

    <NuxtLink to="/">
      <NuxtImg src="/images/logo.webp" class="lg:w-fit" alt="Logo" />
    </NuxtLink>

    <button
      class="border-x b-dark h-full p-4 font-bold lg:px-15 transition hover:(bg-black text-white bg-red)"
      title="Заказать звонок"
      @click="requestModal(RequestStatus.consultation)"
    >
      <span>Заказать звонок</span>
    </button>
  </div>

  <!-- Mobile -->
  <div
    class="md:hidden"
  >
    <div class="flex justify-center b-y b-dark p-4 ">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo.webp" alt="Logo" />
      </NuxtLink>
    </div>

    <div class="flex b-y b-dark">
      <ul class="flex">
        <NuxtLink class="border-x b-dark p-3 justify-center items-center flex  hover:bg-red cursor-pointer transition" to="#">
          <NuxtIcon
            class="text-xl transition"
            name="socials/youtube"
          />
        </NuxtLink>
        <NuxtLink class="border-x b-dark p-3 justify-center items-center flex  hover:bg-red cursor-pointer transition" to="#">
          <NuxtIcon
            class="text-xl transition"
            name="socials/whatsapp"
          />
        </NuxtLink>
        <NuxtLink class="border-x b-dark p-3 justify-center items-center flex  hover:bg-red cursor-pointer transition" to="#">
          <NuxtIcon
            class="text-xl transition"
            name="socials/instagram"
          />
        </NuxtLink>
        <NuxtLink class="border-x b-dark p-3 justify-center items-center flex  hover:bg-red cursor-pointer transition" to="#">
          <NuxtIcon
            class="text-xl transition"
            name="socials/telegram"
          />
        </NuxtLink>
      </ul>

      <button
        class="border-x b-dark h-full w-full p-4 font-bold lg:px-15 transition hover:(bg-black text-white bg-red)"
      >
        <span>Заказать звонок</span>
      </button>
    </div>
  </div>
</template>
