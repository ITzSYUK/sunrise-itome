<script lang='ts' setup>
import type { IVideo } from '~/shared/types'

const { pb } = useAPI()

const { data } = await useAsyncData<IVideo[]>('videos', () => {
  return pb.collection('videos').getFullList()
}) as any

const { data: subsriberCount } = await useAsyncData('subscribers', async () => {
  const response = await $fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCkKe4ocke0PXR2tQXJmj7AA&key=AIzaSyAQSpIwWh0Nk9Psd_hFMi9W7yNuxXKpeww`)

  return response.items[0].statistics.subscriberCount
})

function formatSubscribers(subscribers: number): string {
  return (subscribers / 1000).toFixed(2)
}

function youtubeURLtoEmbed(url: string) {
  const videoID = url.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  )

  return `https://www.youtube.com/embed/${videoID}`
}
</script>

<template>
  <section class="container">
    <div class="text-center">
      <SectionHeader>
        <template #title>
          Честные обзоры на Youtube
        </template>

        <template #content>
          Проводим тест-драйв привезённых авто, даём объективую оценку новым
          автомобилям
        </template>
      </SectionHeader>
    </div>

    <div class="lg:flex gap-5 mt-15 font-bold">
      <div>
        <div class="">
          <iframe
            title="youtube video"
            loading="lazy"
            :src="youtubeURLtoEmbed(data[0].link)"
            class="w-full h[360px]"
          />

          <p class="my-4 line-clamp-1 md:line-clamp-none ">
            {{ data[0].title }}
          </p>
        </div>

        <div class="lg:flex gap-2">
          <div class="basis-1/2">
            <iframe
              loading="lazy"
              title="youtube video"
              :src="youtubeURLtoEmbed(data[1].link)"
              class="w-full h-100 lg:h-48"
            />

            <p class="my-4 line-clamp-1 md:line-clamp-none ">
              {{ data[1].title }}
            </p>
          </div>

          <div class="basis-1/2">
            <iframe
              loading="lazy"
              title="youtube video"
              :src="youtubeURLtoEmbed(data[2].link)"
              class="w-full h-100 lg:h-48"
            />

            <p class="my-4 line-clamp-1 md:line-clamp-none ">
              {{ data[2].title }}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div class="lg:flex gap-2">
          <div class="basis-1/2">
            <iframe
              loading="lazy"
              title="youtube video"
              :src="youtubeURLtoEmbed(data[3].link)"
              class="w-full h-100 lg:h-48"
            />

            <p class="my-4 line-clamp-1 md:line-clamp-none ">
              {{ data[3].title }}
            </p>
          </div>

          <div class="basis-1/2">
            <iframe
              loading="lazy"
              title="youtube video"
              :src="youtubeURLtoEmbed(data[4].link)"
              class="w-full h-100 lg:h-48"
            />

            <p class="my-4 line-clamp-1 md:line-clamp-none ">
              {{ data[4].title }}
            </p>
          </div>
        </div>

        <div class="p-7 font-normal b relative overflow-hidden">
          <div>
            <h2 class="text-[24px] md:text-[30px] lg:text-[40px] font-bold">
              Следим за контентом
            </h2>

            <p class="text-[16px] md:text-[18px] lg:text-[20px]">
              С нами уже <span class="font-bold">{{ formatSubscribers(subsriberCount) }} тыс. подписчиков</span>
            </p>

            <p class="mt-4 relative top-35 text-[14px] md:text-[16px]">
              Подпишись, чтобы не пропустить обзоры на автомобили, которые тебя
              интересуют
            </p>
          </div>

          <NuxtImg
            src="/images/s.webp"
            class="absolute right-0 w-full bottom-10 h-70 -z-10"
            alt="Контент на Youtube"
          />

          <a
            class="flex btn-red-filled text-white w-full mt-40 p-4 flex justify-center items-center text-xl gap-5"
            href="https://www.youtube.com/@sunriseauto/featured"
            target="_blank"
          >
            <span class="font-bold">Перейти на канал <span class="hidden md:inline">SUNRISE Auto</span></span>

            <NuxtIcon name="socials/youtube" class="relative top-1 text-3xl" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
