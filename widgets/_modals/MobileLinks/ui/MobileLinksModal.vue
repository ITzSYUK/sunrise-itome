<script lang='ts' setup>
import { useMobileModal } from '../model'
import socials from '~/shared/socials'
import { LinkDropdown } from '~/widgets/_layout/Footer'

const { isMobileModalOpened } = useMobileModal()

function closeModal() {
  isMobileModalOpened.value = false
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <section class="h-full w-full bg-black fixed  b-r b-dark z-20 top-15 left-0">
    <section
      class=" px-5 py-7 relative h-100% text-nowrap list-none font-bold"
    >
      <li>
        <LinkDropdown>
          <template #title>
            Авто из Японии
          </template>

          <template #links>
            <NuxtLink class=" hover:text-red text-gray font-normal transition mt-2" to="/catalog/japan/full-duty" @click="closeModal">
              Полная пошлина
            </NuxtLink>
            <NuxtLink class=" hover:text-red text-gray font-normal transition mt-2" to="/catalog/japan/constructor" @click="closeModal">
              Конструкторы
            </NuxtLink>
            <NuxtLink class=" hover:text-red text-gray font-normal transition mt-2" to="/catalog/japan/broken-auto" @click="closeModal">
              Битые авто
            </NuxtLink>
          </template>
        </LinkDropdown>
      </li>

      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/catalog/korea">
          Авто из Кореи
        </NuxtLink>
      </li>
      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/catalog/china">
          Авто из Китая
        </NuxtLink>
      </li>
      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/catalog/motorcycle">
          Мотоциклы
        </NuxtLink>
      </li>
      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/catalog/available">
          Авто в наличии
        </NuxtLink>
      </li>
      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/about">
          О компании
        </NuxtLink>
      </li>

      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/buy-steps">
          Как заказать
        </NuxtLink>
      </li>
      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/news">
          Новости и статьи
        </NuxtLink>
      </li>
      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/delivery">
          Доставка по РФ
        </NuxtLink>
      </li>
      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/faq">
          FAQ
        </NuxtLink>
      </li>

      <li class="mt-3 hover:text-red  transition" @click="closeModal">
        <NuxtLink to="/contacts">
          Контакты
        </NuxtLink>
      </li>

      <div class="absolute bottom-15 left-0 w-full">
        <button class="b-y b-dark w-full p-10px" @click="requestModal(RequestStatus.consultation)">
          Заказать звонок
        </button>

        <div class="flex justify-around px-10px">
          <ul class="flex">
            <a class="border-x b-dark p-3 justify-center items-center flex  hover:bg-red cursor-pointer transition" :href="socials.youtube">
              <NuxtIcon
                class="text-xl transition"
                name="socials/youtube"
              />
            </a>
            <a class="border-x b-dark p-3 justify-center items-center flex  hover:bg-red cursor-pointer transition" :href="socials.whatsapp">
              <NuxtIcon
                class="text-xl transition"
                name="socials/whatsapp"
              />
            </a>
            <a class="border-x b-dark p-3 justify-center items-center flex  hover:bg-red cursor-pointer transition" :href="socials.instagram">
              <NuxtIcon
                class="text-xl transition"
                name="socials/instagram"
              />
            </a>
            <a class="border-x b-dark p-3 justify-center items-center flex  hover:bg-red cursor-pointer transition" :href="socials.telegram">
              <NuxtIcon
                class="text-xl transition"
                name="socials/telegram"
              />
            </a>
          </ul>

          <span class="flex gap-2 b-r b-dark flex justify-center pr-2 items-center font-normal items-center cursor-pointer">
            <div><NuxtIcon class="w-8 h-8" name="phone" /></div>
            <a href="tel:8 (800) 234-23-50">8 800 234-23-50</a>
          </span>
        </div>
      </div>
    </section>
  </section>
</template>
