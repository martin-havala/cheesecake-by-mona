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
		corpus: {},
		style: 0,
		body: colorPattern,
		decorationStroke: {},
		decoration: {},
		icing: {},
		filling: {},
		fillingTop: {},
		midSection: true,
		name: ''
	};
	const patterns: any[] = [];
	for (let pattern of Object.keys(Pattern).filter((a) => isNaN(+a))) {
		Pattern[pattern as any] && patterns.push(Pattern[pattern as any]);
	}
</script>

<div class="pattern-input">
	<button on:click={(e) => (show = !show)} class="pattern-input__button">
		{#if !value.pattern}
			<div class="pattern-input__placeholder">pattern</div>
		{/if}
		<svg viewBox="0 0 50 25">
			<svelte:component this={patternMapper(value.pattern)} {id} {cake} {area} />
			<rect x="0" y="0" width="100%" height="100%" style="fill:url(#{area}-{id})" />
		</svg>
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
