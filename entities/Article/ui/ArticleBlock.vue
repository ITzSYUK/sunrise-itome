<script lang='ts' setup>
import type { IArticle } from '~/shared/types'

const props = defineProps<{
  article: IArticle
}>()

const image = computed(() => toImg(props.article, props.article.preview))

const date = computed(() => {
  const date = new Date(props.article.created)
  return `${date.toLocaleString('ru', { month: 'long', day: 'numeric' })}`
})
</script>

<template>
  <article class="flex flex-col flex-col-reverse md:flex-row w-full md:h-550px overflow-hidden">
    <div class="b w-full relative basis-1/3 md:min-w-130  pb-30 md:pb-0">
      <div class="p-7">
        <p class="text-gray mb-5">
          {{ date }}
        </p>

        <h2 class="text-20px lg:text-24px font-bold">
          {{ article.title }}
        </h2>

        <div class="mt-4 text-gray line-clamp-6" v-html="article.content" />
      </div>

      <div class="flex justify-center items-center absolute left-0 mb-4 bottom-0 w-full">
        <NuxtLink class="btn-red-filled w-[95%] gap-4 font-bold" :to="`/news/${article.id}`">
          Читать полностью
          <NuxtIcon name="arrow-right" />
        </NuxtLink>
      </div>
    </div>

    <div class="basis-2/3">
      <img :src="image" alt="" class="object-cover h-full w-full">
    </div>
  </article>
</template>
