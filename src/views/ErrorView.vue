
<template>
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <div class="max-w-md text-center p-6 bg-white shadow-lg rounded-lg ">
      <div class="text-white mx-auto text-2xl mb-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-500">
        <FontAwesomeIcon :icon="faExclamation" />
      </div>
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Oops! Página no encontrada</h1>
      <p class="text-gray-600 mb-6">Parece que la página que buscas no existe o se ha movido.</p>
      <BaseButton @click="goToHome" color="danger">Volver al inicio</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const router = useRouter()

const goToHome= ()=> {
  router.push('/')
}
</script>
<style></style>
