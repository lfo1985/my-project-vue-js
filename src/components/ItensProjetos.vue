<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="text-start">
        <h5 class="bg-light d-block p-2 rounded">
            <font-awesome-icon icon="diagram-project" />
            <b>
                Projetos
            </b>
        </h5>
        <router-link to="/adiciona-projeto">
            <button class="btn btn-success mt-2 mb-2">
                <font-awesome-icon icon="plus" />
                adicionar novo projeto
            </button>
        </router-link>
        <ul v-if="itensProjetos.length > 0" class="list-group mt-3 mb-3">
            <li 
                v-for="projeto in itensProjetos"
                class="list-group-item d-flex align-items-center justify-content-between"
            >
                {{  projeto.titulo  }}
                <div class="d-flex">
                    <router-link 
                        :to="{path: '/edita-projeto/'+projeto.id}" 
                        class="btn btn-sm btn-info me-1 text-white"
                    >
                        <font-awesome-icon icon="pen-to-square" />
                    </router-link>
                    <button @click="apagar(projeto)" class="btn btn-sm btn-danger text-white">
                        <font-awesome-icon icon="trash" />
                    </button>
                </div>
            </li>
        </ul>
        <div v-else>
            <small class="text-danger">Nenhum projeto encontrado!</small>
        </div>
    </div>
</template>

<script>

import projetos from '../data.js';

export default {
    name: 'ItensProjetos',
    data() {
        return {
            itensProjetos: projetos
        }
    },
    methods: {
        getIndex: function(projeto){
            return this.itensProjetos.findIndex(item => item.id == projeto.id);
        },
        apagar: function(projeto){
            if(confirm('Deseja apagar este registro?')){
                this.itensProjetos.splice(this.getIndex(projeto), 1);
                localStorage.setItem('projetos', JSON.stringify(this.itensProjetos));
            }
        }
    },
    mounted(){
        if(localStorage.getItem('projetos')){
            this.itensProjetos = JSON.parse(localStorage.getItem('projetos'));
        }
    }
}

</script>

<style lang="scss">
    .list-group-item {
        text-align: left;
        border-left: 6px solid #25cff2!important;
    }
</style>