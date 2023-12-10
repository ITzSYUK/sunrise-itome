<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import { ArticleSlide } from '~/entities/Article'
import type { IArticle } from '~/shared/types'

defineProps<{
  title?: string
}>()

const { pb } = useAPI()

const { data } = await useAsyncData<IArticle[]>('readMore', () => {
  return pb.collection('articles').getFullList(10)
})
</script>

<template>
  <section class="container">
    <h2 class="text-4xl font-bold text-center">
      {{ title ?? "Новости и статьи" }}
    </h2>

    <ListWithPagination
      class="mt-15"
      link-title="Смотреть больше"
      link-href="/news"
    >
      <SwiperSlide v-for="article in data" :key="article.id">
        <ArticleSlide :article="article" />
      </SwiperSlide>
    </ListWithPagination>
  </section>
</template>
