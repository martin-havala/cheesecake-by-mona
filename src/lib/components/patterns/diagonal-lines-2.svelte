<script lang="ts">
	import type { CakeArea, CakeDTO } from '$lib/models/cake';
	export let id = '';
	export let area: CakeArea = 'body';
	export let cake: CakeDTO;
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="scale(1) rotate(-45)">
	<rect x="0" y="0" width="8" height="8" style="fill:{cake[area].color || cake.body.color || 'transparent'};" />
	<path d="M0 3H8z" style="stroke: {cake[area].secondaryColor || cake.body.secondaryColor || 'transparent'};stroke-width:.5;" />
</pattern>

