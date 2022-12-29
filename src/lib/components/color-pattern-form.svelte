<script lang="ts">
	import { Patterns, type ColorPattern } from '$lib/models/cake';
	export let cpProperty: ColorPattern = {};
	export let legend: string;

	let getInputValue = (e: Event) => (e.target as HTMLInputElement).value;
	const exchangeColors = () => ([cpProperty.secondaryColor, cpProperty.color] = [cpProperty.color, cpProperty.secondaryColor]);
</script>

<form>
	<fieldset>
		<legend>{@html legend} <button on:click={(e) => (cpProperty = {})}>Remove</button></legend>

		<div class="collor">
			<label for="{legend}-color">color1</label>
			<input id="{legend}-color" type="color" bind:value={cpProperty.color} class={cpProperty.color ? 'filled' : 'empty'} />
			<button on:click={(e) => (cpProperty.color = undefined)}>Remove</button>
		</div>
		<div class="bottomCollor">
			<label for="{legend}-color2">color2</label>
			<input
				id="{legend}-color2"
				required={false}
				type="color"
				bind:value={cpProperty.secondaryColor}
				class={cpProperty.secondaryColor ? 'filled' : 'empty'}
			/>
			<button on:click={(e) => (cpProperty.secondaryColor = undefined)}>Remove</button>
			<button on:click={exchangeColors}>Switch</button>
		</div>

		<div class="pattern">
			<label for="{legend}-pattern">pattern</label>
			<select id="{legend}-pattern" value={cpProperty.pattern} on:change={(e) => (cpProperty.pattern = +getInputValue(e))}>
				{#each Object.values(Patterns)
					.filter((a) => isNaN(+a))
					.map((a, i) => i) as index}
					<option value={index}>{Patterns[index]}</option>
				{/each}
			</select>
		</div>
	</fieldset>
</form>

<style>
	input[type='color'].empty::-webkit-color-swatch {
		background: url("data:image/svg+xml,%3Csvg version='1.1' class='h-4 text-dark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2 '%3E%3Cpath d='M0,0h1v1h-1zM1,1h1v1h-1zM2,0h1v1h-1z' fill='000000' fill-opacity='.3' /%3E%3C/svg%3E") !important;
	}
</style>
