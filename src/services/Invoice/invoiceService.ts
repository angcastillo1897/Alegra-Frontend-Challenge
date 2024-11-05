import type { InvoiceRequestParams } from '@/modules/Invoice/types';
import { apiAlegra } from '@/services/index';
// Endpoint of invoce service
export const getInvoices = async () => {
    const response = await apiAlegra.get('/invoices?order_field=id');
    return response.data;
};

export const getInvoiceById = async (id: number) => {
    const response = await apiAlegra.get(`/invoices/${id}`);
    return response.data;
};

export const generateInvoice = async (options: InvoiceRequestParams) => {
    const response = await apiAlegra.post('/invoices', options);
    return response.data;
};