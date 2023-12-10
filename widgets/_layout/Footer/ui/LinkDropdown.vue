<script lang='ts' setup>
const isDropdownOpened = ref(false)
</script>

<template>
  <ul class="mt-4">
    <li class="mt-2">
      <div class="flex cursor-pointer hover:text-red gap-1" @click="isDropdownOpened = !isDropdownOpened">
        <slot name="title" />

        <NuxtIcon name="arrow-right-smooth" class="flex justify-center items-center transition" :class="{ 'rotate-270': isDropdownOpened, 'rotate-90': !isDropdownOpened }" />
      </div>

      <TransitionExpand>
        <div v-if="isDropdownOpened" class="flex flex-col">
          <slot name="links" />
        </div>
      </TransitionExpand>
    </li>
  </ul>
</template>
