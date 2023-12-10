<script lang="ts" setup>
import socials from '~/shared/socials'
import { CatalogHeader } from '~/widgets/_catalog/CatalogHeader'
import { AutoList } from '~/widgets/_catalog/_aviable-auto/AutoList/ui'

useHead({
  title: 'Авто в наличии во Владивостоке',
})

const { pb } = useAPI()

const currentPage = ref(1)

onMounted(() => {
  const { page } = useRoute().query
  const router = useRouter()

  if (page)
    currentPage.value = Number(page)

  else
    currentPage.value = 1

  router.replace({ query: { page: currentPage.value } })
})

const { data, pending } = await useAsyncData<IAuto[]>(`avaiableList`, () => {
  return pb.collection('avaiable').getList(currentPage.value, 12)
}, {
  watch: [currentPage],
})

watch(() => currentPage.value, () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <CatalogHeader
    image-src="/images/supra.webp"
    form-title="Нужен авто в отличном состоянии?"
  >
    <template #title>
      Подержанные и новые <br> автомобили в наличии <br> во Владивостоке
    </template>

    <template #description>
      С 2016 года мы привезли 1000+ авто из Японии, Кореи и Китая
    </template>

    <template #button-group>
      <div class="md:flex gap-2 py-10 px-4 md:px-0 font-bold">
        <a class="btn-red-filled px-15 w-full my2 md:w-80 flex justify-center items-center" :href="socials.whatsapp">
          Написать в WhatsApp
        </a>
      </div>
    </template>

    <template #footer>
      <section class="flex justify-between b-y b-dark overflow-auto">
        <article class="b-dark pt-4 pb-15 px-3 min-w-70">
          <NuxtIcon name="stars" class="text-red text-3xl" />
          <p class="text-14px lg:text-20px font-bold pt-2">
            Самые популярные модели
          </p>
        </article>
        <article class="b-l b-dark pt-4 pb-15 px-3 min-w-70">
          <NuxtIcon name="wallet" class="text-red text-3xl" />
          <p class="text-14px lg:text-20px font-bold pt-2">
            Под любой запрос и бюджет
          </p>
        </article>
        <article class="b-l b-dark pt-4 pb-15 px-3 min-w-70">
          <NuxtIcon name="eye" class="text-red text-3xl" />
          <p class="text-14px lg:text-20px font-bold pt-2">
            Личный осмотр
          </p>
        </article>
        <article class="b-l b-dark pt-4 pb-15 px-3 min-w-70">
          <NuxtIcon name="map_point" class="text-red text-3xl" />
          <p class="text-14px lg:text-20px font-bold pt-2">
            Быстрая доставка во все города РФ
          </p>
        </article>
      </section>
    </template>
  </CatalogHeader>

  <AutoList class="mt-50" :cars="data?.items" />

  <Pagination v-if="data?.totalPages > 1" :pages="data?.totalPages" :current-page="1" @next="currentPage++" @past="currentPage--" />
</template>
