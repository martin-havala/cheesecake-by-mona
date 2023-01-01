<script lang="ts">
	import type { CakeArea, CakeDTO } from '$lib/models/cake';
	export let id = '';
	export let area: CakeArea = 'body';
	export let cake: CakeDTO;
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(.15) rotate(0)">
	<rect x="0" y="0" width="100%" height="100%" style="fill:{cake[area].secondaryColor || cake.body.secondaryColor || 'transparent'};;" />
	<path d="M0 40L40 0H20L0 20M40 40V20L20 40" style="fill:{ cake[area].color || cake.body.color || 'transparent' };;fill-rule:evenodd;" />
</pattern>
