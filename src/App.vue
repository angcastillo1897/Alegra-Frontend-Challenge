
<template>
  <template v-if="!initializedSellers">
    <div class="w-screen h-screen flex justify-center items-center bg-gray-300">
      <LoadingSpinner />
    </div>
  </template>
  <template v-else>
    <RouterView v-slot="{ Component }">
      <transition name="page-opacity" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </template>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useImagesRaceStore } from './modules/ImagesRace/ImagesRace.store';
import LoadingSpinner from './components/common/LoadingSpinner.vue';

const {initializedSellers} = storeToRefs(useImagesRaceStore());
</script>

<style scoped>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 600ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
