<script lang="ts">
	export let files:File[];
</script>

<main>
	<h1>qube🧊</h1>
	<p>3D, faster☄️</p>
	<!--default html file upload button-->
	<input type="file" id="upload-btn" bind:files hidden/>

	<!--our custom file upload button-->
	<div>
		<label for="upload-btn" >Choose File</label>
	</div>
	{#if files && files[0]}
		<p>
			{files[0].name}
		</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	div{
		display:flex;
		justify-content: center;
	}
	label {
		background-color: indigo;
		color: white;
		padding: 0.5rem;
		font-family: sans-serif;
		border-radius: 0.3rem;
		cursor: pointer;
		margin-top: 1rem;
		max-width: 300px;
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