<script>
	export let name;
</script>

<main>
	<h1>qube</h1>
	<p>3D, faster☄️</p>
	<input type="file">
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	input{
		width:40vw;
		cursor:pointer;
	}
	input div{
		visibility: hidden;
	}
	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>