<script lang="ts">
	import { invertColorBW } from '$lib/helpers/invert-color';
	import { PALLETES, PALLETE_KEYS } from '$lib/models/palettes';
	import Palette from '@palette/Palette.svelte';

	export let value: string = '';
	export let placeholder: string = '';
	let show = false;
	export let activePaletteIndex = 0;

	function drag(e: DragEvent) {
		e.dataTransfer?.setData('text', value);
	}

	function drop(e: DragEvent) {
		e.preventDefault();
		e.stopPropagation();
		const data = e.dataTransfer?.getData('text') ?? '';
		if (/#[\dabcdef]{6}/i.test(data)) value = data;
	}

	function validateClick(e: Event) {
		if ((e.target as HTMLElement).querySelector('.color-input__palette')) {
			show = false;
		}
	}
</script>

<svelte:window on:click={validateClick} />

<button
	class="color-input__btn"
	style={value ? `background:${value}` : ''}
	draggable="true"
	title={placeholder}
	on:click={(e) => (show = !show)}
	on:dragstart={drag}
	on:drop={drop}
	on:dragover={(ev) => {
		ev.preventDefault();
	}}
>
	<span class="color-input__btn--label" style="color:{invertColorBW(value)}"><slot /></span>
</button>
<div class="color-input__palette">
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
						<option value={index} selected={index == activePaletteIndex}>{key} </option>
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
</div>

<style>
	.color-input__btn {
		display: inline-block;
		border-radius: 0.2rem;
		padding: 0.2rem 0.5rem;
		border: 1px solid black;
		border-radius: 50%;
		aspect-ratio: 1;
		width: 100%;
		background: url("data:image/svg+xml,%3Csvg version='1.1' class='h-4 text-dark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1 '%3E%3Cpath d='M0,0h.5v.5h-.5z M.5,0.5h.5v.5h-.5z' fill='000000' fill-opacity='.3' /%3E%3C/svg%3E");
	}
	.color-input__palette {
		position: relative;
		display: inline;
		z-index: 100;
	}
	.palette__footer {
		width: 100%;
	}
	.palette__footer input {
		width: 100%;
	}
	:global(.palette__divider) {
		width: 100% !important;
		margin-left: 0 !important;
		border: none;
		border-bottom: 1px solid var(--color-frames) !important;
	}
	:global(.palette__root) {
		margin: 0 !important;
		row-gap: 0 !important;
		padding: 0.5rem !important;
		background: var(--color-background) !important;
		border: 1px solid var(--color-frames);
		z-index: 1;
	}
	:global(.palette__list) {
		--numCols: 7 !important;
		grid-gap: 0.4rem !important;
	}

	:global(.palette__root) {
		position: absolute;
	}
	:global(.tooltip__button) {
		display: none;
	}
</style>
