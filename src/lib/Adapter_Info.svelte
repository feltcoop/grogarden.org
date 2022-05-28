<script lang="ts">
	import {urls, type Gro_Adapter_Name} from './project';

	export let name: Gro_Adapter_Name;

	$: url = urls.adapter[name];
</script>

<a href={url}>{name}</a>
