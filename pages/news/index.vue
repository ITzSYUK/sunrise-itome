<script lang="ts" setup>
import { ArticleBlock } from '~/entities/Article'
import type { IArticle } from '~/shared/types'

useHead({
  title: 'Новости и статьи',
})

const { pb } = useAPI()

const { data } = await useAsyncData<IArticle[]>('articles', () => {
  return pb.collection('articles').getFullList(10)
})
</script>

<template>
  <section class="container">
    <SectionHeader class="my-10">
      <template #title>
        Новости и статьи
      </template>
    </SectionHeader>

    <ArticleBlock v-for="article in data" :key="article.id" :article="article" class="my-4" />
  </section>
</template>
