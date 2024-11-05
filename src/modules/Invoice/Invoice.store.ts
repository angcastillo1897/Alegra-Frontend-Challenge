import { defineStore } from 'pinia';
import { ref } from 'vue';
import { generateInvoice, getInvoiceById, getInvoices } from '@/services/Invoice/invoiceService';
import type { Invoice, InvoiceRequestParams } from './types';

export const useInvoiceStore = defineStore('invoice', () => {
    /* state */
    const loadingCreationInvoice = ref(false);
    const invoicesList = ref<Array<Invoice>>([])
    const currentInvoice = ref<Invoice | null>(null);

    /* computed => getters */

    /* actions */
    const createInvoice = async (sellerId: number, quantity: number): Promise<number | undefined> => {
        try {
            loadingCreationInvoice.value = true;
            const payload: InvoiceRequestParams = {
                items: [{
                    id: 1,
                    name: "Imagen",
                    price: 10,
                    quantity: quantity,
                    total: 10 * quantity,
                    discount: 0
                }],
                date: new Date().toISOString().split('T')[0],
                dueDate: new Date().toISOString().split('T')[0],
                client: { id: 1 },
                seller: sellerId,
                operationType: "INTERNAL_SALE"
            }

            const { id } = await generateInvoice(payload);

            return id

        } catch (error) {
            console.error('Error al crear la factura:', error);
        } finally {
            loadingCreationInvoice.value = false;
        }
    }
    const fetchAllInvoices = async () => {
        try {
            const response = await getInvoices();
            const listInvoices = response.map(({ id, client, balance, date, items, total, seller, numberTemplate, totalPaid, dueDate }: Invoice) => {

                return {
                    id,
                    client,
                    balance,
                    date,
                    items,
                    total,
                    seller,
                    numberTemplate,
                    totalPaid,
                    dueDate
                }
            }).reverse();

            invoicesList.value = listInvoices

        } catch (error) {
            console.error('Error al obtener las facturas:', error);
        }
    }

    const fetchInvoiceById = async (invoiceId: number) => {
        try {
            const { id, client, balance, date, items, total, seller, numberTemplate, totalPaid, dueDate }: Invoice = await getInvoiceById(invoiceId)

            currentInvoice.value = {
                id,
                client,
                balance,
                date,
                items,
                total,
                seller,
                numberTemplate,
                totalPaid,
                dueDate
            }

        } catch (error) {
            resetCurrentInvoice()
            console.error('Error al obtener la factura:', error);
        }
    }

    const resetCurrentInvoice = () => {
        currentInvoice.value = null
    }

    return {
        loadingCreationInvoice,
        invoicesList,
        currentInvoice,
        createInvoice,
        fetchAllInvoices,
        fetchInvoiceById,
        resetCurrentInvoice,

    };

});