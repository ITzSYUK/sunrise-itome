<script lang='ts' setup>
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <div class="w-full h-full fixed top-0 left-0 flex justify-center items-center z-999">
    <slot />
  </div>
</template>
