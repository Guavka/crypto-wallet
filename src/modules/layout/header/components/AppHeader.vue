<template>
  <v-app-bar id="default-app-bar" color="background" height="70">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="store.toggleDrawer" />
    </template>

    <v-toolbar-title class="font-weight-light text-h5">{{ store.headerTitle }}</v-toolbar-title>

    <v-spacer />
    <GoHome @go-home="router.push('/')" />
    <Notifications />
    <Account />
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useLayoutStore } from '../../store/layout';

const store = useLayoutStore()
const router = useRouter()

</script>

<style scoped>
</style>