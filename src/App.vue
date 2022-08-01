<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const value = null
</script>

<template>
  <VApp>
    <VMain>
      <VContainer class="d-flex flex-column justify-center h-100 pa-0">
        <VContainer class="content-wrap pa-0">
          <VCard color="surface" class="rounded-xl w-100 h-100 ">
            <VContainer class="d-flex justify-around">
              <VImg>LOGO</VImg>
              <h2 class="title">Dashboard</h2>
              <VAutocomplete v-model="value" :items="items" dense filled label="Search"
                prepend-icon="mdi-account-search">
              </VAutocomplete>
              <VBadge color="error" dot>
                <VIcon icon="mdi-bell"></VIcon>
              </VBadge>
              <VAvatar large color="background">GVK</VAvatar>
              <VBtn flat>
                Ketty Peri
                <VIcon>mdi-chevron-down</VIcon>
              </VBtn>
            </VContainer>
          </VCard>
        </VContainer>
      </VContainer>
      <RouterView />
    </VMain>
  </VApp>
</template>

<style scoped lang="scss">
.content-wrap {
  height: 90%;
}
</style>
