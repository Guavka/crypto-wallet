<template>
  <v-btn :to="pathComp" :variant="variantComp">
    <v-icon :icon="iconComp" :size="sizeComp" />
  </v-btn>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

export interface GoHomeProp {
  path?: string,
  variantActive?: "tonal" | "text" | "flat" | "elevated" | "outlined" | "plain",
  variantDisactive?: "tonal" | "text" | "flat" | "elevated" | "outlined" | "plain",
  icon?: string,
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
}

const props = defineProps<GoHomeProp>()

const route = useRoute()

const iconComp = computed(() => { return props.icon || 'mdi-view-dashboard' })
const pathComp = computed(() => { return props.path || '/' })
const vActiveComp = computed(() => { return props.variantActive || 'tonal' })
const vDisactiveComp = computed(() => { return props.variantDisactive || 'text' })
const variantComp = computed(() => { return route.path === pathComp.value ? vActiveComp.value : vDisactiveComp.value })
const sizeComp = computed(() => { return props.size || 'large' })
</script>

<style scoped>
</style>