<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';

	export let decorationUrl = '';
	export let decorationStrokeUrl = '';
	export let cake: CakeDTO;
</script>

<g class="heart">
	<path
		class="heart-shadow"
		d="M115.115,73.263C115.628,76.084 112.159,76.781 112.159,76.781C112.158,76.781 112.154,76.781 112.149,76.781L88.768,76.702C88.637,76.702 88.506,76.693 88.377,76.675L68.377,73.973C67.612,73.87 66.917,73.476 66.436,72.874L58.436,62.874C57.786,62.062 57.603,60.971 57.953,59.991L62.953,45.991C63.388,44.772 64.556,43.97 65.85,44.001L83.531,44.422L84.049,40.807C84.179,39.897 84.719,39.098 85.514,38.637L96.264,32.405C97.028,31.962 97.949,31.878 98.78,32.176L109.316,35.95C110.046,36.212 110.647,36.747 110.992,37.443L117.043,49.655C117.294,50.161 117.396,50.727 117.34,51.289L115.115,73.263Z"
		style="fill:{cake.decorationStroke ?? cake.bodyStroke}; fill:url({decorationStrokeUrl}) transparent;"
	/>
	<path
		class="heart-back"
		d="M85.779,49.882L98.542,70.992L112.055,73.702L114.355,50.987L108.304,38.775L97.768,35L87.018,41.232L85.779,49.882Z"
		style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
	/>
	<path
		class="heart-front"
		d="M60.778,61L68.778,71L88.778,73.702L112.159,73.781L107.625,54.05L86.123,47.484L65.778,47L60.778,61Z"
		style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
	/>
	<path
		class="heart-front"
		d="M60.778,61L68.778,71L88.778,73.702L112.159,73.781L107.625,54.05L86.123,47.484L65.778,47L60.778,61Z"
		style="fill:none;stroke:{cake.decorationStroke ??
			cake.bodyStroke}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:2"
	/>
</g>
