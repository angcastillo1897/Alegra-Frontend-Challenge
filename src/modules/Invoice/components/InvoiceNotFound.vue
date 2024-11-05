<template>
    <div class="py-6 flex flex-col items-center justify-center h-full flex-1  text-gray-700">
        <div class="max-w-md text-center p-6 bg-white shadow-lg rounded-lg">
            <div class="text-white mx-auto text-2xl mb-4 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500">
                <FontAwesomeIcon :icon="faExclamation" />
            </div>
            <h1 class="text-2xl font-bold text-gray-800 mb-2">Recurso no encontrado</h1>
            <p class="text-gray-600 mb-6">La factura no se encuentra registrada en Alegra.</p>
            <BaseButton @click="goBack" color="not_found">Regresar</BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { useRouter} from 'vue-router';
const router = useRouter();

const goBack = () => {
    router.back();
}
</script>