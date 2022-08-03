<template>
  <v-menu :transition="transition">
    <template v-slot:activator="{ props }">
      <v-btn class="ma-2" v-bind="props">
        <v-badge :color="badgeColor" :content="notifyArray.length" :max="maxValue">
          <v-icon :size="iconSize">{{ notifyIcon }}</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-list density="compact">
      <v-list-subheader>REPORTS</v-list-subheader>
      <v-list-item v-for="(item, i) in notifyArray" :key="i" :value="item">
        <template v-slot:prepend>
          <v-icon :icon="item.icon" :color="titleColor(item.text)">
          </v-icon>
        </template>
        <template v-slot:default>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">

export interface Prop {
  notifications: Record<string, string>[],
  icon?: string,
  transition?: string,
  badgeColor?: string,
  iconSize?: string,
  maxValue?: number,
}

const props = defineProps<Prop>()

const notifyIcon = computed(() => { return props.icon || 'mdi-bell' })
const transition = computed(() => { return props.transition || 'scale-transition' })
const badgeColor = computed(() => { return props.badgeColor || 'error' })
const iconSize = computed(() => { return props.iconSize || 'large' })
const maxValue = computed(() => { return props.maxValue || 5 })
const notifyArray = computed(() => {
  return props.notifications || [
    { text: '+1000', icon: 'mdi-arrow-up' }
  ]
})
const titleColor = (text) => {
  const res = Number.parseInt(text)
  let color = 'info'
  if (res) {
    if (res > 0)
      color = 'success'
    else
      color = 'error'
  }
  return color
}
</script>

<style scoped>
</style>