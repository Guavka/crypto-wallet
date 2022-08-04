<script setup lang="ts">
import { useMeta } from 'vue-meta'
import { useStorage } from 'vue3-storage';
import { useTheme } from 'vuetify/lib/framework.mjs';
useMeta({
  title: 'Crypto wallet',
  htmlAttrs: { lang: 'en', amp: true },
})

const localStorage = useStorage()
const theme = useTheme()

const themeName = localStorage.getStorageSync('theme')
if (!themeName) {
  localStorage.setStorageSync('theme', theme.global.name)
}
else {
  theme.global.name.value = themeName
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
