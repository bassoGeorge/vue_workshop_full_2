<template>
	<div id="app">
		<Movie v-bind:movie="mockMovie"></Movie>
	</div>
</template>

<script>
	import Movie from './components/Movie'

	import mockMovie from './mocks/sample-movie';

	export default {
		name      : 'app',
		data: () => ({
			mockMovie
		}),
		components: {
			Movie
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin-top: 60px;
	}
</style>
