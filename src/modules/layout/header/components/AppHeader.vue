<template>
  <v-app-bar id="default-app-bar" color="background" flat>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="store.toggleDrawer" :icon="icon" />
    </template>

    <v-toolbar-title class="font-weight-light text-h5">{{ store.headerTitle }}</v-toolbar-title>

    <v-spacer />
    <v-btn class="ml-2" to="/" :variant="variant">
      <v-icon icon="mdi-view-dashboard" size="large" />
    </v-btn>

    <Notifications :notifications="notifications" />
    <Account />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useLayoutStore } from '../../store/layout';

const store = useLayoutStore()
const route = useRoute()

const variant = computed(() => { return route.path === '/' ? 'tonal' : 'text' })
const icon = computed(() => { return store.drawer ? 'mdi-format-list-bulleted' : 'mdi-dots-vertical' })

const notifications = [
  'Mike John Responded to your email',
  'You have 5 new tasks',
  'You\'re now friends with Andrew',
  'Another Notification',
  'Another one',
]
</script>

<style scoped>
</style>