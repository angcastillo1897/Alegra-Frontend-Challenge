<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <RouterView v-slot="{ Component }">
      <transition name="page-slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </MainLayout>
</template>

<style scoped>
.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translatey(60px);
}
</style>
