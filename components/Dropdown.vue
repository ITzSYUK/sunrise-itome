<script lang="ts" setup>
defineProps<{
  isDropOpened: boolean
}>()

const emit = defineEmits(['close', 'open'])
</script>

<template>
  <div v-click-outside="() => (emit('close'))" class="relative" @click="$emit('open')">
    <slot name="wrap" />

    <TransitionExpand>
      <div
        v-if="isDropOpened"
        class="absolute top-8 bg-black p-4 text-nowrap rounded-xl b flex flex-col z-10 -left-5"
      >
        <slot name="drop" />
      </div>
    </TransitionExpand>
  </div>
</template>
