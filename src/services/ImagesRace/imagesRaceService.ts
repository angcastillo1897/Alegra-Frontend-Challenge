import { apiPexels, apiAlegra } from '@/services/index';
// Endpoint to get list of imgs
export const getImages = async (keyword: string) => {
    const response = await apiPexels.get(`/search?query=${keyword}&per_page=7&size=medium&locale=es-ES`);
    return response.data;
};

export const getSellers = async () => {
    const response = await apiAlegra.get('/sellers');
    return response.data;
};