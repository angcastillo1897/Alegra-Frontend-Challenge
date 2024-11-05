<template>
    <div class="flex flex-col gap-2 items-center">
        <FontAwesomeIcon :icon="faSpinner" spin class="w-8 h-8" />
        <p class="text-xl">{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const { 
    message = 'Cargando...'
} = defineProps<{
    message?: string;
}>();

</script>

<style scoped>
</style>