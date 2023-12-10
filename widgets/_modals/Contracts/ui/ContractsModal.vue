<script lang='ts' setup>
import { useContactsModal } from '../model'

const { isModalOpened } = useContactsModal()

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <Modal class="backdrop-blur-lg" @click.self="isModalOpened = false">
    <div class="flex flex-col gap-15">
      <p class="text-center text-3xl md:text-5xl font-bold">
        Скачать договор
      </p>

      <TransitionSlide appear :offset="[-50, 16]">
        <a
          class="flex items-center md:text-3xl gap-4 pl-10 bg-dark bg-opacity-30 backdrop-blur-md justify-between rounded-full md:text-2xl font-bold "
          href="pdf/Договор_Sunrise_Auto_Япония_Несанкционные.docx"
          download
        >

          Япония
          <button
            class="flex justify-center items-center gap-2 md:w-70 bg-red hover:bg-dark_red transition  p6 rounded-full"
          >
            <NuxtIcon name="download" class="relative top-1" />
            <span class="hidden md:block">Скачать</span>
          </button>
        </a>
      </TransitionSlide>
      <TransitionSlide appear :delay="50" :offset="[-60, 16]">
        <a

          href="pdf/Договор_Sunrise_Auto_Япония_Санкционные.docx"
          download
          class="flex items-center md:text-3xl gap-4 pl-10 bg-dark bg-opacity-30 backdrop-blur-md justify-between rounded-full md:text-2xl font-bold "
        >

          Япония санкционное авто
          <button class="flex justify-center items-center gap-2 md:w-70 bg-red hover:bg-dark_red transition  p6 rounded-full">
            <NuxtIcon name="download" class="relative top-1" />
            <span class="hidden md:block">Скачать</span>
          </button>
        </a>
      </TransitionSlide>
      <TransitionSlide appear :delay="50" :offset="[-60, 16]">
        <a
          href="pdf/Договор Sunrise-Auto Южная Корея.docx"
          download
          class="flex items-center md:text-3xl gap-4 pl-10 bg-dark bg-opacity-30 backdrop-blur-md justify-between rounded-full md:text-2xl font-bold "
        >
          Южная Корея
          <button class="flex justify-center items-center gap-2 md:w-70 bg-red hover:bg-dark_red transition  p6 rounded-full">
            <NuxtIcon name="download" class="relative top-1" />
            <span class="hidden md:block">Скачать</span>
          </button>
        </a>
      </TransitionSlide>
      <TransitionSlide appear :delay="50" :offset="[-60, 16]">
        <a
          href="pdf/Договор Sunrise-Auto КНР.docx"
          download
          class="flex items-center md:text-3xl gap-4 pl-10 bg-dark bg-opacity-30 backdrop-blur-md justify-between rounded-full md:text-2xl font-bold "
        >
          КНР
          <button class="flex justify-center items-center gap-2 md:w-70 bg-red hover:bg-dark_red transition  p6 rounded-full">
            <NuxtIcon name="download" class="relative top-1" />
            <span class="hidden md:block">Скачать</span>
          </button>
        </a>
      </TransitionSlide>
    </div>
  </Modal>
</template>
