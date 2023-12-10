<script lang="ts" setup>
import type { IArticle } from '~/shared/types'
import { NewsBlock } from '~/widgets/NewsBlock'

const router = useRouter()

const { id } = useRoute().params as unknown as string

const { pb } = useAPI()

const { data } = await useAsyncData(id, () => {
  return pb.collection('articles').getOne<IArticle>(id)
})

const image = computed(() => toImg(data.value, data.value?.preview))

const date = computed(() => {
  const date = new Date(data.value?.created)
  return `${date.toLocaleString('ru', { month: 'long', day: 'numeric' })}`
})

function navigateBack() {
  router.back()
}
</script>

<template>
  <section class="container relative">
    <NuxtLink
      class="btn-black-outline text-gray gap-4 mt-4 flex w-max cursor-pointer"
      @click="navigateBack"
    >
      <NuxtIcon name="arrow-left" />
      Назад
    </NuxtLink>

    <div class="mt-10">
      <h1 class="text-3xl font-bold text-center">
        {{ data?.title }}
      </h1>
    </div>

    <div class="h-150 mt-10">
      <img :src="image" class="object-cover h-full w-full">
    </div>

    <div class="mt-10 px-5">
      <span class="text-gray">{{ date }}</span>

      <div class="mt-10 justify-center flex md:px-100px lg:px-[100px]">
        <div class=" md:w-3/4 text-xl" v-html="data?.content" />
      </div>
    </div>
  </section>

  <NewsBlock class="mt-50" title="Читайте также" />
</template>
