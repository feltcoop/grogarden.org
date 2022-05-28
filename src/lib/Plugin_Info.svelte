<script lang="ts">
	import {urls, type Gro_Plugin_Name} from '$lib/project';

	export let name: Gro_Plugin_Name;

	$: url = urls.plugin[name];
</script>

<a href={url}>{name}</a>
