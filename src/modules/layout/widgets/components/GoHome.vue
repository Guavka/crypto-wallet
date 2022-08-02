<template>
  <v-btn class="ml-2" min-width="0" text exact @click="emit('goHome')">
    <v-icon>mdi-view-dashboard</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: 'goHome'): void
}>()
</script>

<style scoped>
</style>