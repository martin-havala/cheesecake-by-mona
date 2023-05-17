<script lang="ts">
	import Cake from '$lib/components/cake.svelte';
	import { getBakeUrl } from '$lib/helpers/bake-url';
	import { generateCake } from '$lib/helpers/cake-generator';
	import type { CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let items: CakeDTO[] = [];
	let activePalette = PALLETE_KEYS.findIndex((key) => key == 'Retro') ?? 0;

	const regenerateItems = (index?: number) => {
		const delays = new Array(16)
			.fill(0)
			.map((_, i) => i)
			.sort((_) => (Math.random() > 0.5 ? 1 : -1));
		items = new Array(16)
			.fill(0)
			.map((a, i) => generateCake(true, index ?? activePalette))
			.map((cake,i) => ({ ...cake, delay: delays[i] }));
	};

	onMount(() => {
		regenerateItems();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="text-column">
		<h1>CheeseCake by Mona</h1>
		<p>This is a tiny utility to generate cake visuals for Mona ♥</p>
	</div>

	<div class="controls">
		
		Colour pallete: <select id="palletes" bind:value={activePalette} on:change={(e) => regenerateItems(+e.currentTarget.value)}>
			{#each PALLETE_KEYS as key, index}
				<option value={index} selected={index == activePalette}>{key}</option>
			{/each}
		</select>
		<button on:click={(e) => regenerateItems(activePalette)}>Bake a new batch </button> 
	</div>

	<div class="bakery">
		{#key items}
			{#each items as cake, index}
				<a href={getBakeUrl(cake)} class="cake" in:fly={{ y: -20, duration: 800, delay: (cake.delay??1) * 77 }}>
					<Cake {cake} />
				</a>
			{/each}
		{/key}
	</div>
</section>

<style>
	.controls {
		z-index: 100;
		padding-bottom: 2em;
	}
	div.bakery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 10vh);
		gap: 1rem;
		width: 100%;
	}

	.bakery .cake {
		display: block;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.bakery .cake:hover {
		z-index: 100;
		transform: scale(1.1);
	}
</style>
