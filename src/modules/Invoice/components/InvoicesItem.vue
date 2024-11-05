<template>

    <div class="flex flex-col gap-2 bg-white rounded-lg p-4 border-2 border-teal-500 shadow-md md:w-full md:flex-1 md:min-w-[400px]">
        <div class="flex justify-between">
            <h4 class="text-lg font-semibold">Factura: {{ invoice.id }}</h4>
            <p class="text-md text-gray-500">{{ invoice.date }}</p>
        </div>
        <div class="flex justify-between">
            <p class="text-lg font-semibold">
                Vendedor: 
                {{ invoice.seller.name }}
            </p>
            <p class="text-lg font-semibold">
                Total: S/.{{ invoice.total }}
            </p>
        </div>
        <BaseButton class="mt-4" type="button" @click="goToInvoiceDetail(invoice.id)">
            <p>Ir a detalle</p>
        </BaseButton>   
    </div>

</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import type { Invoice} from '../types';
import { useRouter } from 'vue-router';

const router = useRouter()

const { invoice } = defineProps<{ 
    invoice: Invoice;
}>();

const goToInvoiceDetail = (invoiceId: number) => {
    router.push(`/invoice/${invoiceId}`)
}

</script>