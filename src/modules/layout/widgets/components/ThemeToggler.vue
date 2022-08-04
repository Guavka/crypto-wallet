<template>
  <v-switch v-model="isLight" :true-icon="lightIconComp" :false-icon="darkIconComp" :density="densityComp"
    :hide-details="hideDetailsComp" :inset="insetComp" style="max-width:max-content" />
</template>

<script setup lang="ts">
import { useStorage } from 'vue3-storage';
import { useTheme } from 'vuetify/lib/framework.mjs';

export interface ThemeTogglerProp {
  lightIcon?: string,
  darkIcon?: string,
  density?: 'compact' | 'default' | 'comfortable',
  hideDetails?: boolean,
  inset?: boolean,
  lightThemeName?: string,
  darkThemeName?: string,
}
const props = defineProps<ThemeTogglerProp>()

const lightIconComp = computed(() => { return props.lightIcon || 'mdi-weather-sunny' })
const darkIconComp = computed(() => { return props.darkIcon || 'mdi-weather-night' })
const densityComp = computed(() => { return props.density || 'default' })
const hideDetailsComp = computed(() => { return props.hideDetails || true })
const insetComp = computed(() => { return props.inset || true })
const lightThemeNameComp = computed(() => { return props.lightThemeName || 'light' })
const darkThemeNameComp = computed(() => { return props.darkThemeName || 'dark' })

const theme = useTheme()
const isLight = ref(!theme.global.current.value.dark)

watch(isLight, (value: boolean) => {
  theme.global.name.value = value ? lightThemeNameComp.value : darkThemeNameComp.value

  const localStorage = useStorage()
  localStorage.setStorageSync('theme', theme.global.name.value)
})
</script>

<style scoped lang="scss">
</style>