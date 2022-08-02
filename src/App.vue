<script setup lang="ts">
import { useMeta } from 'vue-meta'
useMeta({
  title: 'Crypto wallet',
  htmlAttrs: { lang: 'en', amp: true },
})
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
