<template>
  <FormLogin v-if="!this.$store.getters.logado" />
  <template v-else>
    <NavBar />
	<button @click="logout" class="btn btn-info text-white mt-2 mb-2">Logout</button>
    <ContainerFluid />
  </template>

</template>

<script>

import NavBar from './components/NavBar.vue';
import ContainerFluid from '@/components/ContainerFluid';
import FormLogin from '@/components/FormLogin';
import AxiosHttp from './helpers/AxiosHttp';
import Token from './helpers/Token';

export default {
	name: 'App',
	methods: {
		verificaLogin: function (){
			if(Token().get()){
				const falha = e => {
					if(!e.sucesso){
						Token().remove();
						this.$store.dispatch({
							type: 'defineLogado',
							logado: false
						});
					}
				}
				AxiosHttp().get('verifica', response => {
					console.log(response);
				}, falha);
			} else {
				this.$store.dispatch({
					type: 'defineLogado',
					logado: false
				});
			}
		},
		logout: function(){
			AxiosHttp().post('logout', response => {
				if(response.sucesso){
					Token().remove();
					this.$store.dispatch({
						type: 'defineLogado',
						logado: false
					});
				}
			});
		}
	},
	components: {
		NavBar,
		ContainerFluid,
		FormLogin
	},
	computed: {
		getLogado(){
			return this.$store.getters.logado;
		}
	},
	mounted(){
		this.verificaLogin();
	}
}
</script>

<style lang="scss">
  #app {
    font-family: 'Segoe UI';
    color: #2c3e50;
  }
</style>
