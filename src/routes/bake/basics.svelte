<script lang="ts">
	import { Decoration, Style, type CakeDTO } from '$lib/models/cake';

	export let cake: CakeDTO;
	let changeStyle = (e: Event) => {
		cake.style = (e.target as HTMLInputElement).checked ? Style.Inset : Style.Colour;
	};
</script>

<fieldset class="basics">
	<legend>
		Basics
		<div class="tiny">(won't change in generation)</div>
	</legend>

	<div class="inset">
		<label for="style">Render as inset</label>
		<input id="style" type="checkbox" checked={cake.style == Style.Inset} on:change={changeStyle} />
	</div>
	<div class="midSect">
		<label for="midsection">Layer divider</label>
		<input id="midsection" type="checkbox" bind:checked={cake.midSection} />
	</div>
	<div class="colorOffset">
		<label for="colorOffset">Offset colors</label>
		<input id="colorOffset" type="checkbox" bind:checked={cake.colorOffset} />
	</div>
	<div class="noise">
		<label for="noise">Noise</label>
		<input id="noise" type="checkbox" bind:checked={cake.noise} />
	</div>
	<div class="decoration">
		<label for="decoration">Decoration</label>
		<select id="decoration" bind:value={cake.decorationType}>
			{#each Object.keys(Decoration)
				.filter((a) => isNaN(+a))
				.map((a, i) => i) as index}
				<option value={index}>{Decoration[index]}</option>
			{/each}
		</select>
	</div>
</fieldset>

<style>
	div {
		display: inline-block;
		margin: 0.5rem;
	}
</style>
