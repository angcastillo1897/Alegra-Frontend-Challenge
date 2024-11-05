import './styles/main.css'

import { createApp } from 'vue'

import pinia from './store/index'
import App from './App.vue'
import router from './router'
import { useImagesRaceStore } from './modules/ImagesRace/ImagesRace.store';

const app = createApp(App)

app.use(pinia)
app.use(router)

const { fetchSellers } = useImagesRaceStore();

// Init store main data before mounting
fetchSellers().then(() => {
    app.mount('#app');
});
