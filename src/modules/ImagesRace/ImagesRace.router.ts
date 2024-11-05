import type { RouteRecordRaw } from 'vue-router';
const SearchImages = () => import('./views/SearchImages.vue');

const searchImagesRoutes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'search-images',
        component: SearchImages,
    },
];

export default searchImagesRoutes;