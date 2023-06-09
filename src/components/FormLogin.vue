<template>
    <h4 v-if="loader" class="text-white bg-success p-1">Realizando login, aguarde...</h4>
    <form class="w-25 border rounded p-3">
        <div class="mb-3">
            <label for="inputEmail" class="form-label">E-mail</label>
            <input type="email" v-model="dadosLogin.email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="inputSenha" class="form-label">Senha</label>
            <input type="password" v-model="dadosLogin.password" class="form-control" id="inputSenha">
        </div>
        <button type="button" @click="login" class="btn btn-primary">Conectar</button>
    </form>
</template>
  
<script>
    import AxiosHttp from '@/helpers/AxiosHttp';

    export default {
    name: 'FormLogin',
        data(){
            return {
                logado: false,
                loader: false,
                dadosLogin: {
                    email: null,
                    password: null
                },
            }
        },
        methods: {
            login: function(){
                
                this.loader = true;

                const sucesso = r => {
                    if(r.sucesso){
                        this.$store.dispatch({
                            type: 'defineLogado',
                            logado: true
                        });
                    } else {
                        alert(r.msg);
                    }
                    this.loader = false;
                }

                const erro = e => {
                    alert(e.msg);
                    this.loader = false;
                }

                AxiosHttp().login({
                    email: this.dadosLogin.email,
                    password: this.dadosLogin.password
                },sucesso, erro);
            },
        }
    };
</script>