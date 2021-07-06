<script lang="ts">
	import Projects from '$lib/Projects.svelte';
</script>

<main>
	<h1>grogarden.org</h1>
	<img src="/favicon.png" alt="oak acorn" />
	<Projects />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 256px;
		height: 256px;
		margin-bottom: 40px;
	}

	h1 {
		color: var(--brown);
		text-align: center;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 40px auto;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
	}
</style>
