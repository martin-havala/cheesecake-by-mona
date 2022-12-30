<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';
	export let id = 0;
	export let cake: CakeDTO;
</script>

<linearGradient id="gradient-body-{id}" x1="0" y1="44" x2="1" y2="182" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.body.color ?? 'rgb(255,201,96)'};" />
	<stop offset="1" style="stop-color:{cake.body.secondaryColor ?? 'transparent'};" />
</linearGradient>

<linearGradient id="gradient-corpus-{id}" x1="0" y1="44" x2="1" y2="182" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.corpus.color ?? 'black'};" />
	<stop offset="1" style="stop-color:{cake.corpus.secondaryColor ?? 'black'};" />
</linearGradient>

<linearGradient id="gradient-icing-{id}" x1="0" y1="44" x2="1" y2="92" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.icing.color ?? cake.body.color ?? 'rgb(255,201,96)'};" />
	<stop offset="1" style="stop-color:{cake.icing.secondaryColor ?? cake.icing.color ?? cake.body.color ?? 'rgb(255,201,96)'}" />
</linearGradient>

<linearGradient id="gradient-decoration-{id}" x1="0" y1="44" x2="1" y2="92" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.decoration.color ?? cake.body.color ?? 'rgb(255,201,96)'};" />
	<stop
		offset="1"
		style="stop-color:{cake.decoration.secondaryColor ?? cake.decoration.color ?? cake.body.color ?? 'rgb(255,201,96)'};"
	/>
</linearGradient>

<linearGradient id="gradient-decorationStroke-{id}" x1="0" y1="44" x2="1" y2="92" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.decorationStroke.color ?? cake.corpus.color ?? 'black'}" />
	<stop
		offset="1"
		style="stop-color:{cake.decorationStroke.secondaryColor ?? cake.decorationStroke.color ?? cake.corpus.color ?? 'black'};"
	/>
</linearGradient>

<linearGradient id="gradient-filling-{id}" x1="0" y1="44" x2="1" y2="182" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.filling.color ?? cake.body.color ?? 'rgb(255,201,96)'};" />
	<stop
		offset="1"
		style="stop-color:{cake.filling.secondaryColor ?? cake.filling.color ?? cake.body.color ?? 'rgb(255,201,96)'};"
	/>
</linearGradient>

<linearGradient id="gradient-fillingTop-{id}" x1="0" y1="99" x2="0" y2="137" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.fillingTop.color ?? cake.body.color ?? 'rgb(255,201,96)'};" />
	<stop
		offset="1"
		style="stop-color:{cake.fillingTop.secondaryColor ?? cake.fillingTop.color ?? cake.body.color ?? 'rgb(255,201,96)'};"
	/>
</linearGradient>
