import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { 
    faDiagramProject, 
    faInfo, 
    faPenToSquare,
    faPlus,
    faArrowLeftLong,
    faCheck,
    faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

import ItensProjetos from '@/components/ItensProjetos';
import InfoProjeto from '@/components/InfoProjeto'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import axios from 'axios';
import VueAxios from 'vue-axios';

library.add(faDiagramProject);
library.add(faPenToSquare);
library.add(faPlus);
library.add(faArrowLeftLong);
library.add(faCheck);
library.add(faInfo);
library.add(faInfoCircle);

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: ItensProjetos
        },
        {
            name: 'InfoProjeto',
            path: '/info-projeto/:id',
            component: InfoProjeto
        },
        {
            name: 'AdicionaProjeto',
            path: '/adiciona-projeto',
            component: InfoProjeto
        }
    ]
    
});

const store = createStore({
    state(){
        return {
            texto: 'Bla Bla!'
        }
    },
    getters: {
        getTexto(state){
            return state.texto;
        }
    }
});

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app');
