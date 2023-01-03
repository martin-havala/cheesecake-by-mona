<script lang="ts">
	import type { ColorPattern } from '$lib/models/cake';
	import ColorInput from './color-input.svelte';
	import PatternInput from './pattern-input.svelte';

	export let cpProperty: ColorPattern = { pattern: 0 };
	export let activePaletteIndex = 0;
	export let legend: string;
	export let area: string;

	const exchangeColors = () => ([cpProperty.secondaryColor, cpProperty.color] = [cpProperty.color, cpProperty.secondaryColor]);
</script>

<fieldset class="color-pattern-form">
	<legend>{@html legend} <button on:click={(e) => (cpProperty = { pattern: 0 })}>Remove</button></legend>

	<ColorInput bind:activePaletteIndex bind:value={cpProperty.color}>color1</ColorInput>
	<button on:click={exchangeColors}>⇋</button>
	<ColorInput bind:activePaletteIndex bind:value={cpProperty.secondaryColor}>color 2</ColorInput>

	<PatternInput bind:value={cpProperty} {area}/>
</fieldset>

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
