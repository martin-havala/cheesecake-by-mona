<script lang="ts">
	import { invertColorBW } from '$lib/helpers/invert-color';
	import { PALLETES, PALLETE_KEYS } from '$lib/models/palettes';
	import Palette from '@palette/Palette.svelte';

	export let value: string = '';
	let show = false;
	export let activePaletteIndex = 0;
</script>

<button class="colorInput__btn" style={value ? `background:${value}` : ''} on:click={(e) => (show = !show)}>
	<span class="colorInput__btn--label" style="color:{invertColorBW(value)}"><slot /></span>
</button>

{#if show}
	<Palette
		colors={PALLETES[PALLETE_KEYS[activePaletteIndex]]}
		deletionMode="none"
		on:select={({ detail: { color } }) => {
			show = false;
			value = color;
		}}
		inputType="color"
		showTransparentSlot={true}
	>
		<div slot="header">
			<select bind:value={activePaletteIndex}>
				{#each PALLETE_KEYS as key, index}
					<option value={index} selected={index == activePaletteIndex}>{key}</option>
				{/each}
			</select>
		</div>
		<hr slot="header-divider" class="palette__divider" />
		<div slot="footer" class="palette__footer">
			<input
				type="color"
				bind:value
				on:change={(e) => {
					show = false;
					value = e.currentTarget.value;
				}}
			/>
		</div>
	</Palette>
{/if}

<style>
	.colorInput__btn {
		display: inline-block;
		border-radius: 0.2rem;
		padding: 0.2rem 0.5rem;
		border: 1px solid black;
		background: url("data:image/svg+xml,%3Csvg version='1.1' class='h-4 text-dark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1 '%3E%3Cpath d='M0,0h.5v.5h-.5z M.5,0.5h.5v.5h-.5z' fill='000000' fill-opacity='.3' /%3E%3C/svg%3E");
	}
	.palette__footer {
		width: 100%;
	}
	.palette__footer input {
		width: 100%;
	}
	:global(.palette__root) {
		margin: 0 !important;
		row-gap: 0 !important;
		padding: 0.5rem !important;
	}
	:global(.palette__list) {
		--numCols: 7 !important;
		grid-gap: 0.4rem !important;
	}

	:global(.palette__root) {
		position: absolute;
	}
</style>
