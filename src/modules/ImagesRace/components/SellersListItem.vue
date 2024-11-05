<template>
    <div v-if="loadingImg" 
        class="rounded-lg shadow border border-gray-200 w-full max-w-sm bg-white p-4"
    >   
        <div class="w-full h-[300px] flex items-center justify-center bg-gray-200" 
        >
            <LoadingSpinner />
        </div>
        <div class="h-[92px]">
        </div>
    </div>
    <div v-else-if="seller.image && !loadingImg" 
        class="rounded-lg shadow border border-gray-200 w-full max-w-sm bg-white p-4 flex flex-col gap-3"
    >   
        <div class="w-full h-[300px] overflow-hidden flex items-center justify-center" 
        >
            <img class="object-cover w-full h-full rounded-lg" :src="seller.image.url" :alt="seller.image.alt" />
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex justify-between gap-1">
                <p class="text-lg font-normal">Vendedor: 
                    <span class="font-semibold">
                    {{ seller.name }}
                    </span>
                </p>
                <template v-if="imagesWasSelected">
                    <div class="bg-red-500 rounded h-10 px-4 py-2 text-white">
                        <FontAwesomeIcon :icon="faHeart" />
                    </div>
                </template>
                <template v-else>
                    <BaseButton type="button" :disabled="scoreLeft === 0" @click="handleLikeClick(seller.id)">
                        <FontAwesomeIcon :icon="faThumbsUp" />
                    </BaseButton>
                </template>
            </div>
            <div class="flex justify-between gap-1">
                <p class="text-lg font-normal">Puntos: 
                    <span class="font-semibold">
                    {{ seller.score }}
                    </span>
                </p>
                <p class="text-lg font-normal">Puntos Faltantes: 
                    <span class="font-semibold">
                    {{ scoreLeft }}
                    </span>
                </p>
            </div>
        </div>
    </div>
    <div v-else 
        class="rounded-lg shadow border border-gray-200 w-full max-w-sm bg-white p-4 flex flex-col gap-3"
    >   
        <div class="w-full h-[300px] flex items-center justify-center bg-black" 
        >
            <div>
                <p class="text-center text-lg font-bold text-white">No se encontró coincidencias.</p>
            </div>
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex justify-between gap-1">
                <p class="text-lg font-normal">Vendedor: 
                    <span class="font-semibold">
                    {{ seller.name }}
                    </span>
                </p>
                <BaseButton type="button" :disabled="!seller.image">
                    <FontAwesomeIcon :icon="faThumbsUp" />
                </BaseButton>
            </div>
            <div class="flex justify-between gap-1">
                <p class="text-lg font-normal">Puntos: 
                    <span class="font-semibold">
                    {{ seller.score }}
                    </span>
                </p>
                <p class="text-lg font-normal">Puntos Faltantes: 
                    <span class="font-semibold">
                    {{ scoreLeft}}
                    </span>
                </p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { Seller} from '../types';
import { computed } from 'vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { useImagesRaceStore } from '../ImagesRace.store';
import { MAX_SCORE } from '../constants';

const { seller, loadingImg } = defineProps<{ 
    seller: Seller;
    loadingImg: boolean 
}>();
const ImagesRaceStore= useImagesRaceStore();
const {addScore} = ImagesRaceStore;

const scoreLeft = computed(() => {
    const difScoreLeft = MAX_SCORE - seller.score;
    return difScoreLeft > 0 ? difScoreLeft : 0;
});

const imagesWasSelected = computed(() => {
    const imagesSelectedIds = seller.imagesSelected.map((img) => img.id);
    if (seller.image){
        return  imagesSelectedIds.includes(seller.image.id);
    }else{
        return false
    }
});

const handleLikeClick = (sellerId: number) => {
    addScore(sellerId);
};

</script>