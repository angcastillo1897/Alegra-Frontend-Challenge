import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { getImages, getSellers } from '@/services/ImagesRace/imagesRaceService';
import type { Seller, SellerResponse } from '@/modules/ImagesRace/types';
import { MAX_SCORE, SCORE_TO_ADD } from './constants';

export const useImagesRaceStore = defineStore('imagesRace', () => {
    /* state */
    const sellers = ref<Array<Seller>>([]);
    const loadingSellersImgs = ref(false);
    const initializedSellers = ref(false);
    const sellerSelected = ref<Seller | null>(null);

    /* computed => getters */
    const sumAllScores = computed(() => {
        return sellers.value.reduce((acc, seller) => acc + seller.score, 0);
    })
    /* actions */
    const fetchImages = async (keyword: string) => {
        try {
            loadingSellersImgs.value = true;
            const { photos } = await getImages(keyword);
            // console.log(photos);

            if (photos.length === 0) {
                return sellers.value.forEach((seller) => {
                    seller.image = null;
                });
            }

            sellers.value.forEach((seller, index) => {

                if (photos[index]) {
                    seller.image = {
                        id: photos[index].id,
                        url: photos[index].src.original,
                        alt: photos[index].alt
                    };
                } else {
                    seller.image = null
                }
            });

        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
        } finally {
            loadingSellersImgs.value = false;
        }
    };

    const fetchSellers = async () => {
        try {
            /* check if we have data in localStorage */
            const imagesRaceStoreSaved = localStorage.getItem('imagesRace')
            if (imagesRaceStoreSaved) {
                const { loadingSellersImgs: loadingSellersImgsSaved, initializedSellers: initializedSellersSaved, sellers: sellersSaved } = JSON.parse(imagesRaceStoreSaved)

                loadingSellersImgs.value = loadingSellersImgsSaved
                initializedSellers.value = initializedSellersSaved
                sellers.value = sellersSaved.map((seller: Seller) => ({
                    ...seller,
                    image: null
                }))
                return
            }

            const response = await getSellers();

            const sellersList = response.map((seller: SellerResponse) => ({
                id: seller.id,
                name: seller.name,
                image: null,
                score: 0,
                imagesSelected: [],
            }));

            setSellers(sellersList);
        } catch (error) {
            console.error('Error al obtener los vendedores:', error);
        } finally {
            initializedSellers.value = true;
        }
    };

    const setSellers = (sellersList: Array<Seller>) => {
        sellers.value = sellersList
    }

    const addScore = async (sellerId: number) => {
        const seller = sellers.value.find((s) => s.id === sellerId);
        if (seller) {
            seller.score += SCORE_TO_ADD;
            if (seller.image) {
                seller.imagesSelected.push(seller.image);
            }

            if (seller.score >= MAX_SCORE) {
                sellerSelected.value = seller
            }
        }
    }

    const resetSellerSelected = () => {
        sellerSelected.value = null
    }
    return {
        loadingSellersImgs,
        initializedSellers,
        sellers,
        sumAllScores,
        fetchImages,
        fetchSellers,
        addScore,
        resetSellerSelected,
        sellerSelected,
    };

}, {
    persist: true,
},);