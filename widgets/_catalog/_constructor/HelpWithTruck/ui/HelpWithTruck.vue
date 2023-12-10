<script lang="ts" setup>
</script>

<template>
  <section class="container">
    <SectionHeader>
      <template #title>
        Поможем привести грузовик в разбор
      </template>
    </SectionHeader>

    <div class="mt-15 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="b b-dark p-10 flex flex-col gap-5 text-gray">
        <p>
          На аукционах Японии огромный выбор грузовиков в любом исполнении
          шасси:
          <span class="text-white">самосвалы, рефрижераторы, манипуляторы и прочее</span>.
        </p>

        <p>
          Грузовик-конструктор заказывают для ремонта, восстановления или
          обновления уже имеющихся грузовиков.
        </p>

        <p>
          Вы можете поменять кабину, двигатель, коробки, рамы, борта и другие
          оригинальные конструкции.
        </p>

        <div class="text-white">
          <p class="text-xl font-bold">
            Какие документы вы получите:
          </p>

          <ul class="flex flex-col gap-2 mt-2">
            <li>- ГТД на двигатель</li>
            <li>- ГТД на кабину</li>
            <li>- ГТД на раму</li>
          </ul>
        </div>
      </div>

      <div class="w-full">
        <NuxtImg
          src="/images/broken_truck.webp"
          class="w-full h-full object-cover"
          alt="Изображение сломанного грузовика"
        />
      </div>
    </div>
  </section>
</template>
