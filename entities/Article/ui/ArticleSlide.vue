<script lang='ts' setup>
import type { IArticle } from '~/shared/types'

defineProps<{
  article: IArticle
}>()

const isHovered = ref(false)
</script>

<template>
  <article class="b p-7">
    <p>{{ toDate(article.created) }}</p>

    <h2 class="font-bold text-2xl my-2 line-clamp-1">
      {{ article.title }}
    </h2>

    <div class="text-gray line-clamp-3" v-html="article.content" />

    <NuxtLink class="flex justify-between items-center mt-18 cursor-pointer" :to="`/news/${article.id}`" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <p>Читать полностью</p>
      <div class="">
        <NuxtIcon name="arrow-right" />
      </div>
    </NuxtLink>
    <div class="bg-red h-0.5 w-full scale-0 transform  duration-300 origin-l" :class="{ 'scale-100': isHovered }" />
  </article>
</template>
