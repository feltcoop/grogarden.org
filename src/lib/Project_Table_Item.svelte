<script lang="ts">
	import type {Gro_Project} from '$lib/project.js';
	import Adapter_Info from '$lib/Adapter_Info.svelte';
	import Plugin_Info from '$lib/Plugin_Info.svelte';

	export let project: Gro_Project;
</script>

<tr>
	<td><a href={project.repo}>{project.name}</a></td>
	<td
		>{#each project.adapters as adapter (adapter)}
			<Adapter_Info name={adapter} />
		{/each}</td
	>
	<td
		>{#each project.plugins as plugin (plugin)}
			<Plugin_Info name={plugin} />
		{/each}</td
	>
</tr>
