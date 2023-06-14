<template>
    <main>
        <NavBar />
        <ContainerFluid />
    </main>
</template>

<script>

import NavBar from '@/components/Default/NavBar'
import ContainerFluid from '@/components/Default/ContainerFluid'
import { mapGetters } from 'vuex';

export default {
	name: 'MainPage',
	inject: ['config'],
	
	components: {
		NavBar,
		ContainerFluid
	},
	computed: {
		...mapGetters([
			'logado',
			'loader'
		])
	}
}
</script>