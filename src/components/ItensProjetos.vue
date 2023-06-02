<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="text-start">

        <h5 class="bg-light d-block p-2 rounded">
            <fa icon="diagram-project" />
            <b>
                Projetos
            </b>
        </h5>

        <ul v-if="itensProjetos.length > 0" class="list-group mt-3 mb-3">
            <ItemProjeto 
                v-for="projeto in itensProjetos" 
                :key="projeto.id" 
                :projeto="projeto"
            />
        </ul>

        <div v-else>
            <small class="text-danger">Nenhum projeto encontrado!</small>
        </div>

        <hr>
        
        <h6 class="fw-bold">JSON de dados</h6>
        
        <div>{{ dadosComputados }}</div>

        <hr>

        <h6 class="fw-bold">VueX</h6>
        <p>Dados vindo do store: {{  getTexto  }}</p>
        <button @click="alteraTexto" class="btn btn-success">Teste para alterar o texto</button>
    </div>
</template>

<script>

import ItemProjeto from './ItemProjeto.vue';

export default {
    name: 'ItensProjetos',
    data() {
        return {
            itensProjetos: [],
            textoAlterado: null
        }
    },
    methods: {
        getItensProjetos: async function(){

            var itensProjetos = [];

            await this
                .axios.get('/data.json')
                .then(response => itensProjetos = response.data );

            this.itensProjetos = itensProjetos;
            
        },
        alteraTexto: function() {
            /**
             * Método utilizado para realizar a alteração no store (vuex)
             * Ciclo:   action (dispatch) -> 
             *          mutator (alteraTexto) -> 
             *          [realiza a altereação] ->
             *          getter (this.$store.getters.getTexto) retorna os dados alterados
             */
            this.$store.dispatch({
                type: 'alteraTexto',
                texto: 'Bruto pra caramba!'
            });
        }
    },
    components: {
        ItemProjeto
    },
    created(){
        this.getItensProjetos();
    },
    computed: {
        dadosComputados(){
            return this.itensProjetos;
        },
        getTexto(){
            return this.$store.getters.getTexto;
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