<template>
    <main class="py-6 px-4 h-full flex-1 flex flex-col gap-6 max-w-screen-xl md:mx-auto w-full">
        <template v-if="!loadingCreationInvoice">
            <BannerSection />
    
            <FormSearchImages v-model:emptySearched="emptySearched" />
    
            <section>
                <div v-if="emptySearched">
                    <p class="text-xl font-semibold text-content">Busca tu imagen y selecciona la imagen que más te guste.</p>
                </div>
                <SellersList v-else
                    :loadingImg="loadingSellersImgs"
                    :sellers="sellers"
                />
            </section>
        </template>
        <template v-else>
            <CreatingInvoice />
        </template>
    </main>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { storeToRefs } from 'pinia'
import SellersList from '../components/SellersList.vue';
import CreatingInvoice from '../components/CreatingInvoice.vue';
import BannerSection from '../components/BannerSection.vue';
import FormSearchImages from '../components/FormSearchImages.vue';

import { useImagesRaceStore } from '../ImagesRace.store';
import { useInvoiceStore } from '@/modules/Invoice/Invoice.store';
import { useRouter } from 'vue-router';
const router = useRouter()

const ImagesRaceStore = useImagesRaceStore();
const {resetSellerSelected} = ImagesRaceStore;
const {sellers,loadingSellersImgs,sumAllScores,sellerSelected} = storeToRefs(ImagesRaceStore);

const InvoiceStore = useInvoiceStore();
const {createInvoice} = InvoiceStore;
const {loadingCreationInvoice} = storeToRefs(InvoiceStore);

const emptySearched = ref(true);

watch(
    sellerSelected,
    async (newValue) => {
        if (newValue!==null) {
            // console.log('sellerSelected updated', newValue, oldValue);
            try {                
                const invoiceId = await createInvoice(newValue.id, sumAllScores.value);
    
                if (invoiceId!==undefined) {
                    router.push(`/invoice/${invoiceId}`)
                }
            } catch (error) {
                console.error('Error al crear la factura:', error);
                router.push({ name: 'error-page' });
            }

        }
    }
)

onBeforeUnmount(() => {
    resetSellerSelected();
})

</script>

<style scoped></style>