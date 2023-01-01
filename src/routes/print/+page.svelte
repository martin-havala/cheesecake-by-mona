<script lang="ts">
	import Cake from '$lib/components/cake.svelte';
	import { PRINT_SUFFIX } from '$lib/constants/constants';
	import { getBakeUrl } from '$lib/helpers/bake-url';
	import type { CakeDTO } from '$lib/models/cake';
	import { onMount } from 'svelte';

	let ls: Storage;
	let printList: CakeDTO[] = [];

	const reloadList = () => {
		if (!ls) {
			return;
		}
		const loadedCakes = new Array(ls.length).fill('').reduce((acc, _, index) => {
			const key = ls.key(index) as string;
			const cake = JSON.parse(ls.getItem(key) ?? '') as CakeDTO;

			if (key.includes(PRINT_SUFFIX)) {
				return [...acc, cake];
			}
		}, []);

		printList = loadedCakes.sort(sortCakesByPrintOrder);
	};

	function sortCakesByPrintOrder(a: CakeDTO, b: CakeDTO) {
		return (a.printOrder ?? 0) > (b.printOrder ?? 1) ? 1 : -1;
	}

	onMount(() => {
		if (typeof localStorage !== `undefined`) {
			ls = localStorage;
			reloadList();
		}
	});
</script>

<svelte:head>
	<title>Menu</title>
	<meta name="description" content="Menu generator" />
</svelte:head>

<section class="print">
	<div class="menu">
		{#each printList as cake}
			<div class="cakeRow__item">
				<div class="cake">
					<Cake {cake} />
				</div>
				<div class="label">
					{cake.name}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		min-height: 80vh;
		display: flex;
		justify-content: center;
	}
	.menu {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		justify-items: center;
		font-size: 1rem;
		row-gap: 2rem;
	}

	.cakeRow__item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.cakeRow__item .cake {
		height: 4rem;
		width: 8rem;
		float: left;
		margin-right: 1rem;
	}

	.label {
		padding-top: 1rem;
		text-align: left;
	}
</style>
