<script lang="ts">
	import Cake from '$lib/components/cake.svelte';
	import { getBakeUrl } from '$lib/helpers/bake-url';
	import { generateCake } from '$lib/helpers/cake-generator';
	import type { CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let items: CakeDTO[] = [];
	let activePalette = PALLETE_KEYS.findIndex((key) => key == 'Retro') ?? 0;

	const regenerateItems = (index?: number) => {
		items = new Array(16).fill(0).map((a, i) => generateCake(true, index ?? activePalette));
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

	<select id="palletes" bind:value={activePalette} on:change={(e) => regenerateItems(+e.currentTarget.value)}>
		{#each PALLETE_KEYS as key, index}
			<option value={index} selected={index == activePalette}>{key}</option>
		{/each}
	</select>
	<button on:click={(e) => regenerateItems(activePalette)}>Bake a new batch </button>

	<div class="bakery">
		{#key items}
			{#each items as cake}
				<a
					href={getBakeUrl(cake)}
					class="cake"
					in:fly={{ y: -50, duration: 500, delay: Math.random() * 2_000 }}
				>
					<Cake {cake} />
				</a>
			{/each}
		{/key}
	</div>
</section>

<style>
	div.bakery {
		margin: 2em 0;
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
	}

	.bakery .cake:hover {
		z-index: 100;
		transform: scale(1.1);
	}
</style>
