<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';

	export let cake: CakeDTO;
	let showMessage = false;
	const saveCake = () => {
		if (!!localStorage) {
			localStorage.setItem(`${cake.name}`, JSON.stringify({ ...cake, default: false }));
			showMessage = true;
			setTimeout(() => (showMessage = false), 3_000);
		}
	};
</script>

<fieldset class="saving">
	<legend>Saving</legend>
	<input bind:value={cake.name} placeholder="Enter the cake name" />
	<button on:click={saveCake} disabled={!cake.name}>Save Cake</button>
	{#if showMessage}
		<span class="state">Cake was saved into the local storage!</span>
	{/if}
</fieldset>
