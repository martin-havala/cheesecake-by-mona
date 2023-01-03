<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';

	export let decorationUrl = '';
	export let decorationStrokeUrl = '';
	export let cake: CakeDTO;
</script>

<g class="coco-chips">
	<path
		d="M125.875,65.803C128.208,58.619 116.746,48.472 100.272,43.14C88.284,39.26 76.444,38.886 70.214,42.193L88.244,51.933C90.125,50.934 93.702,51.047 97.323,52.219C102.299,53.83 105.762,56.895 105.057,59.065L125.875,65.803Z"
		style="fill:{cake.decoration ??
			cake.body}; fill:url({decorationUrl}) transparent; stroke:{cake.decorationStroke ?? cake.bodyStroke}; stroke:url({decorationStrokeUrl}) transparent; stroke-width:1"
	/>
	<path
		d="M68.468,41.249C68.651,40.911 68.932,40.626 69.284,40.439C75.832,36.964 88.282,37.173 100.883,41.252C111.169,44.581 119.55,49.76 124.106,54.948C127.589,58.914 128.876,62.986 127.763,66.414L125.875,65.803C128.208,58.619 116.746,48.472 100.272,43.14C88.284,39.26 76.444,38.886 70.214,42.193L68.468,41.249Z"
		style="fill:{cake.decorationStroke ?? cake.bodyStroke}; fill:url({decorationStrokeUrl}) transparent"
	/>
</g>
<g>
	<path
		d="M119.025,73.169C120.79,63.831 104.867,52.999 83.458,48.974C67.879,46.045 53.044,47.468 45.798,52.588L69.851,61.866C72.04,60.319 76.521,59.889 81.227,60.774C87.694,61.99 92.504,65.262 91.971,68.083L119.025,73.169Z"
		style="fill:{cake.decoration ??
			cake.body}; fill:url({decorationUrl}) transparent; stroke:{cake.decorationStroke ?? cake.bodyStroke}; stroke:url({decorationStrokeUrl}) transparent; stroke-width:1"
	/>
	<path
		d="M43.468,51.69C43.642,51.238 43.947,50.838 44.357,50.549C51.974,45.167 67.544,43.441 83.92,46.52C97.286,49.033 108.572,54.158 115.086,59.905C120.065,64.298 122.32,69.174 121.479,73.63L119.025,73.169C120.79,63.831 104.867,52.999 83.458,48.974C67.879,46.045 53.044,47.468 45.798,52.588L43.468,51.69Z"
		style="fill:{cake.decorationStroke ?? cake.bodyStroke}; fill:url({decorationStrokeUrl}) transparent"
	/>
</g>
<g>
	<path
		d="M114.404,81.463C114.63,70.097 93.69,60.485 67.635,59.996C48.673,59.64 31.457,64.271 23.927,71.752L54.147,77.912C56.422,75.652 61.623,74.253 67.35,74.36C75.221,74.508 81.546,77.411 81.478,80.845L114.404,81.463Z"
		style="fill:{cake.decoration ??
			cake.body}; fill:url({decorationUrl}) transparent; stroke:{cake.decorationStroke ?? cake.bodyStroke}; stroke:url({decorationStrokeUrl}) transparent; stroke-width:1"
	/>
	<path
		d="M21,71.156C21.116,70.588 21.396,70.056 21.822,69.633C29.736,61.769 47.76,56.635 67.691,57.01C83.959,57.315 98.291,61.116 107.119,66.6C113.867,70.792 117.497,76.095 117.391,81.519L114.404,81.463C114.63,70.097 93.69,60.485 67.635,59.996C48.673,59.64 31.457,64.271 23.927,71.752L21,71.156Z"
		style="fill:{cake.decorationStroke ?? cake.bodyStroke}; fill:url({decorationStrokeUrl}) transparent"
	/>
</g>
