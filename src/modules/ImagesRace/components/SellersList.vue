<template>
    <div class="flex flex-col flex-wrap gap-4 md:flex-row md:justify-center items-center md:gap-x-6">
        <template v-for="seller in sellers" :key="seller.id" >
            <SellersListItem :seller="seller" :loadingImg="loadingImg" />
        </template>
    </div>
</template>

<script setup lang="ts">
import type { Seller} from '../types';
import SellersListItem from './SellersListItem.vue';

defineProps<{ 
    sellers: Array<Seller>;
    loadingImg: boolean 
}>();
</script>