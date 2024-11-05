<template>
    <div class="flex flex-col gap-4 flex-wrap md:flex-row justify-start">
        <template v-for="invoice in invoices" :key="invoice.id" >
            <InvoicesItem :invoice="invoice" />
        </template>
    </div>
</template>

<script setup lang="ts">
import type { Invoice } from '../types';
import InvoicesItem from './InvoicesItem.vue';

defineProps<{ 
    invoices: Array<Invoice>;
}>();
</script>