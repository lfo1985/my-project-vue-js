import { createStore } from 'vuex';

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
    },
    mutations: {
        alteraTexto(state, value){
            state.texto = value
        }
    },
    actions: {
        alteraTexto({commit}, obj){
            commit('alteraTexto', obj.texto);
        }
    }
});

export default store;