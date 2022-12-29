<script lang="ts">
	import Cake from '$lib/components/cake.svelte';
	import ColorPatternForm from '$lib/components/color-pattern-form.svelte';
	import { generateCake } from '$lib/helpers/cakeGenerator';
	import { Decorations, Style, type CakeDTO } from '$lib/models/cake';

	import { onMount } from 'svelte';

	let cake!: CakeDTO;
	let fancy = false;
	let toggleFancy = () => (fancy = !fancy);

	let ls: Storage | null = null;

	const saveCake = () => {
		!!ls && ls.setItem(`${cake.name}`, JSON.stringify(cake));
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

	let recreateCake = () => {
		cake = { ...generateCake(false), style: cake.style, midSection: cake.midSection };
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
</script>

<svelte:head>
	<title>Bake</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<h1>Let's bake</h1>
	{#if cake}
		<div class="cake">
			<Cake bind:cake />
		</div>

		<form>
			<input bind:value={cake.name} placeholder="Enter cake name" />
			<button on:click={saveCake} disabled={!cake.name}>Save Cake</button>
			<button on:click={recreateCake}>Generate new cake</button>
			<button on:click={(e) => recreateMonoCake()}>Black White</button>
			<button on:click={(e) => recreateMonoCake('#ffd700')}>Generate noir</button>
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

		<div class="colorPatterns">
			<ColorPatternForm legend="Body" bind:cpProperty={cake.body} />
			<ColorPatternForm legend="Filling" bind:cpProperty={cake.filling} />
			<ColorPatternForm legend="Filling Top" bind:cpProperty={cake.fillingTop} />
		</div>

		<hr />
		{#if fancy}
			<button on:click={toggleFancy}>Hide Fancy Stuff</button>
			<div class="colorPatterns">
				<ColorPatternForm legend="Icing" bind:cpProperty={cake.icing} />
				<ColorPatternForm legend="Stroke" bind:cpProperty={cake.corpus} />

				<ColorPatternForm legend="Decoration" bind:cpProperty={cake.decoration} />
				<ColorPatternForm legend="DecorationStroke" bind:cpProperty={cake.decorationStroke} />
			</div>
		{:else}
			<button on:click={toggleFancy}>Show Fancy Stuff</button>
		{/if}
	{:else}
		<section>Baking random cheesecake...</section>
	{/if}
</section>

<style>
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
	}
</style>
