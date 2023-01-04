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

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(.5) rotate(135)">
	<rect x="0" y="0" width="40" height="40" style="fill:{cake[area].secondaryColor || 'transparent'};" />

	<path
		d="M0 29a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11zM0 69a 9-9 0 0 0 9-9a 11-11 0 0 1 11-11v2a-9 9 0 0 0-9 9a-11 11 0 0 1-11 11z"
		style="fill:{cake[area].color || 'transparent'}"
	/>
	<path
		d="M20 29.5a 9.5-9.5 0 0 0 9.5-9.5a 10.5-10.5 0 0 1 10.5-10.5v1a-9.5 9.5 0 0 0-9.5 9.5a-10.5 10.5 0 0 1-10.5 10.5z"
		style="fill:{cake[area].color || 'transparent'};"
	/>
</pattern>
