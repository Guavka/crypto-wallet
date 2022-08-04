<template>
  <v-app-bar id="default-app-bar" color="background" flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="store.toggleDrawer" :icon="iconComp" />
    </template>

    <v-toolbar-title class="font-weight-light text-h5">{{ store.headerTitle }}</v-toolbar-title>
    <v-spacer />
    <ThemeToggler light-theme-name="lightTheme" dark-theme-name="darkTheme" />
    <GoPath class="ml-2" path="/" />
    <NotificationsWidget :notifications="notifications" />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useLayoutStore } from '../../store/layout';
import type { NotificationData } from '../../widgets/notification/types/notificationData'

const store = useLayoutStore()
const iconComp = computed(() => { return store.drawer ? 'mdi-format-list-bulleted' : 'mdi-dots-vertical' })

const notifications: NotificationData[] = [
  { text: '+1000', icon: 'mdi-arrow-up' },
  { text: '-500', icon: 'mdi-arrow-down' },
  { text: 'New friend', icon: 'mdi-account' },
]
</script>

<style scoped lang="scss">
.switch {
  max-width: 75px;
}
</style>