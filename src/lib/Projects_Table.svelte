<script lang="ts">
	import type {Gro_Project} from '$lib/project.js';
	import Project_Table_Item from '$lib/Project_Table_Item.svelte';

	export let projects: Gro_Project[];
</script>

<section>
	<table>
		<thead>
			<tr>
				<th>name</th>
				<th>adapters</th>
				<th>plugins</th>
			</tr>
		</thead>
		<tbody>
			{#each projects as project (project.name)}
				<Project_Table_Item {project} />
			{/each}
		</tbody>
	</table>
</section>
