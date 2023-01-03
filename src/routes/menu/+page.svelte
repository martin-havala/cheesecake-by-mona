<script lang="ts">
	import Cake from '$lib/components/cake.svelte';
	import Print from '$lib/components/print.svelte';
	import { PRINT_SUFFIX } from '$lib/constants/constants';
	import { DEFAULT_CAKES } from '$lib/constants/default-cakes';
	import { getBakeUrl } from '$lib/helpers/bake-url';
	import { downloadSVG } from '$lib/helpers/download-SVG';
	import type { CakeDTO } from '$lib/models/cake';
	import { onMount } from 'svelte';

	let ls: Storage;

	let cakeList: CakeDTO[] = [];
	let printList: CakeDTO[] = [];

	const saveCake = (cake: CakeDTO, printOrder: number) => {
		if (!ls) return;
		ls.setItem(`${cake.name}${printOrder ? PRINT_SUFFIX : ''}`, JSON.stringify({ ...cake, printOrder }));
		reloadList();
	};

	const printCake = (cake: CakeDTO) => {
		saveCake(cake, (printList.at(-1)?.printOrder ?? 0) + 1);
	};

	const removeCake = (cake: CakeDTO, print: boolean = false) => {
		ls.removeItem(`${cake.name}${print ? PRINT_SUFFIX : ''}`);
		reloadList();
	};

	const reloadList = () => {
		if (!ls) {
			return;
		}

		if (ls.length == 0) {
			DEFAULT_CAKES.forEach((cake) => saveCake(cake, 0));
		}
		const loadedCakes = new Array(ls.length).fill('').reduce(
			(acc, _, index) => {
				const key = ls.key(index) as string;
				const cake = JSON.parse(ls.getItem(key) ?? '') as CakeDTO;

				if (key.includes(PRINT_SUFFIX)) {
					return {
						cakeList: acc.cakeList,
						printList: [...acc.printList, cake]
					};
				} else {
					return {
						cakeList: [...acc.cakeList, cake],
						printList: acc.printList
					};
				}
			},
			{ cakeList: [], printList: [] }
		);

		cakeList = loadedCakes.cakeList.sort(sortCakesByName);
		printList = loadedCakes.printList.sort(sortCakesByPrintOrder);
	};

	function sortCakesByName(a: CakeDTO, b: CakeDTO) {
		return (a.name ?? '') > (b.name ?? '') ? 1 : -1;
	}
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

<section>
	<h1>Menu generator</h1>
	<div class="menu">
		<div class="cakeList">
			<div class="menu-header">
				Stored in memory:
				<div class="tiny">(Click on imago to select it for printing)</div>
			</div>

			<div class="menu-list">
				{#each cakeList as cake}
					<div class="cakeRow">
						<div class="cakeRow__item">
							<button class="cakeRow__button flat" on:click={(e) => printCake(cake)}>
								<div class="cake">
									<Cake {cake} />
								</div>
							</button>
							<div class="label">
								{cake.name}
								<br />
								<a class="icobutton flat" href={getBakeUrl(cake)}> <button> Edit </button></a>
								<button class="" on:click={(e) => removeCake(cake, false)}> Delete </button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="cakeList printList">
			<div class="menu-header">
				<button style="float:right" on:click={(e) => downloadSVG(document.getElementById('print'), 'byMona-menu.svg')}
					>Download</button
				>
				Selected for export:
				<div class="tiny">(you can edit label of cakes here)</div>
			</div>
			<div class="menu-list">
				<div class="preview">
					<Print {printList} />
				</div>

				{#each printList as cake}
					<div class="cakeRow">
						<div class="cakeRow__item">
							<button class="cakeRow__button superflat flat" on:click={(e) => removeCake(cake, true)}>
								<div class="cake">
									<Cake {cake} />
								</div>
							</button>
							<div class="label">
								<textarea
									cols="13"
									class="cakeRow__input"
									value={cake.name}
									on:change={(e) => {
										removeCake(cake, true);
										saveCake({ ...cake, name: e.currentTarget.value }, cake.printOrder ?? 0);
									}}
								/>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.menu {
		width: 100vw;
		max-width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 1rem;
		overflow: hidden;
		height: 100%;
		padding: 0.5rem 0;
	}
	.menu-list {
		overflow-x: hidden;
		overflow-y: auto;
	}
	.cakeList {
		display: flex;
		flex-direction: column;
		width: 45%;
		overflow-x: hidden;
		overflow-y: hidden;
		height: 100%;
	}

	.cakeRow__item {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		min-height: 4rem;
		margin: 0;
		width: 100%;
	}

	section {
		text-align: left;
		overflow: hidden;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.label {
		text-align: left;
		padding-left: 1rem;
		flex: 1 1 auto;
	}

	.cakeRow__input {
		border: none;
		background: none;
		font-size: 1rem;
		font-family: inherit;
		color: var(--color-text);
		width: 100%;
		border: 1px solid var(--color-frames);
		box-sizing: border-box;
		resize: none;
	}

	.cakeRow__button {
		background-color: white;
		flex: 0 0 6rem;
	}

	.preview {
		width: 0;
		height: 0;
		overflow: hidden;
	}
</style>
