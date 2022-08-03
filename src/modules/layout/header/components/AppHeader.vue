<template>
  <v-app-bar id="default-app-bar" color="background" flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="store.toggleDrawer" :icon="icon" />
    </template>

    <v-toolbar-title class="font-weight-light text-h5">{{ store.headerTitle }}</v-toolbar-title>

    <v-spacer />
    <v-switch v-model="isLight"></v-switch>

    <v-btn class="ml-2" to="/" :variant="variant">
      <v-icon icon="mdi-view-dashboard" size="large" />
    </v-btn>

    <NotificationsWidget :notifications="notifications" />
    <Account />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { useLayoutStore } from '../../store/layout';

const store = useLayoutStore()
const route = useRoute()
const theme = useTheme()

const variant = computed(() => { return route.path === '/' ? 'tonal' : 'text' })
const icon = computed(() => { return store.drawer ? 'mdi-format-list-bulleted' : 'mdi-dots-vertical' })

const isLight = ref(!theme.global.current.value.dark)

const notifications = [
  { text: '+1000', icon: 'mdi-arrow-up' },
  { text: '-500', icon: 'mdi-arrow-down' },
  { text: 'New friend', icon: 'mdi-account' },
]

const onChangeSwitch = (value: boolean) => {
  console.log('terer')
  theme.global.name.value = value ? 'lightTheme' : 'darkTheme'
}

watch(isLight, onChangeSwitch)
</script>

<style scoped>
</style>