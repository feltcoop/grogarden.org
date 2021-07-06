<script lang="ts">
	import {projects} from '$lib/project_data';
	import Adapter_Info from '$lib/Adapter_Info.svelte';
	import Plugin_Info from '$lib/Plugin_Info.svelte';
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
			{/each}
		</tbody>
	</table>
</section>
