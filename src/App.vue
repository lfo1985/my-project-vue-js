<template>
	<h5 v-if="loader">Carregando...</h5>
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
import Token from './helpers/Token';
import AxiosHttp from './helpers/AxiosHttp';

export default {
	name: 'App',
	data(){
		return {
			loader: false
		}
	},
	methods: {
		logout: function(){
			AxiosHttp().post('logout', {}, response => {
				if(response.sucesso){
					this.$store.dispatch({
						type: 'defineLogado',
						logado: false
					});
					Token().remove();
					location.reload();
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
	watch: {
		$route(to, from){
			console.log(to);
			console.log(from);
		}
	}
}
</script>

<style lang="scss">
  #app {
    font-family: 'Segoe UI';
    color: #2c3e50;
  }
</style>
