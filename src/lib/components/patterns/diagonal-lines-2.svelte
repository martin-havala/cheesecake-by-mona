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

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="scale(1) rotate(-45)">
	<rect x="0" y="0" width="8" height="8" style="fill:{cake[area].color || cake[area2].color || 'transparent'};" />
	<path
		d="M0 3H8z"
		style="stroke: {cake[area].secondaryColor || cake[area2].secondaryColor || 'transparent'};stroke-width:.5;"
	/>
</pattern>
