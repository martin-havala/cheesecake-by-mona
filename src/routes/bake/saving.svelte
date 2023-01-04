<script lang="ts">
	import { connect, type byMonaSchema } from '$lib/helpers/indexedDB';
	import type { CakeDTO } from '$lib/models/cake';
	import type { IDBPDatabase } from 'idb';
	import { onDestroy, onMount } from 'svelte';
	let db: Promise<IDBPDatabase<byMonaSchema>>;

	export let cake: CakeDTO;
	let showMessage = false;

	const saveCake = () => {
		db.then((d) => {
			d.put('cakes', cake);
		}).then((_) => {
			showMessage = true;
			setTimeout(() => (showMessage = false), 3_000);
		});
	};
	onMount(() => (db = connect()));
	onDestroy(() => db.then((d) => d.close()));
</script>

<fieldset class="saving">
	<legend>Saving</legend>
	<input bind:value={cake.name} placeholder="Enter the cake name" />
	<button on:click={saveCake} disabled={!cake.name}>Save Cake</button>
	{#if showMessage}
		<span class="state">Cake was saved into the database!</span>
	{/if}
</fieldset>
