<script lang="ts">
	import Projects_Table from '$lib/Projects_Table.svelte';
	import {official_projects, userland_projects} from '$lib/projects';
</script>

<main>
	<h1>grogarden.org</h1>
	<img src="/favicon.png" alt="oak acorn" />
	<section>
		<h2>official projects</h2>
		<Projects_Table projects={official_projects} />
	</section>
	<section>
		<h2>userland projects</h2>
		<Projects_Table projects={userland_projects} />
	</section>
	<footer>
		<a href="https://github.com/feltcoop/grogarden.org">github.com/feltcoop/grogarden.org</a>
	</footer>
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
		font-size: 64px;
		font-weight: 300;
		line-height: 1.1;
		margin: 40px auto;
	}

	h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 300;
		line-height: 1.1;
		margin: 20px auto;
	}

	footer {
		margin-bottom: 40px;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
	}
</style>
