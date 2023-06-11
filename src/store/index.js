
import Token from '@/helpers/Token';
import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            logado: Token().get() || false,
            rotaAnterior: null
        }
    },
    getters: {
        logado(state) {
            return state.logado;
        },
        rotaAnterior(state){
            return state.rotaAnterior;
        }   
    },
    mutations: {
        alteraEstadoLogado(state, value){
            state.logado = value;
        },
        alteraRotaAnterior(state, value){
            state.rotaAnterior = value;
        }
    },
    actions: {
        defineLogado({commit}, obj){
            commit('alteraEstadoLogado', obj.logado);
        },
        defineRotaAnterior({commit}, obj){
            commit('alteraRotaAnterior', obj.rota);
        }
    }
});

export default store;