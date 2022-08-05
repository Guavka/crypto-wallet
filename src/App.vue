<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useMeta } from 'vue-meta'
import { useStorage } from 'vue3-storage';
import { useTheme } from 'vuetify/lib/framework.mjs';

useMeta({
  title: 'Crypto wallet',
  htmlAttrs: { lang: 'en', amp: true },
})

const localStorage = useStorage()
const theme = useTheme()
const { locale } = useI18n({ useScope: 'global' })

const themeName = localStorage.getStorageSync('theme')
if (!themeName) {
  localStorage.setStorageSync('theme', theme.global.name)
}
else {
  theme.global.name.value = themeName
}

const localeName = localStorage.getStorageSync('locale')
if (!localeName) {
  localStorage.setStorageSync('locale', locale.value)
}
else {
  locale.value = localeName
}

</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | Dashboard` : `Dashboard` }}</template>
  </metainfo>
  <DefaultLayout />
</template>

<style scoped lang="scss">
.content-wrap {
  height: 90%;
}
</style>
