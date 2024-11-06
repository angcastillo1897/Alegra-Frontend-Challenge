<template>
    <main class="py-6 px-4 h-full flex-1 flex flex-col gap-6 max-w-screen-xl md:mx-auto w-full">
        <template v-if="!loadingInvoices">
            <div v-if="invoicesList.length>0" class="flex flex-col gap-4">
                <p class="text-2xl font-semibold text-content">
                    Lista de facturas:
                </p>
                <InvoicesList :invoices="invoicesList" />
            </div>
            <div v-else>
                <p class="text-lg font-semibold text-content">No se encontraron facturas.</p>
            </div>
        </template>
        <template v-else>
            <LoadingSpinner class="flex-1 justify-center" message="Cargando facturas..." />
        </template>
    </main>
</template>

<script setup lang="ts">
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import InvoicesList from '../components/InvoicesList.vue';
import {useInvoiceCollection} from '../composables/useInvoiceCollection'

const {loadingInvoices, invoicesList} = useInvoiceCollection();

</script>

<style scoped></style>