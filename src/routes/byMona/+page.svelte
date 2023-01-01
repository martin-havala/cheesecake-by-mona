<script lang="ts">
	import ByMona from '$lib/components/byMona.svelte';
	import Cake from '$lib/components/cake.svelte';
	import { generateCake } from '$lib/helpers/cakeGenerator';
	import { downloadSvg } from '$lib/helpers/downloadSVG';
	import type { CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';

	let cake: CakeDTO;
	const bakeACake = () => {
		cake = generateCake(
			false,
			PALLETE_KEYS.findIndex((p) => p == 'Retro')
		);
	};
	bakeACake();

	const download = () => downloadSvg(document.querySelector('#byMona') as SVGElement);
</script>

<svelte:head>
	<title>ByMona</title>
	<meta name="description" content="ByMona logo editor" />
</svelte:head>

<section>
	<button on:click={bakeACake} style="border:none; padding: 4rem; border-radius: 50%; background:#fdfdfd;">
		<div class="text-column">
			<ByMona id="byMona">
				<Cake {cake} id="cake" wrap={false} />
			</ByMona>
		</div>
	</button>
	<button on:click={download}> Download</button>
</section>
