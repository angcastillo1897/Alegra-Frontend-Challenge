<template>
    <div class="h-full flex flex-1 flex-col gap-6 justify-center items-center">
        <p class="text-2xl font-semibold">Vendedor ganador: </p>
        <p class="text-2xl font-semibold">{{sellerSelected?.name}}</p>
        <LoadingSpinner message="Creando la factura..." />
    </div>
</template>

<script setup lang="ts">
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { useImagesRaceStore } from '../ImagesRace.store';

const { sellerSelected }  = useImagesRaceStore();

</script>

<style scoped>

</style>