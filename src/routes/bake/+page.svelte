<script lang="ts">
	import Cake from '$lib/components/cake.svelte';
	import ColorPatternForm from '$lib/components/color-pattern-form.svelte';
	import { generateCake } from '$lib/helpers/cakeGenerator';
	import { Decorations, Style, type CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';

	import { onMount } from 'svelte';

	let cake!: CakeDTO;

	let ls: Storage | null = null;

	const saveCake = () => {
		!!ls && ls.setItem(`${cake.name}`, JSON.stringify({ ...cake, default: false }));
	};

	onMount(() => {
		typeof localStorage !== `undefined` && (ls = localStorage);
		const data = new URLSearchParams(window.location.search).get('data');
		if (!!data) {
			cake = JSON.parse(decodeURIComponent(data));
		} else {
			cake = generateCake();
		}
	});

	let recreateCake = (paletteIndex?: number) => {
		const defaultCake = {
			...generateCake(true, paletteIndex),
			style: cake.style,
			midSection: cake.midSection,
			decorationType: cake.decorationType
		};
		cake = { ...defaultCake };
	};

	let recreateMonoCake = (light: string = '#ffffff', dark: string = '#000000') => {
		const defaultCake = {
			...generateCake(false),
			style: cake.style,
			midSection: cake.midSection,
			decorationType: cake.decorationType
		};
		cake = {
			...defaultCake,
			body: { ...defaultCake.body, color: dark, secondaryColor: dark },
			icing: { ...defaultCake.icing, color: light, secondaryColor: dark },
			decorationStroke: { ...defaultCake.decorationStroke, color: light, secondaryColor: light },
			decoration: { ...defaultCake.decoration, color: dark, secondaryColor: dark },
			filling: { ...defaultCake.filling, color: light, secondaryColor: dark },
			fillingTop: { ...defaultCake.fillingTop, color: light, secondaryColor: dark },
			corpus: { ...defaultCake.corpus, color: dark, secondaryColor: dark },
			midSection: false,
			style: Style.Inset
		};
	};
	let changeStyle = (e: Event) => {
		cake.style = (e.target as HTMLInputElement).checked ? Style.Inset : Style.Colour;
	};

	let activePaletteIndex = PALLETE_KEYS.findIndex((k) => k == 'Retro');
</script>

<svelte:head>
	<title>Bake a cake</title>
	<meta name="description" content="Generator & editor for cakes" />
</svelte:head>

<section>
	<h1>Let's bake</h1>
	{#if cake}
		<div class="top-pane">
			<form>
				<input bind:value={cake.name} placeholder="Enter cake name" />
				<button on:click={saveCake} disabled={!cake.name}>Save Cake</button>
				<fieldset>
					<legend>Generate</legend>
					<select
						bind:value={activePaletteIndex}
						on:change={(e) => {
							recreateCake(activePaletteIndex);
						}}
					>
						{#each PALLETE_KEYS as key, index}
							<option value={index} selected={index == activePaletteIndex}>{key}</option>
						{/each}
					</select>
					<button on:click={(e) => recreateCake(activePaletteIndex)}>ByPallete</button>
					<button on:click={(e) => recreateCake()}>Random</button>
					<button on:click={(e) => recreateMonoCake()}>Black/White</button>
					<button on:click={(e) => recreateMonoCake('#ffd700')}>Gold</button>
				</fieldset>
				<fieldset>
					<legend>Basics (won't change during randomization)</legend>
					<div class="inset">
						<label for="style">Render as inset</label>
						<input id="style" type="checkbox" checked={cake.style == Style.Inset} on:change={changeStyle} />
					</div>
					<div class="midSect">
						<label for="midsection">Layer divider</label>
						<input id="midsection" type="checkbox" bind:checked={cake.midSection} />
					</div>
					<div class="decoration">
						<label for="decoration">Decoration</label>
						<select id="decoration" bind:value={cake.decorationType}>
							{#each Object.keys(Decorations)
								.filter((a) => isNaN(+a))
								.map((a, i) => i) as index}
								<option value={index}>{Decorations[index]}</option>
							{/each}
						</select>
					</div>
				</fieldset>
			</form>
			<div class="cake">
				<Cake {cake} />
			</div>
		</div>

		<div class="colorPatterns">
			<ColorPatternForm bind:activePaletteIndex legend="Body" bind:cpProperty={cake.body} />
			<ColorPatternForm bind:activePaletteIndex legend="Filling" bind:cpProperty={cake.filling} />
			<ColorPatternForm bind:activePaletteIndex legend="Filling Top" bind:cpProperty={cake.fillingTop} />
			<ColorPatternForm bind:activePaletteIndex legend="Stroke" bind:cpProperty={cake.corpus} />
		</div>
		<div class="colorPatterns">
			<ColorPatternForm bind:activePaletteIndex legend="Icing" bind:cpProperty={cake.icing} />

			<ColorPatternForm bind:activePaletteIndex legend="Decoration" bind:cpProperty={cake.decoration} />
			<ColorPatternForm bind:activePaletteIndex legend="DecorationStroke" bind:cpProperty={cake.decorationStroke} />
		</div>
	{:else}
		<section>Baking random cheesecake...</section>
	{/if}
</section>

<style>
	.top-pane {
		display: flex;
		width: 100%;
	}

	.top-pane form {
		flex: 1 1 50%;
	}
	.colorPatterns {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.colorPatterns :global(> form) {
		flex: 1 0 200px;
	}
	.cake {
		height: 20vh;
		margin-bottom: 2rem;
		flex: 1 1 50%;
	}
</style>
