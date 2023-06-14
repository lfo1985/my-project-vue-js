import { createRouter, createWebHashHistory } from 'vue-router';

import ItensClientes from '@/components/Cliente/ItensClientes';
import InfoCliente from '@/components/Cliente/InfoCliente';
import PaginaHome from '@/components/Default/PaginaHome';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: PaginaHome
        },
        {
            name: 'ItensClientes',
            path: '/clientes',
            component: ItensClientes
        },
        {
            name: 'InfoCliente',
            path: '/cliente/:id',
            component: InfoCliente
        }
    ]
    
});

export default router;