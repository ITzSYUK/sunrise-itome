<script lang='ts' setup>
import { ConsultationFormSplit } from '~/features/ConsultationForm'

const { closeModal, modalTitle } = useRequestModal()

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <Modal @click.self="closeModal">
    <div class="bg-black text-white border border-gray md:w-616px md:h-470px p7 m-2">
      <div class="flex justify-between">
        <p class="text-28px md:text-32px font-bold ">
          {{ modalTitle }}
        </p>

        <button
          title="Закрыть окно"
          @click="closeModal"
        >
          <NuxtIcon
            class="w-8 h-8 text-lg hover:text-red transition  cursor-pointer"
            name="cancel"
          />
        </button>
      </div>
      <p class="leading-22px">
        Укажите ваш телефон, и мы свяжемся с вами, чтобы рассчитать стоимость и обсудить варианты покупки авто.
      </p>

      <ConsultationFormSplit class="mt-7" />
    </div>
  </Modal>
</template>
