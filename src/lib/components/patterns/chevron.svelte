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
				area2 = 'bodyStroke';
		}
	});
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(.5) rotate(0)">
	<rect
		x="0"
		y="0"
		width="100%"
		height="100%"
		style="fill:{cake[area].secondaryColor || cake[area2].secondaryColor || 'transparent'};"
	/>

	<path d="M-5 5L5.1 15 15 5l10 10" style="stroke: {cake[area].color || cake[area2].color || 'transparent'};;fill:none" />
</pattern>
