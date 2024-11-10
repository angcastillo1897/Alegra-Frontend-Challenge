<template>
    <form class="w-full mx-auto flex flex-col gap-2" @submit="onSubmit" @reset="onReset">
        <label class="text-lg font-semibold text-content" for="searchKeyWord">
            Buscar fotos e ilustraciones: </label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FontAwesomeIcon class="text-gray-400" :icon="faMagnifyingGlass" />
            </div>
            <input type="search" id="searchKeyWord"
                class="block w-full p-4 ps-10 text-md text-content border border-gray-300 rounded-lg autofill:bg-accent-1 bg-accent-1 hover:bg-accent-1 focus:bg-accent-1 outline-none border- focus:border-black"
                placeholder="Buscar..." required v-model.trim="searchKeyWord" :disabled="disabledFields" />
            
            <div class="absolute end-2.5 bottom-2.5 flex gap-2">
                <BaseButton
                type="submit" :disabled="disabledFields">
                    Buscar
                </BaseButton>
                <BaseButton
                type="reset" color="secondary" :disabled="disabledFields">
                    Limpiar
                </BaseButton>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useImagesRaceStore } from '../ImagesRace.store';
const ImagesRaceStore = useImagesRaceStore();
const {fetchImages} = ImagesRaceStore;

defineProps<{
    emptySearched?: boolean;
    disabledFields?: boolean
}>();

const searchKeyWord = ref("");
const previousSearchKeyword = ref(""); 

const emit = defineEmits<{ 
    (e: 'update:emptySearched', value: boolean): void }
>();

const onSubmit = async (event: Event) => {
    event.preventDefault();
    
    emit('update:emptySearched', false);

    if (!searchKeyWord.value) return
    if (searchKeyWord.value === previousSearchKeyword.value) return;

    await fetchImages(searchKeyWord.value);
    previousSearchKeyword.value = searchKeyWord.value
}

const onReset = () => {
    searchKeyWord.value = "";
    emit('update:emptySearched', true);
}

</script>