<script lang="ts">
	import Projects_Table from '$lib/Projects_Table.svelte';
	import {official_projects, userland_projects} from '$lib/projects';
</script>

<main>
	<header>
		<h1>grogarden.org</h1>
		<img src="/favicon.png" alt="oak acorn" />
	</header>
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
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: var(--spacing_xl2);
	}

	img {
		width: 256px;
		height: 256px;
	}

	h1 {
		color: var(--brown);
		text-align: center;
		font-size: 64px;
		font-weight: 300;
		line-height: 1.1;
		/* TODO upstream to Felt -- also, padding seems better than margin for headings? */
		padding: var(--spacing_xl2) 0;
	}

	h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 300;
		line-height: 1.1;
		padding: var(--spacing_lg) 0;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: var(--spacing_xl2) auto;
	}
</style>
