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

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(.25) rotate(0)">
	<rect
		x="0"
		y="0"
		width="40"
		height="40"
		style="fill: {cake[area].secondaryColor || 'transparent'};"
	/>

	<path
		d="M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z M20 25a5 5 0 110-10 5 5 0 010 10z"
		style="fill: {cake[area].color || 'transparent'};"
	/>
</pattern>
