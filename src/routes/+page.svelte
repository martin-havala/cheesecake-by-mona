<script>
	import Cake from '$lib/components/cake.svelte';
	import { generateCake } from '$lib/helpers/cakeGenerator';
	import { escape } from 'svelte/internal';

	const items = new Array(36).fill(0).map((a, i) => generateCake());
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="text-column">
		<h1>About this app</h1>

		<p>This is a tiny utility to generate cakes for Mona &lt;3</p>
	</div>

	<div class="bakery">
		{#each items as cake}
			<a href="./bake?data={encodeURIComponent(JSON.stringify(cake))}" class="cake">
				<Cake {cake} />
			</a>
		{/each}
	</div>
</section>

<style>
	div.bakery {
		margin: 2em 0;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 9vh);
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
