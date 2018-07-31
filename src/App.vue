<template>
	<div id="app">
		<p>Hello World</p>
	</div>
</template>

<script>

	require('bootstrap/dist/css/bootstrap.min.css')

	export default {
		name      : 'app',
		components: {
			// key-value
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
