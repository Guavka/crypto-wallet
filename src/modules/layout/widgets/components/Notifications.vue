<template>
  <v-menu transition="scale-transition">
    <template v-slot:activator="{ props }">
      <v-btn class="ma-2" v-bind="props">
        <v-badge color="error" :content="notifyArray.length" :max="5">
          <v-icon size="large">{{ notifyIcon }}</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list nav :items="notifyArray" />
  </v-menu>
</template>

<script setup lang="ts">
export interface Prop {
  notifications: string[],
  icon?: string
}
const props = defineProps<Prop>()
const notifyArray = computed(() => { return props.notifications || ['test1', 'test2'] })
const notifyIcon = computed(() => { return props.icon || 'mdi-bell' })
</script>

<style scoped>
</style>