<script lang='ts' setup>
import socials from '~/shared/socials'
import { useMobileModal } from '~/widgets/_modals/MobileLinks'

const { isMobileModalOpened } = useMobileModal()

function request() {
  requestModal(RequestStatus.inspection)
}
</script>

<template>
  <section
    class="flex justify-between h-15 md:px10 lg:px-[94px] border-y b-dark items-center"
  >
    <ul class="flex gap-4">
      <a class="border-x b-dark p-4 hidden lg:block hover:bg-red cursor-pointer transition" :href="socials.youtube">
        <NuxtIcon
          class="text-xl transition"
          name="socials/youtube"
        />
      </a>
      <a class="border-x b-dark p-4 hidden lg:block hover:bg-red cursor-pointer transition" :href="socials.whatsapp">
        <NuxtIcon
          class="text-xl transition"
          name="socials/whatsapp"
        />
      </a>
      <a class="border-x b-dark p-4 hidden lg:block hover:bg-red cursor-pointer transition" :href="socials.instagram">
        <NuxtIcon
          class="text-xl transition"
          name="socials/instagram"
        />
      </a>
      <a class="border-x b-dark p-4 hidden lg:block hover:bg-red cursor-pointer transition" :href="socials.telegram">
        <NuxtIcon
          class="text-xl transition"
          name="socials/telegram"
        />
      </a>
      <a class="border-x b-dark p-4 hover:bg-red cursor-pointer transition" href="tel:8 (800) 234-23-50">
        <NuxtIcon class="text-xl transition" name="phone" />
      </a>
    </ul>

    <NuxtLink to="/">
      <NuxtImg src="/images/logo.webp" class="lg:w-fit" alt="Logo" />
    </NuxtLink>

    <button
      class="border-x b-dark h-full md:hidden p-4 font-bold lg:px-15 transition hover:(bg-black text-white bg-red)"
    >
      <span class="hidden lg:block">Заказать звонок</span>

      <div>
        <NuxtIcon
          v-if="!isMobileModalOpened"
          class="text-xl cursor-pointer transition lg:hidden"
          name="menu"
          @click="isMobileModalOpened = true"
        />

        <NuxtIcon
          v-else
          name="cancel"
          class="text-xl cursor-pointer transition lg:hidden"
          @click="isMobileModalOpened = false"
        />
      </div>
    </button>
    <button
      class="border-x b-dark h-full hidden md:block p-4 font-bold lg:px-15 transition hover:(bg-black text-white bg-red)"
      @click="request"
    >
      <span class="hidden lg:block">Заказать звонок</span>

      <div>
        <NuxtIcon
          v-if="!isMobileModalOpened"
          class="text-xl cursor-pointer transition lg:hidden"
          name="menu"
          @click="isMobileModalOpened = true"
        />

        <NuxtIcon
          v-else
          name="cancel"
          class="text-xl cursor-pointer transition lg:hidden"
          @click="isMobileModalOpened = false"
        />
      </div>
    </button>
  </section>
</template>
