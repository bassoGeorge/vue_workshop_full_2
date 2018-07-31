<template>
	<div id="app">
		<Jumbotron></Jumbotron>
		<div class="container">
			<h1>Movies and shows</h1>
			<Movie v-bind:movie="mockMovie"></Movie>
		</div>
	</div>
</template>

<script>
	import Movie from './components/Movie'
	import Jumbotron from './components/Jumbotron'

	import mockMovie from './mocks/sample-movie';

	export default {
		name      : 'app',
		data: () => ({
			mockMovie
		}),
		components: {
			Movie,
			Jumbotron
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
