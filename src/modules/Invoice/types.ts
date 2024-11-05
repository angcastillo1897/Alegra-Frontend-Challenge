import type { BaseSeller } from "../ImagesRace/types";

type InvoiceRequestParams = {
    items: InvoiceItem[];
    date: string;
    dueDate: string;
    client: {
        id: number
    }
    seller: number,
    operationType: string
}

type InvoiceItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
    discount: number;
}

type Invoice = {
    id: number;
    client: Client;
    balance: number;
    totalPaid: number;
    date: string;
    dueDate: string;
    items: InvoiceItem[];
    total: number;
    seller: BaseSeller & { identification: string; };
    numberTemplate: NumberTemplate;
}

type NumberTemplate = {
    id: string;
    prefix: string;
    number: string;
    text: string | null;
    documentType: string;
    fullNumber: string;
    formattedNumber: string;
}
type Client = {
    id: number;
    email: string;
    name: string;
    identificationObject: {
        type: string;
        number: string;
    };
    identification: string;
}

export type { InvoiceRequestParams, InvoiceItem, Invoice }