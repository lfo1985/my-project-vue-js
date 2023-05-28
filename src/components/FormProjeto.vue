<template>
    <div class="text-start">
        <h5 class="bg-light d-block p-2 rounded">
            <template v-if="this.$route.params.id">
                <font-awesome-icon icon="pen-to-square" />
                Editar
            </template>
            <template v-else>
                <font-awesome-icon icon="plus" />
                Adicionar
            </template> 
            projeto
        </h5>
        <form class="text-start">
            <div class="row">
                <div class="col-md-12 mb-3">
                    <label class="form-label">Nome do Projeto</label>
                    <input v-model="editaProjeto.titulo" type="text" class="form-control">
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-md-4">
                    <button type="button" @click="salvar" class="btn btn-info text-white">
                        <template v-if="getId()">
                            <font-awesome-icon icon="pen-to-square" />
                            Editar
                        </template>
                        <template v-else>
                            <font-awesome-icon icon="plus" />
                            Adicionar
                        </template>
                    </button>
                </div>
            </div>
        </form>
        <div class="text-center">
            <router-link to="/" class="btn btn-sm btn-dark me-1 text-white">
                <font-awesome-icon icon="arrow-left-long" />
                Voltar
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FormProjeto',
  data() {
    return {
        itensProjetos: [],
        projeto: {},
        editaProjeto: {}
    }
  },
  methods: {
    getId: function(){
        return this.$route.params.id;
    },
    salvar: function(){
        if(this.getId()){
            // Nada a executar!
        } else {
            this.itensProjetos.push({
                id: Math.floor(Math.random() * 100000),
                titulo: this.editaProjeto.titulo
            });
        }
        localStorage.setItem('projetos', JSON.stringify(this.itensProjetos));
        this.$router.push('/');
    }
  },
  mounted() {
    var id = this.getId();
    if(localStorage.getItem('projetos')){
        this.itensProjetos = JSON.parse(localStorage.getItem('projetos'));
    }
    if(id){
        var projeto = this.itensProjetos.filter(function(item){
            return id == item.id;
        });
        if(projeto.length > 0){
            this.editaProjeto = projeto[0];
        }
    }
  }
}

</script>