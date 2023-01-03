<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';

	export let cake: CakeDTO;
	const saveCake = () => {
		if (!!localStorage) {
			localStorage.setItem(`${cake.name}`, JSON.stringify({ ...cake, default: false }));
		}
	};
</script>

<fieldset class="saving">
	<legend>Saving</legend>
	<input bind:value={cake.name} placeholder="Enter the cake name" />
	<button on:click={saveCake} disabled={!cake.name}>Save Cake</button>
</fieldset>
