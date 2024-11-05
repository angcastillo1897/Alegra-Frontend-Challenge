import { ref, onMounted, toRefs } from 'vue';
import { useInvoiceStore } from '../Invoice.store';

export function useInvoiceCollection() {

    const invoiceStore = useInvoiceStore();
    const { fetchAllInvoices } = invoiceStore;

    const { invoicesList } = toRefs(invoiceStore);

    const loadingInvoices = ref(false);

    onMounted(async () => {
        loadingInvoices.value = true;
        await fetchAllInvoices();
        loadingInvoices.value = false;
    })
    return {
        invoicesList,
        loadingInvoices,
    };
}