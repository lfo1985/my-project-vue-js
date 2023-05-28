import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import ItensProjetos from '@/components/ItensProjetos';
import FormProjeto from '@/components/FormProjeto'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

library.add(faDiagramProject);
library.add(faPenToSquare);
library.add(faTrash);
library.add(faPlus);
library.add(faArrowLeftLong);
library.add(faCheck);

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: ItensProjetos
        },
        {
            name: 'EditaProjeto',
            path: '/edita-projeto/:id',
            component: FormProjeto
        },
        {
            name: 'AdicionaProjeto',
            path: '/adiciona-projeto',
            component: FormProjeto
        }
    ]
    
});

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount('#app');
