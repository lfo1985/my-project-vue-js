import { createRouter, createWebHashHistory } from 'vue-router';

import ItensProjetos from '@/components/ItensProjetos';
import InfoProjeto from '@/components/InfoProjeto'

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

export default router;