<script lang="ts">
	import type { CakeArea, CakeDTO } from '$lib/models/cake';
	export let id = '';
	export let area: CakeArea = 'body';
	export let cake: CakeDTO;
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="scale(1) rotate(0)">
	<rect x="0" y="0" width="6" height="6" style="fill:{cake[area].secondaryColor ?? cake.body.secondaryColor ?? 'transparent'};" />
	<path d="M5 0h1L0 6V5 zM6 5v1H5z" style="fill: { cake[area].color ?? cake.body.color ?? 'transparent' };;fill-rule:evenodd;" />
</pattern>
