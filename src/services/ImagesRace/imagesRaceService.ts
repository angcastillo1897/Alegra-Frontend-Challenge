import { apiPexels, apiAlegra } from '@/services/index';
// Endpoint to get list of imgs
export const getImages = async (keyword: string, imgsPerPage: number) => {
    const response = await apiPexels.get(`/search?query=${keyword}&per_page=${imgsPerPage}&size=medium&locale=es-ES`);
    return response.data;
};

export const getSellers = async () => {
    const response = await apiAlegra.get('/sellers');
    return response.data;
};