<template>
  <div>
    <h2 class="text-[26px] md:text-[30px] lg:text-[40px] font-bold text-center">
      <slot name="title" />
    </h2>
    <p class="text-center text-gray mt-4 text-[14px] md:text-[16px]">
      <slot name="content" />
    </p>
  </div>
</template>
