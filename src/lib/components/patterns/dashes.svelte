<script lang="ts">
	import type { CakeArea, CakeDTO } from '$lib/models/cake';
	export let id = '';
	export let area: CakeArea = 'body';
	export let cake: CakeDTO;
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(0)">
	<rect x="0" y="0" width="10" height="10" style="fill:{cake[area].color || cake.body.color || 'transparent'};" />
	<path d="M0,2h5 M3,7h5" style="stroke: {cake[area].secondaryColor || cake.body.secondaryColor || 'transparent'};stroke-width:.5;" />
</pattern>
