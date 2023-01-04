<script lang="ts">
	import type { CakeArea, CakeDTO } from '$lib/models/cake';
	import { onMount } from 'svelte';
	export let id = '';
	export let area: CakeArea = 'body';
	let area2: CakeArea = 'body';
	export let cake: CakeDTO;

	onMount(() => {
		switch (area) {
			case 'icingStroke':
			case 'decorationStroke':
				area2 = 'bodyStroke';
				break;
			default:
				area2 = 'body';
		}
	});
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="320" height="208">
	<rect
		x="0"
		y="0"
		width="100%"
		height="100%"
		style="fill:{cake[area].secondaryColor};fill:url(#gradient-{area}-{id});"
	/>
</pattern>
