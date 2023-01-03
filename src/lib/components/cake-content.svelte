<script lang="ts">
	import { decorationMapper } from '$lib/mappers/decoration.mapper';
	import { patternMapper } from '$lib/mappers/pattern.mapper';
	import { Style, type CakeDTO, type ColorPattern } from '$lib/models/cake';
	import { beforeUpdate } from 'svelte';

	import Basics from './patterns/basics.svelte';

	export let cake: CakeDTO;
	export let id: string = Math.random().toString();

	let bodyUrl: string,
		bodyStrokeUrl: string,
		icingUrl: string,
		icingStrokeUrl: string,
		decorationUrl: string,
		decorationStrokeUrl: string,
		fillingUrl: string,
		fillingTopUrl: string;

	function prepareUrls() {
		bodyUrl = `#body-${id}`;
		bodyStrokeUrl = `#bodyStroke-${id}`;
		icingUrl = isNotEmpty(cake.icing) ? `#icing-${id}` : `#body-${id}`;
		icingStrokeUrl = isNotEmpty(cake.icingStroke) ? `#icingStroke-${id}` : `#bodyStroke-${id}`;
		decorationUrl = isNotEmpty(cake.decoration) ? `#decoration-${id}` : `#body-${id}`;
		decorationStrokeUrl = isNotEmpty(cake.decorationStroke) ? `#decorationStroke-${id}` : `#bodyStroke-${id}`;
		fillingUrl = `#filling-${id}`;
		fillingTopUrl = `#fillingTop-${id}`;
	}

	// for SSR
	prepareUrls();
	beforeUpdate(() => {
		prepareUrls();
	});

	function isNotEmpty(cp: ColorPattern) {
		return cp.color || cp.pattern || cp.secondaryColor;
	}
</script>

<defs>
	{#key cake}
		<svelte:component this={patternMapper(cake.bodyStroke?.pattern)} {id} {cake} area="bodyStroke" />
		<svelte:component this={patternMapper(cake.decorationStroke?.pattern)} {id} {cake} area="decorationStroke" />
		<svelte:component this={patternMapper(cake.body?.pattern)} {id} {cake} area="body" />
		<svelte:component this={patternMapper(cake.icing?.pattern)} {id} {cake} area="icing" />
		<svelte:component this={patternMapper(cake.icingStroke?.pattern)} {id} {cake} area="icingStroke" />
		<svelte:component this={patternMapper(cake.decoration?.pattern)} {id} {cake} area="decoration" />
		<svelte:component this={patternMapper(cake.filling?.pattern)} {id} {cake} area="filling" />
		<svelte:component this={patternMapper(cake.fillingTop?.pattern)} {id} {cake} area="fillingTop" />
		<Basics {id} {cake} />
	{/key}
</defs>
{#key cake}
	{#if cake.style == Style.Inset}
		<path class="bg" d="M110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z" style="fill:url({icingUrl}); " />

		<path
			class="filling"
			d="M285,104.004L285,175C258.947,175 73,175 73,175C67.309,175 62.044,175.107 57.463,174.482C54.015,174.011 51.006,173.181 48.779,171.059C45.415,167.854 44,162.255 44,152.952L44,104.004L285,104.004Z"
			style="fill:{cake.body}; fill:url({bodyUrl});"
		/>

		{#if isNotEmpty(cake.fillingTop)}
			<path
				class="filling-top"
				d="M44,137.004L44,104L285,104L285,137.004L44,137.004Z"
				style="fill:{cake.fillingTop}; fill:url({fillingTopUrl});"
			/>
		{/if}

		{#if isNotEmpty(cake.filling)}
			<path
				class="filling-bottom"
				d="M285,142.004L285,175C258.947,175 73,175 73,175C67.309,175 62.044,175.107 57.463,174.482C54.015,174.011 51.006,173.181 48.779,171.059C45.415,167.854 44,162.255 44,152.952L44,142.004L285,142.004Z"
				style="fill:{cake.filling};fill:url({fillingUrl}) "
			/>
		{/if}

		{#if cake.midSection}
			<rect
				class="mid-section"
				x="44"
				y="137"
				width="241"
				height="5"
				style="fill:{cake.bodyStroke.color}; fill:url({bodyStrokeUrl});"
			/>
		{/if}
	{:else}
		<path
			class="bg"
			d="M37,92h251v90h-251zM110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z"
			style="fill:{cake.body};fill:url({bodyUrl});"
		/>

		{#if isNotEmpty(cake.filling)}
			<rect
				class="filling-bottom"
				x="38"
				y="140"
				width="250"
				height="42"
				style="fill:{cake.filling}; fill:url({fillingUrl});"
			/>
		{/if}

		{#if isNotEmpty(cake.fillingTop)}
			<rect
				class="filling-top"
				x="37"
				y="98"
				width="251"
				height="42"
				style="fill:{cake.fillingTop}; fill:url({fillingTopUrl});"
			/>
		{/if}

		{#if isNotEmpty(cake.icing)}
			<path
				class="icing"
				style="fill:{cake.icing}; fill:url({icingUrl});"
				d="M110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z"
			/>
		{/if}

		{#if cake.midSection}
			<rect
				class="mid-section"
				x="38"
				y="137"
				width="247"
				height="5"
				style="fill:{cake.bodyStroke.color}; fill:url({bodyStrokeUrl});"
			/>
		{/if}
	{/if}

	<path
		class="bodyStroke"
		style="fill:{cake.bodyStroke.color};fill:url({bodyStrokeUrl});"
		d="M288,92L285,92L285,181L73,181C53,181 38,182 38,151L38,92L32,92C32,92 32,166 32,182.223C32,186.878 36.608,192 40.643,192C64.878,192 258.505,192 285,192C287,192 288,191 288,189C288,188 288,92 288,92Z"
	/>

	<path
		class="plate"
		d="M3,190C2.172,190 1.5,189.328 1.5,188.5C1.5,187.672 2.172,187 3,187L16,187C20.557,187 22.935,189.985 25.213,193.118C26.935,195.486 28.555,198 32,198L288,198C291.445,198 293.065,195.486 294.787,193.118C297.065,189.985 299.443,187 304,187L317,187C317.828,187 318.5,187.672 318.5,188.5C318.5,189.328 317.828,190 317,190L304,190C300.555,190 298.935,192.514 297.213,194.882C294.935,198.015 292.557,201 288,201L32,201C27.443,201 25.065,198.015 22.787,194.882C21.065,192.514 19.445,190 16,190L3,190Z"
	/>
	<path
		class="icingStroke"
		d="M112.209,44.309L283.425,86.172C286.374,86.893 288.32,89.703 287.957,92.718C287.594,95.732 285.036,98 282,98L38,98C34.686,98 32,95.314 32,92C32,84.179 36.681,76.138 46.654,68.837C59.106,59.723 80.413,51.205 109.393,44.301C110.319,44.08 111.284,44.083 112.209,44.309ZM110.784,50.138C64.181,61.24 38,76.299 38,92L282,92L110.784,50.138Z"
		style="fill:{cake.icingStroke.color};fill: url({icingStrokeUrl});"
	/>

	<svelte:component this={decorationMapper(cake.decorationType)} {decorationStrokeUrl} {decorationUrl} {cake} />
{/key}
