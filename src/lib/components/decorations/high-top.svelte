<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';

	export let decorationUrl = '';
	export let decorationStrokeUrl = '';
	export let cake: CakeDTO;
</script>

<g class="high-top">
	<path
		d="M109.784,43.138C85,47 38,68 38,89C38,92 44,92 44,89C44,68 98,48 118,46C118,42 115,42.325 109.784,43.138Z"
		style="fill:{cake.decoration.color ?? cake.bodyStroke.color}; fill:url({decorationUrl}) transparent"
	/>

	<path
		d="M108.86,37.209C112.323,36.669 115.075,36.479 116.97,36.868C118.862,37.257 120.334,38.088 121.479,39.247C122.888,40.672 124,42.743 124,46C124,49.083 121.664,51.664 118.597,51.97C107.148,53.115 84.045,60.506 67.376,70.512C62.107,73.675 57.49,77.084 54.219,80.688C51.746,83.413 50,86.127 50,89C50,93.884 45.884,97.25 41,97.25C36.116,97.25 32,93.884 32,89C32,81.255 36.74,73.247 44.843,66.071C60.999,51.763 90.635,40.049 108.86,37.209ZM109.784,43.138C85,47 38,68 38,89C38,92 44,92 44,89C44,68 98,48 118,46C118,42 115,42.325 109.784,43.138Z"
		style="fill:{cake.decoration.secondaryColor ?? cake.bodyStroke.secondaryColor}; fill:url({decorationStrokeUrl}) transparent"
	/>
</g>
