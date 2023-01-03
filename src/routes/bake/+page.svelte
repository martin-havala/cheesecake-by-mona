<script lang="ts">
	import ColorPatternForm from '$lib/components/color-pattern-form.svelte';
	import { DEFAULT_CAKES } from '$lib/constants/default-cakes';
	import type { CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';

	import Basics from './basics.svelte';
	import Generate from './generate.svelte';
	import Preview from './preview.svelte';
	import Saving from './saving.svelte';

	let cake: CakeDTO = DEFAULT_CAKES[0];
	let activePaletteIndex = PALLETE_KEYS.findIndex((k) => k == 'Retro');
</script>

<svelte:head>
	<title>Bake a cake</title>
	<meta name="description" content="Generator & editor for cakes" />
</svelte:head>

<section>
	<h1>Let's bake</h1>
	<div class="page__contents">
		<Preview bind:cake />

		<div class="params">
			<div class="general">
				<Saving bind:cake />
				<div class="colorPattern">
					<Generate bind:cake bind:activePaletteIndex />
					<Basics bind:cake />
				</div>
			</div>
			<div class="colorPattern">
				<ColorPatternForm bind:activePaletteIndex legend="Body" bind:cpProperty={cake.body} area={'body'} />
				<ColorPatternForm bind:activePaletteIndex legend="Stroke" bind:cpProperty={cake.bodyStroke} area={'bodyStroke'} />
			</div>
			<div class="colorPattern">
				<ColorPatternForm bind:activePaletteIndex legend="Filling" bind:cpProperty={cake.filling} area={'filling'} />
				<ColorPatternForm bind:activePaletteIndex legend="Filling Top" bind:cpProperty={cake.fillingTop} area={'fillingTop'} />
			</div>
			<div class="colorPattern">
				<ColorPatternForm bind:activePaletteIndex legend="Icing" bind:cpProperty={cake.icing} area={'icing'} />
				<ColorPatternForm
					bind:activePaletteIndex
					legend="Icing Stroke"
					bind:cpProperty={cake.icingStroke}
					area={'icingStroke'}
				/>
			</div>

			<div class="colorPattern">
				<ColorPatternForm bind:activePaletteIndex legend="Decoration" bind:cpProperty={cake.decoration} area={'decoration'} />
				<ColorPatternForm
					bind:activePaletteIndex
					legend="Decoration stroke"
					bind:cpProperty={cake.decorationStroke}
					area={'decorationStroke'}
				/>
			</div>
		</div>
	</div>
</section>

<style lang="less">
	section {
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		text-align: left;
	}
	.page__contents {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.params {
		grid-area: params;
		overflow: auto;
	}
	.general {
		grid-area: general;
	}

	:global(.preview) {
		grid-area: preview;
		position: sticky;
		top: 0;
	}
	:global(.preview__svg) {
		width: clamp(10vmin, 100vh, 250px) !important;
	}
	:global(.page__contents) {
		@media screen and (max-width: 600px) {
			display: grid;

			grid-template-areas:
				'preview'
				'general'
				'params';
		}

		@media screen and (min-width: 600.00000001px) {
			display: grid;

			grid-template-areas: 'params preview';
			grid-template-columns: 4fr 1fr;
		}

		:global(.saving),
		:global(.basics),
		:global(.generate) {
			flex: 1 1 30%;
		}
	}

	.colorPattern {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
	}
</style>
