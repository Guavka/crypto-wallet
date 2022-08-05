<template>
  <v-select :items="items" variant="solo" @update:model-value="onUpdate"></v-select>
</template>

<script setup lang="ts">
import { LanguageType } from "@plugins/i18n/localizationTypes";
import { useStorage } from 'vue3-storage';
import { useI18n } from 'vue-i18n';

const items = Object.keys(LanguageType)
const { locale } = useI18n({ useScope: 'global' })

const onUpdate = (value: string) => {
  value = value.toLowerCase()
  locale.value = value

  const localStorage = useStorage()
  localStorage.setStorageSync('locale', value)
}
</script>

<style scoped>
</style>