<template>
    <h4 class="text-2xl font-semibold px-4 pt-6 text-content">
        Factura de venta: {{ invoice.numberTemplate.fullNumber }}
    </h4> 
    <div class="flex-1 flex flex-col h-full px-4 overflow-x-auto md:items-center">
        <div class="px-4 py-16 min-w-[780px] max-w-[780px] bg-bkgInvoice rounded-lg flex flex-col">
            <div class="flex place-content-end">
                <p class="text-lg">No. {{ invoice.numberTemplate.fullNumber }}</p>
            </div>
            <div class="flex flex-col gap-2 mt-[40px]">
                <div class="flex justify-between border-b-2 border-gray-500">
                    <p class="text-lg flex gap-6">
                        <span class="w-[80px]">
                            Cliente
                        </span>
                        <span class="font-semibold"> {{ invoice.client.name }}</span>
                    </p>

                    <p class="text-lg flex justify-between w-[240px]">
                        <span >
                            Creación
                        </span>
                        <span class="font-semibold"> {{ invoice.date }}</span>
                    </p>
                </div>
                <div class="flex justify-between border-b-2 border-gray-500">
                    <p class="text-lg flex gap-6">
                        <span class="w-[80px]">
                            {{ invoice.client.identificationObject.type }}
                        </span>
                        <span class="font-semibold"> {{ invoice.client.identificationObject.number }}</span>
                    </p>

                    <p class="text-lg flex gap-6 justify-between w-[240px]">
                        <span>
                            Vencimiento
                        </span>
                        <span class="font-semibold"> {{ invoice.dueDate }}</span>
                    </p>
                </div>
                <div class="flex justify-between border-b-2 border-gray-500">
                    <p class="text-lg flex gap-6">
                        <span class="w-[80px]">
                            Vendedor
                        </span>
                        <span class="font-semibold"> {{ invoice.seller.name }}</span>
                    </p>

                    <p class="text-lg flex gap-6 justify-between w-[240px]">
                        <span >
                            Vendedor Id
                        </span>
                        <span class="font-semibold"> {{ invoice.seller.identification }}</span>
                    </p>
                </div>
            </div>

            <table class="my-16">
                <thead>
                    <tr class="border-b-2 border-gray-500 bg-slate-300">
                        <th class="text-left">Item</th>
                        <th class="text-right">Precio</th>
                        <th class="text-right">Descuento</th>
                        <th class="text-right">Cantidad</th>
                        <th class="text-right">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in invoice.items" :key="item.id"
                        class="border-b-4 border-gray-300">
                        <td class="text-left">{{ item.name }}</td>
                        <td class="text-right"> S/. {{ item.price }}</td>
                        <td class="text-right">{{ item.discount }} %</td>
                        <td class="text-right">{{ item.quantity }}</td>
                        <td class="text-right"> S/. {{ item.total }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="flex justify-end">
                <div class="flex flex-col gap-2">
                    <div class="flex justify-between w-[200px]">
                        <p class="text-md font-semibold">Importe de venta</p>
                        <p>
                            S/. {{ invoice.balance }}
                        </p>
                    </div>
                    <div class="flex justify-between w-[200px] border-b-4 border-gray-300">
                        <p class="text-md font-semibold">Op.inafecta</p>
                        <p>
                            S/. {{ invoice.totalPaid }}
                        </p>
                    </div>
                    <div class="flex justify-between w-[200px] text-xl font-semibold">
                        <p>Total</p>
                        <p>
                            S/. {{ invoice.total }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {Invoice} from '../types';

defineProps<{
    invoice:Invoice
}>();
</script>
