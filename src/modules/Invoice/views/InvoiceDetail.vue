<template>
    <main v-if="!loadingInvoice" class="h-full w-full flex-1 flex flex-col gap-6 max-w-screen-xl md:mx-auto">
        <InvoiceTemplate v-if="currentInvoice" :invoice="currentInvoice" />
        
        <InvoiceNotFound v-else />
    </main>
    
    <LoadingSpinner  v-else class="flex-1 justify-center" message="Cargando factura..." />
    
</template>

<script setup lang="ts">
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import InvoiceNotFound from '../components/InvoiceNotFound.vue';
import {useInvoiceDetail} from '../composables/useInvoiceDetail';
import InvoiceTemplate from '../components/InvoiceTemplate.vue';

const { loadingInvoice, currentInvoice } = useInvoiceDetail();

</script>