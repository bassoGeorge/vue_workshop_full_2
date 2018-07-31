<template>
	<div id="app">
		<Jumbotron></Jumbotron>
		<div class="container">
			<h1>Movies and shows</h1>
			<div class="row">
				<template v-for="(movie, index) in movies">
					<div class="w-100" v-if="index % 3 == 0"></div>
					<div class="col" v-bind:key="index">
						<Movie :movie="movie"></Movie>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	import Movie from './components/Movie'
	import Jumbotron from './components/Jumbotron'

	import mockMovie from './mocks/sample-movie';
	import movieAPI from './API/movies';

	export default {
		name      : 'app',
		data: () => ({
			mockMovie,
			movies: []
		}),
		mounted: function() {
			movieAPI.getAll().then((movies) => {
				this.movies = movies;
			})
		},
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
