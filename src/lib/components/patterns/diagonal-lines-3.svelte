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

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="scale(1) rotate(-45)">
	<rect x="0" y="0" width="6" height="6" style="fill:{cake[area].secondaryColor || 'transparent'};" />
	<path
		d="M0 3H6z"
		style="stroke: {cake[area].color || 'transparent'};stroke-width:.5;"
	/>
</pattern>
