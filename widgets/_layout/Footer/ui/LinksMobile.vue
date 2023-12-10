<script lang="ts" setup>
import available from '../config/aviableLinks'
import LinkDropdown from './LinkDropdown.vue'

const linksInDrop = [
  { title: 'Полная пошлина', src: '/catalog/japan/full-duty' },
  {
    title: 'Конструкторы',
    src: '/catalog/japan/constructor',
  },
  {
    title: 'Битые авто',
    src: '/catalog/japan/broken-auto',
  },
]
</script>

<template>
  <section
    class="md:grid grid-cols-3 lg:flex gap-20 px-4 lg:px-10 lg:basis-3/4 py-10"
  >
    <template v-for="link in available" :key="link.title">
      <div>
        <template v-for="sublink in link.sublinks" :key="sublink.title">
          <template v-if="sublink.title === 'Авто из Японии'">
            <LinkDropdown :title="sublink.title" :sublinks="linksInDrop" />
          </template>

          <template v-else>
            <ul class="mt-4">
              <NuxtLink class="text-gray mt-2" :to="sublink.src">
                {{ sublink.title }}
              </NuxtLink>
            </ul>
          </template>
        </template>
      </div>
    </template>
  </section>
</template>
