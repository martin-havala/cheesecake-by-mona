<script lang="ts">
	import { Decorations, Style, type CakeDTO } from '$lib/models/cake';

	export let cake: CakeDTO;
	let changeStyle = (e: Event) => {
		cake.style = (e.target as HTMLInputElement).checked ? Style.Inset : Style.Colour;
	};
</script>

<fieldset class='basics'>
	<legend>Basics</legend>

	<div class="inset">
		<label for="style">Render as inset</label>
		<input id="style" type="checkbox" checked={cake.style == Style.Inset} on:change={changeStyle} />
	</div>
	<div class="midSect">
		<label for="midsection">Layer divider</label>
		<input id="midsection" type="checkbox" bind:checked={cake.midSection} />
	</div>
	<div class="decoration">
		<label for="decoration">Decoration</label>
		<select id="decoration" bind:value={cake.decorationType}>
			{#each Object.keys(Decorations)
				.filter((a) => isNaN(+a))
				.map((a, i) => i) as index}
				<option value={index}>{Decorations[index]}</option>
			{/each}
		</select>
	</div>
</fieldset>
