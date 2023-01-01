<script lang="ts">
	import type { CakeArea, CakeDTO } from '$lib/models/cake';
	export let id = '';
	export let area: CakeArea = 'body';
	export let cake: CakeDTO;
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(.5) rotate(0)">
	<rect
		x="0"
		y="0"
		width="100%"
		height="100%"
		style="fill: {cake[area].secondaryColor || cake.body.secondaryColor || 'transparent'};"
	/>

	<path
		d="M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z"
		style="fill: {cake[area].color || cake.body.color || '#000000'};"
	/>
	<path d="M20 25a5 5 0 110-10 5 5 0 010 10z" style="fill: {cake[area].color || cake.body.color || '#000000'};" />
</pattern>
