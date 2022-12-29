<script lang="ts">
	import { base } from '$app/paths';
	import Cake from '$lib/components/cake.svelte';
	import { generateCake } from '$lib/helpers/cakeGenerator';
	import type { CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';
	import { afterUpdate, onMount } from 'svelte';

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
	}
	.bakery .cake:hover:after {
		position: absolute;
		top: 8px;
		right: 0;
		content: '';
		display: block;
		width: 150%;
		height: 100%;
		margin: auto;
		z-index: 200;
		transform: translateY(-4px);
		background-repeat: no-repeat;
		background-position: right bottom;
		background-image: url("data:image/svg+xml,%3Csvg version='1.1' class='h-4 text-dark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 110 '%3E%3Cpath d='M10,15 L67,10 L67,100 L200,100 L200,102 L67,108  L60,104  L62,18 L10,22' fill='black' /%3E%3C/svg%3E");
		background-size: 100% 100%;
	}
</style>
