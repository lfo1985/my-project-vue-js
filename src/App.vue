<template>
	<h5 class="bg-info text-white" v-if="loader">Carregando...</h5>
	<FormLogin v-if="!logado" />
	<template v-else>
		<NavBar />
		<ContainerFluid />
	</template>

</template>

<script>

import NavBar from './components/NavBar.vue';
import ContainerFluid from '@/components/ContainerFluid';
import FormLogin from '@/components/FormLogin';
import { mapGetters } from 'vuex';

export default {
	name: 'App',
	inject: ['config'],
	
	components: {
		NavBar,
		ContainerFluid,
		FormLogin
	},
	computed: {
		...mapGetters([
			'logado',
			'loader'
		])
	}
}
</script>

<style lang="scss">
  #app {
    font-family: 'Segoe UI';
    color: #2c3e50;
  }
</style>
