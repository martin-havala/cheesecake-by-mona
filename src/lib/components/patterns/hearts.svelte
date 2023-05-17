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

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(.66) rotate(0)">
	<rect
		x="0"
		y="0"
		width="40"
		height="40"
		style="fill:{cake[area].secondaryColor || 'transparent'};"
	/>
	<path
		d="M20,22L30,12L30,7L25,2L20,7L15,2L10,7L10,12L20,22Z M40,17L30,27L30,32L35,37L40,32L45,37L50,32L50,27L40,17Z M0,17L-10,27L-10,32L-5,37L0,32L5,37L10,32L10,27L0,17Z"
		style="fill:{cake[area].color || 'transparent'};fill-rule:evenodd;"
	/>
</pattern>
