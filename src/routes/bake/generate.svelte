<script lang="ts">
	import { generateCake } from '$lib/helpers/cake-generator';
	import { Style, type CakeDTO } from '$lib/models/cake';
	import { PALLETE_KEYS } from '$lib/models/palettes';

	import { onMount } from 'svelte';

	export let cake: CakeDTO;
	export let activePaletteIndex = PALLETE_KEYS.findIndex((k) => k == 'Retro');

	onMount(() => {
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
			bodyStroke: { ...defaultCake.bodyStroke, color: dark, secondaryColor: dark },
			icing: { ...defaultCake.icing, color: light, secondaryColor: dark },
			icingStroke: { ...defaultCake.icingStroke, color: dark, secondaryColor: dark },
			decoration: { ...defaultCake.decoration, color: dark, secondaryColor: dark },
			decorationStroke: { ...defaultCake.decorationStroke, color: light, secondaryColor: light },
			filling: { ...defaultCake.filling, color: light, secondaryColor: dark },
			fillingTop: { ...defaultCake.fillingTop, color: light, secondaryColor: dark },
			midSection: false,
			style: Style.Inset
		};
	};
</script>

<fieldset class="generate">
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
	<br />
	<button on:click={(e) => recreateCake()}>Random</button>
	<button on:click={(e) => recreateMonoCake()}>Black/White</button>
	<button on:click={(e) => recreateMonoCake('#ffd700')}>Gold</button>
</fieldset>
