import { createRouter, createWebHashHistory } from 'vue-router';

import ItensClientes from '@/components/ItensClientes';
import PaginaHome from '@/components/PaginaHome';
import InfoCliente from '@/components/InfoCliente';
import Token from '@/helpers/Token';
import AxiosHttp from '@/helpers/AxiosHttp';

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

router.beforeEach((to, from, next) => {
    if(Token().get()){
        AxiosHttp().get('verifica', () => {
            next();
        }, e => {
            if(!e.sucesso){
                Token().remove();
                location.reload();
            }
        });
    }
});

export default router;