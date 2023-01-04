<script lang="ts">
	import Cake from '$lib/components/cake.svelte';
	import Print from '$lib/components/print.svelte';
	import { getBakeUrl } from '$lib/helpers/bake-url';
	import { downloadSVG } from '$lib/helpers/download-SVG';
	import { connect, type byMonaSchema } from '$lib/helpers/indexedDB';
	import type { CakeDTO } from '$lib/models/cake';
	import type { IDBPDatabase } from 'idb';
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let cakeList: CakeDTO[] = [];
	let printList: CakeDTO[] = [];
	let db: Promise<IDBPDatabase<byMonaSchema>>;

	const saveCake = (cake: CakeDTO, printOrder: number) => {
		db.then((db) => db.put('cakes', { ...cake, printOrder })).then((_) => reloadList());
	};

	const removePrint = (cake: CakeDTO) => {
		db.then((db) => db.delete('cakes', cake.id ?? -1)).then((_) => reloadList());
	};

	const printCake = (cake: CakeDTO) => {
		saveCake({ ...cake, id: undefined }, (printList.at(-1)?.printOrder ?? 0) + 1);
	};

	const removeCake = (cake: CakeDTO) => {
		db.then((db) => db.delete('cakes', cake.id ?? -1)).then((_) => reloadList());
	};

	function reloadList() {
		db.then((db) => {
			db.getAllFromIndex('cakes', 'byName').then((cakes) => {
				[cakeList, printList] = cakes.reduce(
					(ac, cake) => {
						return !cake.printOrder ? [[...ac[0], cake], ac[1]] : [ac[0], [...ac[1], cake]];
					},
					[[] as CakeDTO[], [] as CakeDTO[]]
				);
			});
		});
	}

	onMount(() => {
		db = connect();
		reloadList();
	});

	onDestroy(() => db.then((d) => d.close()));
</script>

<svelte:head>
	<title>Menu</title>
	<meta name="description" content="Menu generator" />
</svelte:head>

{#await db then}
	<section>
		<h1>Menu generator</h1>
		<div class="menu">
			<div class="cakeList">
				<div class="menu-header">
					Stored in memory:
					<div class="tiny">(Click on image to select it for printing)</div>
				</div>

				<div class="menu-list">
					{#each cakeList as cake, index}
						<div class="cakeRow" in:fly={{ y: -50, duration: 500, delay: 50 * index }}>
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
									<button class="" on:click={(e) => removeCake(cake)}> Delete </button>
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

					{#each printList as cake, index}
						<div class="cakeRow" in:fly={{ y: -50, duration: 500, delay: 50 * index }}>
							<div class="cakeRow__item">
								<button class="cakeRow__button superflat flat" on:click={(e) => removePrint(cake)}>
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
											removePrint(cake);
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
{/await}

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
