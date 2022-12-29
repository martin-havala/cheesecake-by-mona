<script lang="ts">
	import { decorationMapper } from '$lib/helpers/decorationMapper';
	import { patternMapper } from '$lib/helpers/patternMapper';
	import { Patterns, Style, type CakeDTO } from '$lib/models/cake';
	import { afterUpdate } from 'svelte';
	import Basics from './patterns/basics.svelte';

	export let cake: CakeDTO;
	const id = Math.random();
	let backgroundUrl: string, icingUrl: string, decorationUrl: string, fillingUrl: string, fillingTopUrl: string;

	function prepareUrls() {
		backgroundUrl = `#backgroundGradient-${id}`;
		icingUrl = `#${cake.icing.pattern ? Patterns[cake.icing.pattern] : 'icing'}-${id}`;
		decorationUrl = `#${cake.decoration.pattern ? Patterns[cake.decoration.pattern] : 'decoration'}-${id}`;
		fillingUrl = `#${cake.filling.pattern ? Patterns[cake.filling.pattern] : 'filling'}-${id}`;
		fillingTopUrl = `#${cake.fillingTop.pattern ? Patterns[cake.fillingTop.pattern] + '-top' : 'fillingTop'}-${id}`;
	}

	// for SSR
	prepareUrls();
	afterUpdate(() => {
		prepareUrls();
	});
</script>

<svg
	width="100%"
	height="100%"
	viewBox="0 0 320 208"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xml:space="preserve"
	style="
	--background-color-1: {cake.body.color ?? 'rgb(255,201,96)'};
	--background-color-2: {cake.body.secondaryColor ?? cake.body.color ?? 'rgb(205,151,96)'};
	
	--stroke-color-1: {cake.corpus.color ?? 'unset'};
	--stroke-color-2: {cake.corpus.secondaryColor ?? 'unset'};
	
	--icing-color-1: {(cake.icing && cake.icing.color) ?? 'var(--background-color-1)'};
	--icing-color-2: {(cake.icing && cake.icing.secondaryColor) ?? 'var(--icing-color-1)'};	
	
	--decoration-color-1: {(cake.decoration && cake.decoration.color) ?? 'var(--background-color-1)'};
	--decoration-color-2: {(cake.decoration && cake.decoration.secondaryColor) ?? 'var(--decoration-color-1)'};	

	--decoration-stroke-color-1: {(cake.decorationStroke && cake.decorationStroke.color) ?? 'var(--stroke-color-1)'};
	--decoration-stroke-color-2: {(cake.decorationStroke && cake.decorationStroke.secondaryColor) ??
		'var(--decoration-stroke-color-1)'};	
	
	--filling-color-1: {(cake.filling && cake.filling.color) ?? 'var(--background-color-1)'};
	--filling-color-2: {(cake.filling && cake.filling.secondaryColor) ?? 'var(--filling-color-1)'};
	
	--filling-top-color-1: {(cake.fillingTop && cake.fillingTop.color) ?? 'var(--background-color-1)'};
	--filling-top-color-2: {(cake.fillingTop && cake.fillingTop.secondaryColor) ?? 'var(--filling-top-color-1)'};
	"
>
	{#if cake.style == Style.Inset}
		{#if cake.fillingTop.pattern || (cake.fillingTop && cake.fillingTop.color)}
			<path id="filling-top" d="M44,137.004L44,104L285,104L285,137.004L44,137.004Z" style="fill:url({fillingTopUrl})" />
		{/if}

		{#if cake.filling.pattern || (cake.filling && cake.filling.color)}
			{#if !!cake.fillingTop.pattern || (cake.fillingTop && cake.fillingTop.color)}
				<path
					id="filling-bottom"
					d="M285,142.004L285,175C258.947,175 73,175 73,175C67.309,175 62.044,175.107 57.463,174.482C54.015,174.011 51.006,173.181 48.779,171.059C45.415,167.854 44,162.255 44,152.952L44,142.004L285,142.004Z"
					style="fill:url({fillingUrl})"
				/>
			{:else}
				<path
					id="filling-inner"
					d="M285,104.004L285,175C258.947,175 73,175 73,175C67.309,175 62.044,175.107 57.463,174.482C54.015,174.011 51.006,173.181 48.779,171.059C45.415,167.854 44,162.255 44,152.952L44,104.004L285,104.004Z"
					style="fill:url({fillingUrl})"
				/>
			{/if}
		{:else}
			<path
				id="filling-inner"
				d="M285,104.004L285,175C258.947,175 73,175 73,175C67.309,175 62.044,175.107 57.463,174.482C54.015,174.011 51.006,173.181 48.779,171.059C45.415,167.854 44,162.255 44,152.952L44,104.004L285,104.004Z"
				style="fill:url({backgroundUrl})"
			/>
		{/if}
	{:else}
		<rect class="bg" x="37" y="92" width="251" height="90" style="fill:url({backgroundUrl})" />

		{#if cake.filling.pattern || (cake.filling && cake.filling.color)}
			<rect class="filling-bottom" x="37" y="138" width="251" height="46" style="fill:url({fillingUrl})" />
		{/if}

		{#if cake.fillingTop.pattern || (cake.fillingTop && cake.fillingTop.color)}
			<rect class="filling-top" x="37" y="90" width="251" height="48" style="fill:url({fillingTopUrl})" />
		{/if}
	{/if}

	{#if cake.midSection}
		<rect id="mid-section" x="38" y="137" width="247" height="5" style="fill:url(#strokeGradient-{id})" />
	{/if}

	<path
		id="corpus"
		style="fill:url(#strokeGradient-{id});"
		d="M288,92L285,92L285,181L73,181C53,181 38,182 38,151L38,92L32,92C32,92 32,166 32,182.223C32,186.878 36.608,192 40.643,192L288,192L288,92Z"
	/>

	<path id="top" d="M110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z" style="fill:url({icingUrl})" />
	<path
		id="topStroke"
		style="fill:url(#strokeGradient-{id})"
		d="M112.209,44.309L283.425,86.172C286.374,86.893 288.32,89.703 287.957,92.718C287.594,95.732 285.036,98 282,98L38,98C34.686,98 32,95.314 32,92C32,84.179 36.681,76.138 46.654,68.837C59.106,59.723 80.413,51.205 109.393,44.301C110.319,44.08 111.284,44.083 112.209,44.309ZM110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z"
	/>∏
	<svelte:component this={decorationMapper(cake.decorationType)} {id} style={cake.style} />
	<defs>
		{#if cake.icing.pattern}
			<svelte:component this={patternMapper(cake.icing.pattern)} {id} style={cake.style} />
		{/if}
		{#if cake.decoration.pattern}
			<svelte:component this={patternMapper(cake.decoration.pattern)} {id} style={cake.style} />
		{/if}
		{#if cake.decorationStroke.pattern}
			<svelte:component this={patternMapper(cake.decorationStroke.pattern)} {id} style={cake.style} />
		{/if}
		{#if cake.filling.pattern}
			<svelte:component this={patternMapper(cake.filling.pattern)} {id} style={cake.style} />
		{/if}
		{#if cake.fillingTop.pattern}
			<svelte:component this={patternMapper(cake.fillingTop.pattern)} {id} top="true" style={cake.style} />
		{/if}
		<Basics {id} />
	</defs>
</svg>
