import type { RouteRecordRaw } from 'vue-router';
const InvoiceDetail = () => import('./views/InvoiceDetail.vue');
const InvoiceCollection = () => import('./views/InvoiceCollection.vue');

const invoiceRoutes: RouteRecordRaw[] = [
    {
        path: '/invoice',
        children: [
            { path: '', component: InvoiceCollection },
            {
                path: ':id',
                component: InvoiceDetail,
                beforeEnter: (to, from, next) => {
                    const idParam = Number(to.params.id);
                    if (isNaN(idParam)) {
                        next({ name: 'error-page' });
                    } else {
                        next();
                    }
                },
            },
        ],
    },
];

export default invoiceRoutes;