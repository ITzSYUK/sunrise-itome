<script lang="ts" setup>
defineProps<{
  title: string
  advantages: { title: string; description: string }[]
}>()
</script>

<template>
  <section>
    <SectionHeader class="mb-15">
      <template #title>
        {{ title }}
      </template>
    </SectionHeader>

    <div class="lg:flex container  gap-5">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="b p-7  pb-20">
          <p class="text-2xl font-bold mb-4">
            {{ advantages[0].title }}
          </p>

          <span class="text-gray">{{ advantages[0].description }}</span>
        </div>
        <div class="b p-7   pb-20">
          <p class="text-2xl font-bold mb-4">
            {{ advantages[1].title }}
          </p>

          <span class="text-gray">{{ advantages[1].description }}</span>
        </div>

        <div
          class="w-full grid md:col-span-2 lg:col-span-1 gap-5"
        >
          <div class="b p-7 pb-20">
            <p class="text-2xl font-bold mb-4">
              {{ advantages[2].title }}
            </p>

            <span class="text-gray">{{ advantages[2].description }}</span>
          </div>

          <div class="b p-7 pb-20">
            <p class="text-2xl font-bold mb-4">
              {{ advantages[3].title }}
            </p>

            <span class="text-gray">{{ advantages[3].description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
