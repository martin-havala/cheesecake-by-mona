<script lang="ts">
	import { patternMapper } from '$lib/mappers/pattern.mapper';
	import { Pattern, type CakeDTO, type ColorPattern } from '$lib/models/cake';

	export let id: string = performance.now().toString();
	export let value: ColorPattern;
	export let area: string = 'body';
	let show = false;
	export let colorPattern: ColorPattern = { color: 'black', secondaryColor: 'white' };
	const cake: CakeDTO = {
		decorationType: 1,
		style: 0,
		body: colorPattern,
		bodyStroke: colorPattern,
		decorationStroke: {},
		decoration: {},
		icing: {},
		icingStroke: {},
		filling: {},
		fillingTop: {},
		midSection: true,
		name: ''
	};
	const patterns: any[] = [];
	for (let pattern of Object.keys(Pattern).filter((a) => isNaN(+a))) {
		Pattern[pattern as any] && patterns.push(Pattern[pattern as any]);
	}

	function validateClick(e: Event) {
		if ((e.target as HTMLElement).querySelector('.pattern-input')) {
			show = false;
		}
	}

	function drag(e: DragEvent) {
		e.dataTransfer?.setData('text', `${value.pattern}`);
	}

	function drop(e: DragEvent) {
		e.preventDefault();
		e.stopPropagation();
		const data = +(e.dataTransfer?.getData('text') ?? ')');
		if (!isNaN(data)) {
			value = { ...value, pattern: +data };
		}
	}
</script>

<div class="pattern-input">
	<button
		on:click={(e) => (show = !show)}
		class="pattern-input__button"
		draggable="true"
		on:dragstart={drag}
		on:drop={drop}
		on:dragover={(ev) => {
			ev.preventDefault();
		}}
	>
		{#if !value.pattern}
			<div class="pattern-input__placeholder">pattern</div>
		{:else}
			<svg viewBox="0 0 50 25">
				<svelte:component this={patternMapper(value.pattern)} {id} {cake} {area} />
				<rect x="0" y="0" width="100%" height="100%" style="fill:url(#{area}-{id})" />
			</svg>
		{/if}
	</button>
	{#if show}
		<div class="pattern-list">
			<button
				on:click={(e) => {
					value.pattern = undefined;
					show = false;
				}}
			>
				empty
			</button>

			{#each patterns as pattern, index}
				<button
					on:click={(e) => {
						value.pattern = pattern;
						show = false;
					}}
				>
					<svg>
						<svelte:component this={patternMapper(pattern)} id="{id}-{index}" {cake} area="body" />
						<rect x="0" y="0" width="100%" height="100%" style="fill:url(#body-{id}-{index})" />
					</svg>
				</button>
			{/each}
		</div>
	{/if}
</div>

<svelte:window on:click={validateClick} />

<style>
	.pattern-input {
		position: relative;
		height: 100%;
		display: inline-block;
		vertical-align: bottom;
		align-items: center;
	}
	.pattern-input__button {
		width: 3rem;
		height: 1.5rem;
		overflow: hidden;
		position: relative;
		border-radius: var(--border-radius);
	}
	.pattern-input__button svg,
	.pattern-input__button div {
		position: absolute;
		top: 0;
		left: 0;
		width: 3rem;
		height: 1.5rem;
		line-height: 1.5rem;
	}

	.pattern-list {
		min-width: 12rem;
		position: absolute;
		right: 0;
		background: var(--color-background);
		padding: 0.5rem;
		border: 1px solid var(--color-frames);
		display: flex;
		flex-flow: row wrap;
		justify-content: stretch;
		z-index: 100;
	}
	.pattern-list svg {
		margin: 0;
		padding: 0;
	}
	button {
		padding: 0px;
		margin: 0rem;
		width: 3rem;
		height: 1.5rem;
		overflow: hidden;
	}
</style>
