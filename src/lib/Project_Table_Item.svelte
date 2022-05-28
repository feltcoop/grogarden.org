<script lang="ts">
	import type {Gro_Project} from '$lib/project.js';
	import Adapter_Info from '$lib/Adapter_Info.svelte';
	import Plugin_Info from '$lib/Plugin_Info.svelte';

	export let project: Gro_Project;
</script>

<tr>
	<td><a href={project.repo}>{project.name}</a></td>
	<td
		><ul>
			{#each project.adapters as adapter (adapter)}
				<li><Adapter_Info name={adapter} /></li>
			{/each}
		</ul></td
	>
	<td
		><ul>
			{#each project.plugins as plugin (plugin)}
				<li><Plugin_Info name={plugin} /></li>
			{/each}
		</ul></td
	>
</tr>

<style>
	li {
		margin-right: var(--spacing_xl);
	}
</style>
