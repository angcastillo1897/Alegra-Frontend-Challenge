import { onBeforeUnmount, onMounted, ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { useInvoiceStore } from '../Invoice.store';

export function useInvoiceDetail() {

    const invoiceStore = useInvoiceStore();
    const { fetchInvoiceById, resetCurrentInvoice } = invoiceStore;
    const { currentInvoice } = toRefs(invoiceStore);

    const route = useRoute();
    const invoiceId = Number(route.params.id);

    const loadingInvoice = ref(false);

    onMounted(async () => {
        loadingInvoice.value = true;
        await fetchInvoiceById(invoiceId);
        loadingInvoice.value = false;
    });

    onBeforeUnmount(() => {
        resetCurrentInvoice();
    })

    return {
        currentInvoice,
        loadingInvoice,
    };
}