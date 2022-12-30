<script lang="ts">
	import type { CakeArea, CakeDTO } from '$lib/models/cake';
	export let id = '';
	export let area: CakeArea = 'body';
	export let cake: CakeDTO;
</script>

<pattern id={`${area}-${id}`} patternUnits="userSpaceOnUse" width="320" height="208">
	<rect x="0" y="0" width="100%" height="100%" style="fill:url(#gradient-{area}-{id}) transparent;" />
</pattern>
