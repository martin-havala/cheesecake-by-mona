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
	<legend>{@html legend} </legend>

	<div class="color-pattern__background">
		<ColorInput bind:activePaletteIndex bind:value={cpProperty.secondaryColor} placeholder="background" />
	</div>
	<div class="color-pattern__foreground">
		<ColorInput bind:activePaletteIndex bind:value={cpProperty.color} placeholder="color" />
	</div>

	<button on:click={exchangeColors} class="color-pattern__exchange-btn">⇋</button>
	<button on:click={(e) => (cpProperty = { pattern: 0 })} class="color-pattern__remove-btn">X</button>

	<div class="color-pattern__pattern">
		<PatternInput bind:value={cpProperty} {area} />
	</div>
</fieldset>

<style lang="less">
	.color-pattern-form {
		position: relative;
	}
	.color-pattern__foreground {
		position: relative;
		top: 0;
		left: 0;
		width: 2rem;
		margin: 0 6rem 1rem 0;
		:global(button) {
			box-shadow: 0 0 1px 3px var(--color-background);
		}
	}

	.color-pattern__background {
		position: absolute;
		top: 0.5rem;
		left: 1rem;
		width: 3rem;
	}
	.color-pattern__exchange-btn {
		position: absolute;
		top: .5rem;
		left: 5rem;
		margin: 0;
		line-height: 1em;
	}
	.color-pattern__remove-btn {
		position: absolute;
		top: .5rem;
		right: .5rem;
		margin: 0;
		line-height: 1em;

	}
	.color-pattern__pattern {
		position: absolute;
		top: 2rem;
		left: 5rem;
		right: .5rem;
		:global(.pattern-input),
		:global(.pattern-input__button) {
			width: 100%;
		}
	}
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
</style>
