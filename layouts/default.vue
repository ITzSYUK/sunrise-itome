<script lang="ts" setup>
import { FooterVue } from '~/widgets/_layout/Footer'
import { HeaderVue } from '~/widgets/_layout/Header'
import { ContractsModal, useContactsModal } from '~/widgets/_modals/Contracts'
import { MobileLinksModal, useMobileModal } from '~/widgets/_modals/MobileLinks'
import { SendRequestModal } from '~/widgets/_modals/SendRequest'

const { isMobileModalOpened } = useMobileModal()
const { isModalOpened } = useRequestModal()
const { isModalOpened: isContractsModalOpened } = useContactsModal()

await prefetchComponents('Preloader')

const isPreloaderVisible = ref(true)
</script>

<template>
  <Head>
    <Link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
    <Link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
    <Link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
    <Link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
    <Link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
    <Link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
    <Link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
    <Link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
    <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
    <Link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <Link rel="manifest" href="/favicon/manifest.json" />
    <Meta name="msapplication-TileColor" content="#ffffff" />
    <Meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
    <Meta name="theme-color" content="#ffffff" />
  </Head>

  <HeaderVue />

  <NuxtLoadingIndicator color="red" />

  <TransitionExpand axis="x" no-opacity>
    <MobileLinksModal v-if="isMobileModalOpened" />
  </TransitionExpand>

  <TransitionFade :duration="400">
    <ContractsModal v-if="isContractsModalOpened" />
  </TransitionFade>

  <TransitionExpand>
    <SendRequestModal v-if="isModalOpened" />
  </TransitionExpand>

  <main class="mb-40">
    <TransitionSlide>
      <Preloader v-if="isPreloaderVisible" @close="isPreloaderVisible = false" />
    </TransitionSlide>

    <slot />
  </main>

  <FooterVue />
</template>
