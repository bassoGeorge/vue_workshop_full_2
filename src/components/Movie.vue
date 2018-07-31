<template>
	<div class="movie card">
		<img class="card-img-top" v-bind:src="movie.Poster" alt="Card image cap">
		<div class="card-body">
			<h5 class="card-title">{{ movie.Title }}</h5>
			<p class="card-text">{{ shortSummary }}</p>
			<span v-if="isTomatoRecommends" class="float-right badge badge-danger">
				Tomato Recommends
			</span>
			<p class="card-text movie-year">{{ movie.Year }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name    : "Movie",
		props   : ['movie'],
		computed: {
			shortSummary      : function () {
				return this.movie.Plot.substring(0, 100) + (this.movie.Plot.length > 100 ? '...' : '')
			},
			isTomatoRecommends: function () {
				const tomatoRating = this.movie.Ratings.find(elem => elem.Source === "Rotten Tomatoes")
				if (!tomatoRating) return false;
				return parseInt(tomatoRating.Value) > 85
			}

		}
	}
</script>

<style scoped>
</style>