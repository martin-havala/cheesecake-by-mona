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

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="scale(.5) rotate(0)">
	<rect
		x="0"
		y="0"
		width="50"
		height="50"
		style="fill:{cake[area].secondaryColor || 'transparent'};"
	/>
	<path
		d="M50 25L37.5 50 25 25 37.5 0zm-25 0L12.5 50 0 25 12.5 0z"
		style="fill:none;stroke: {cake[area].color || 'transparent'};"
	/>
</pattern>
