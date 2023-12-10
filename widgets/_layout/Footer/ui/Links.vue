<script lang="ts" setup>
import LinkDropdown from './LinkDropdown.vue'
import { useContactsModal } from '~/widgets/_modals/Contracts'

const { isModalOpened } = useContactsModal()
</script>

<template>
  <section
    class="md:grid grid-cols-3 lg:flex lg:b-l b-dark gap-20 px-4 lg:px-10 lg:basis-3/4 py-10 text-nowrap"
  >
    <div>
      <p class="font-bold text-xl my-10 md:my-0 text-nowrap">
        Услуги
      </p>

      <ul>
        <li class="hidden md:block text-gray">
          <LinkDropdown>
            <template #title>
              Авто из Японии
            </template>

            <template #links>
              <NuxtLink class="text-gray hover:text-red transition mt-2" to="/catalog/japan/full-duty">
                Полная пошлина
              </NuxtLink>
              <NuxtLink class="text-gray hover:text-red transition mt-2" to="/catalog/japan/constructor">
                Конструкторы
              </NuxtLink>
              <NuxtLink class="text-gray hover:text-red transition mt-2" to="/catalog/japan/broken-auto">
                Битые авто
              </NuxtLink>
            </template>
          </LinkDropdown>
        </li>

        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/catalog/korea">
            Авто из Кореи
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/catalog/china">
            Авто из Китая
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/catalog/motorcycle">
            Мотоциклы
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/catalog/available">
            Авто в наличии
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="md:hidden">
      <p class="font-bold text-xl my-10 md:my-0 text-nowrap">
        Авто из Японии
      </p>

      <ul>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/catalog/japan/full-duty">
            Полная пошлина
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/catalog/japan/constructor">
            Конструкторы
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="#">
            Онлайн аукционы
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/catalog/japan/broken-auto">
            Битые авто
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <p class="font-bold text-xl my-10 md:my-0 text-nowrap">
        Для клиентов
      </p>

      <ul>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/buy-steps">
            Как заказать
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/news">
            Новости и статьи
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/faq">
            FAQ
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition" @click="isModalOpened = true">
          <NuxtLink to="#">
            Скачать договор
          </NuxtLink>
        </li>

        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/delivery">
            Доставка по России
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <p class="font-bold text-xl my-10 md:my-0 text-nowrap">
        Компания
      </p>

      <ul>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/about">
            О компании
          </NuxtLink>
        </li>
        <li class="mt-3 hover:text-red text-gray transition">
          <NuxtLink to="/contacts">
            Контакты
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
