<script lang="ts" setup>
defineProps<{
  strings: string[]
}>()
</script>

<template>
  <section class="flex justify-between b-y b-dark gap-7 overflow-auto min-w-70">
    <div
      v-for="string in strings"
      :key="string"
      class="b-l b-dark basis-1/4 py-5 pb-20 text-[14px] min-w-60   lg:text-[20px] font-bold first:b-none p-4"
    >
      {{ string }}
    </div>
  </section>
</template>
