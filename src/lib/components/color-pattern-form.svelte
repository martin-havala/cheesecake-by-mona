<script lang="ts">
	import { Patterns, type ColorPattern } from '$lib/models/cake';
	import ColorInput from './color-input.svelte';

	export let cpProperty: ColorPattern = {};
	export let activePaletteIndex = 0;
	export let legend: string;

	let getInputValue = (e: Event) => (e.target as HTMLInputElement).value;
	const exchangeColors = () => ([cpProperty.secondaryColor, cpProperty.color] = [cpProperty.color, cpProperty.secondaryColor]);
</script>

<form>
	<fieldset>
		<legend>{@html legend} <button on:click={(e) => (cpProperty = {})}>Remove</button></legend>

		<ColorInput bind:activePaletteIndex bind:value={cpProperty.color}>color1</ColorInput>
		<button on:click={exchangeColors}>⇋</button>
		<ColorInput bind:activePaletteIndex bind:value={cpProperty.secondaryColor}>color 2</ColorInput>

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
	.palette__slot {
		cursor: pointer;
		width: 2rem;
		height: 2rem;
		margin: 0;
		background-color: var(--color);
		border-radius: 20%;
		border: 1px solid rgba(0, 0, 0, 0.2);
		box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
	}

	fieldset > :global(.tooltip__button) {
		display: none;
	}
	.pattern {
		margin-top: 0.5rem;
	}
</style>
