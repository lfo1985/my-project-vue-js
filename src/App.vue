<template>
	<h4 v-if="loader" class="text-white bg-success p-1 m-0 text-center fs-6 fw-normal">Processando dados, aguarde...</h4>
	<FormLogin v-if="!logado" />
	<MainPage v-else />
</template>

<script>

import MainPage from '@/components/Default/MainPage';
import FormLogin from '@/components/Default/FormLogin';
import { mapGetters } from 'vuex';

export default {
	name: 'App',
	inject: ['config'],
	components: {
		FormLogin,
		MainPage
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
