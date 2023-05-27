<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div class="text-start">
        <h5 class="bg-light d-block p-2 rounded">
            <font-awesome-icon icon="diagram-project" />
            <b>
                Projetos
            </b>
        </h5>
        <button class="btn btn-success mt-2 mb-2">
            <font-awesome-icon icon="plus" />
            adicionar novo projeto
        </button>
        <ul class="list-group mt-3 mb-3">
            <li 
                v-for="projeto in projetos"
                class="list-group-item d-flex align-items-center justify-content-between"
            >
                {{  projeto.titulo  }}
                <div class="d-flex">
                    <button @click="editar(projeto)" class="btn btn-sm btn-info me-1 text-white">
                        <font-awesome-icon icon="pen-to-square" />
                    </button>
                    <button @click="apagar(projeto)" class="btn btn-sm btn-danger text-white">
                        <font-awesome-icon icon="trash" />
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'ItensProjetos',
    data() {
        return {
            projetos: [
                {
                    id: 1,
                    titulo: 'Teste de titulo'
                },
                {
                    id: 2,
                    titulo: 'Outro projeto kkkk'
                }
            ]        
        }
    },
    methods: {
        editar: function(projeto){
            return projeto;
        },
        apagar: function(projeto){
            if(confirm('Deseja apagar este projeto?')){
                return projeto;
            }
        }
    },
}

</script>

<style lang="scss">
    .list-group-item {
        text-align: left;
        border-left: 6px solid #25cff2!important;
    }
</style>