<script lang="ts">
	import ByMona from '$lib/components/byMona.svelte';
	import Cake from '$lib/components/cake.svelte';
	import { generateCake } from '$lib/helpers/cakeGenerator';
	import { downloadSVG } from '$lib/helpers/downloadSVG';
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
</script>

<svelte:head>
	<title>ByMona</title>
	<meta name="description" content="ByMona logo editor" />
</svelte:head>

<section>
	<button on:click={bakeACake} style="margin-top:2rem;border:none; padding: 2rem; border-radius: 50%; background:#fdfdfd;">
		<div class="text-column">
			<ByMona id="byMona">
				<Cake {cake} id="cake" wrap={false} />
			</ByMona>
		</div>
	</button>
	<button on:click={(e) => downloadSVG(document.getElementById('byMona'), 'byMona.svg')}>Download</button>
</section>
