<script lang="ts">
	import ByMona from '$lib/components/byMona.svelte';
	import Cake from '$lib/components/cake.svelte';
	import { generateCake } from '$lib/helpers/cake-generator';
	import { downloadSVG } from '$lib/helpers/download-SVG';
	import type { CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';

	let cake: CakeDTO;

	const bakeACake = () => {
		cake = generateCake(
			true,
			PALLETE_KEYS.findIndex((p) => p == 'Retro')
		);
	};
	bakeACake();
</script>

<svelte:head>
	<title>ByMona</title>
	<meta name="description" content="ByMona logo editor" />
</svelte:head>

<section>
	<h1>Generate random logo</h1>
	<button on:click={bakeACake} style="border:none;">
		<div class="text-column">
			<ByMona id="byMona">
				<Cake {cake} id="cake" wrap={false} />
			</ByMona>
		</div>
	</button><br />
	<button on:click={(e) => downloadSVG(document.getElementById('byMona'), 'byMona.svg')}>Download</button>
</section>
