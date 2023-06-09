
import Token from '@/helpers/Token';
import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            // texto: 'Bla Bla!',
            logado: Token().get() || false
        }
    },
    getters: {
        // getTexto(state){
        //     return state.texto;
        // }
        logado(state) {
            return state.logado;
        }
    },
    mutations: {
        // alteraTexto(state, value){
        //     state.texto = value
        // }
        alteraEstadoLogado(state, value){
            state.logado = value;
        }
    },
    actions: {
        // alteraTexto({commit}, obj){
        //     commit('alteraTexto', obj.texto);
        // }
        defineLogado({commit}, obj){
            commit('alteraEstadoLogado', obj.logado)
        }
    }
});

export default store;