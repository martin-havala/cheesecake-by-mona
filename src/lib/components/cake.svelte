<script lang="ts">
	import { decorationMapper } from '$lib/helpers/decorationMapper';
	import { patternMapper } from '$lib/helpers/patternMapper';
	import { Style, type CakeDTO, type ColorPattern } from '$lib/models/cake';
	import { afterUpdate } from 'svelte';
	import Basics from './patterns/basics.svelte';

	export let cake: CakeDTO;
	const id = Math.random();
	let bodyUrl: string,
		corpusUrl: string,
		icingUrl: string,
		decorationUrl: string,
		decorationStrokeUrl: string,
		fillingUrl: string,
		fillingTopUrl: string;

	function prepareUrls() {
		bodyUrl = `#body-${id}`;
		corpusUrl = `#corpus-${id}`;
		icingUrl = `#icing-${id}`;
		decorationUrl = `#decoration-${id}`;
		decorationStrokeUrl = isNotEmpty(cake.decorationStroke) ? `#decorationStroke-${id}` : `#corpus-${id}`;
		fillingUrl = `#filling-${id}`;
		fillingTopUrl = `#fillingTop-${id}`;
	}

	// for SSR
	prepareUrls();
	afterUpdate(() => {
		prepareUrls();
	});

	function isNotEmpty(cp: ColorPattern) {
		return cp.color || cp.pattern || cp.secondaryColor;
	}
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
	--stroke-color-1:            {cake.corpus?.color ?? '#000000'};
	--stroke-color-2:            {cake.corpus?.secondaryColor ?? 'var(--stroke-color-1)'};
	--decorationStroke-color-1:  {cake.decorationStroke?.color ?? 'var(--stroke-color-1)'};
	--decorationStroke-color-2:  {cake.decorationStroke?.secondaryColor ?? 'var(--decorationStroke-color-1)'};

	--background-color-1:        {cake.body?.color ?? 'transparent'};
	--background-color-2:        {cake.body?.secondaryColor ?? 'var(--background-color-1)'};
	--icing-color-1:             {cake.icing?.color ?? 'var(--background-color-1)'};
	--icing-color-2:             {cake.icing?.secondaryColor ?? 'var(--background-color-2)'};
	--decoration-color-1:        {cake.decoration?.color ?? 'var(--background-color-1)'};
	--decoration-color-2:        {cake.decoration?.secondaryColor ?? 'var(--background-color-2)'};
	--filling-color-1:           {cake.filling?.color ?? 'var(--background-color-1)'};
	--filling-color-2:           {cake.filling?.secondaryColor ?? 'var(--background-color-2)'};
	--fillingTop-color-1:        {cake.fillingTop?.color ?? 'var(--background-color-1)'};
	--fillingTop-color-2:        {cake.fillingTop?.secondaryColor ?? 'var(--background-color-2)'};
	"
>
	{#if cake.style == Style.Inset}
		{#if isNotEmpty(cake.icing)}
			<path class="bg" d="M110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z" style="fill:url({icingUrl})" />
		{:else}
			<path class="bg" d="M110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z" style="fill:url({bodyUrl})" />
		{/if}

		{#if isNotEmpty(cake.fillingTop)}
			<path id="filling-top" d="M44,137.004L44,104L285,104L285,137.004L44,137.004Z" style="fill:url({fillingTopUrl})" />
		{/if}

		{#if isNotEmpty(cake.filling)}
			{#if isNotEmpty(cake.fillingTop)}
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
				id="filling"
				d="M285,104.004L285,175C258.947,175 73,175 73,175C67.309,175 62.044,175.107 57.463,174.482C54.015,174.011 51.006,173.181 48.779,171.059C45.415,167.854 44,162.255 44,152.952L44,104.004L285,104.004Z"
				style="fill:url({bodyUrl})"
			/>
		{/if}
	{:else}
		<path
			class="bg"
			d="M37,92h251v90h-251zM110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z"
			style="fill:url({bodyUrl})"
		/>

		{#if isNotEmpty(cake.filling)}
			<rect class="filling-bottom" x="37" y="140" width="251" height="42" style="fill:url({fillingUrl})" />
		{/if}

		{#if isNotEmpty(cake.fillingTop)}
			<rect class="filling-top" x="37" y="98" width="251" height="42" style="fill:url({fillingTopUrl})" />
		{/if}
	{/if}

	{#if cake.midSection}
		<rect id="mid-section" x="38" y="137" width="247" height="5" style="fill:url({corpusUrl})" />
	{/if}

	<path
		class="corpus"
		style="fill:url({corpusUrl});"
		d="M288,92L285,92L285,181L73,181C53,181 38,182 38,151L38,92L32,92C32,92 32,166 32,182.223C32,186.878 36.608,192 40.643,192L288,192L288,92Z"
	/>

	{#if isNotEmpty(cake.icing)}
		<path class="icing" style="fill:url({icingUrl})" d="M110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z" />
	{/if}
	<path
		id="fillingTopStroke"
		style="fill:url({corpusUrl})"
		d="M112.209,44.309L283.425,86.172C286.374,86.893 288.32,89.703 287.957,92.718C287.594,95.732 285.036,98 282,98L38,98C34.686,98 32,95.314 32,92C32,84.179 36.681,76.138 46.654,68.837C59.106,59.723 80.413,51.205 109.393,44.301C110.319,44.08 111.284,44.083 112.209,44.309ZM110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z"
	/>
	<svelte:component this={decorationMapper(cake.decorationType)} {id} {decorationStrokeUrl} {decorationUrl} />
	<defs>
		<svelte:component this={patternMapper(cake.body?.pattern)} {id} area="body" />
		<svelte:component this={patternMapper(cake.corpus?.pattern)} {id} area="corpus" />
		<svelte:component this={patternMapper(cake.icing?.pattern)} {id} area="icing" />
		<svelte:component this={patternMapper(cake.decoration?.pattern)} {id} area="decoration" />
		<svelte:component this={patternMapper(cake.decorationStroke?.pattern)} {id} area="decorationStroke" />
		<svelte:component this={patternMapper(cake.filling?.pattern)} {id} area="filling" />
		<svelte:component this={patternMapper(cake.fillingTop?.pattern)} {id} area="fillingTop" top="true" />
		<Basics {id} />
	</defs>
</svg>
