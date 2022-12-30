<script lang="ts">
	import { base } from '$app/paths';
	import Cake from '$lib/components/cake.svelte';
	import { generateCake } from '$lib/helpers/cakeGenerator';
	import type { CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';
	import { onMount } from 'svelte';

	let items: CakeDTO[] = [];
	let activePalette = PALLETE_KEYS.findIndex((key) => key == 'Retro') ?? 0;

	const regenerateItems = (index?: number) => {
		items = new Array(25).fill(0).map((a, i) => generateCake(true, index ?? activePalette));
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
		{#each items as cake}
			<a href="{base}/bake?data={encodeURIComponent(JSON.stringify(cake))}" class="cake">
				<Cake {cake} />
			</a>
		{/each}
	</div>
</section>

<style>
	div.bakery {
		margin: 2em 0;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 9vh);
		width: 100%;
		height: 50vh;
	}

	.bakery .cake {
		display: block;
		position: relative;
	}
	.bakery .cake:hover {
		z-index: 100;
		transform: scale(1.1);
	}
</style>
