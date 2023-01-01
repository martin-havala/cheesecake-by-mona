<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';

	export let decorationUrl = '';
	export let decorationStrokeUrl = '';
	export let cake: CakeDTO;
</script>

<g class="cones">
	<g class="cone">
		<path
			d="M105.366,35C112.628,46.302 121.626,42.175 121.626,52.425C121.626,54.516 119.303,58.575 116.98,58.575C116.476,49.795 106.441,43.127 105.366,35Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M105.366,35C112.628,46.302 121.626,42.175 121.626,52.425C121.626,54.516 119.303,58.575 116.98,58.575C116.476,49.795 106.441,43.127 105.366,35Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M105.366,35C103.276,46.965 118.592,47.934 111.173,60.625C113.595,62.876 116.183,60.102 116.98,58.575C121.626,46.275 106.441,43.127 105.366,35Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M105.366,35C103.276,46.965 118.592,47.934 111.173,60.625C113.595,62.876 116.183,60.102 116.98,58.575C121.626,46.275 106.441,43.127 105.366,35Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M105.366,35C100.72,48.325 114.657,49.35 104.204,60.625C106.626,62.876 110.376,62.152 111.173,60.625C118.141,51.4 104.204,44.225 105.366,35Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M105.366,35C100.72,48.325 114.657,49.35 104.204,60.625C106.626,62.876 110.376,62.152 111.173,60.625C118.141,51.4 104.204,44.225 105.366,35Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M105.366,35C91.428,39.1 90.267,44.225 86.783,50.375C86.048,51.671 84.653,54.475 89.298,53.45C96.267,44.225 100.72,47.3 105.366,35Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M105.366,35C91.428,39.1 90.267,44.225 86.783,50.375C86.048,51.671 84.653,54.475 89.298,53.45C96.267,44.225 100.72,47.3 105.366,35Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M105.366,35C93.751,37.05 94.913,49.35 88.596,52.962C85.839,54.538 89.106,58.575 93.751,57.55C100.72,48.325 100.72,47.3 105.366,35Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M105.366,35C93.751,37.05 94.913,49.35 88.596,52.962C85.839,54.538 89.106,58.575 93.751,57.55C100.72,48.325 100.72,47.3 105.366,35Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M105.366,35C93.751,44.225 99.558,50.375 91.428,56.525C87.534,59.471 95.29,62.785 97.745,60.088C104.714,50.863 100.72,47.3 105.366,35Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M105.366,35C93.751,44.225 99.558,50.375 91.428,56.525C87.534,59.471 95.29,62.785 97.745,60.088C104.714,50.863 100.72,47.3 105.366,35Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M105.366,35C95.525,46.749 107.308,50.95 97.236,60.625C94.402,63.346 102.346,63.7 104.204,61.65C113.496,51.4 99.558,45.25 105.366,35Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M105.366,35C95.525,46.749 107.308,50.95 97.236,60.625C94.402,63.346 102.346,63.7 104.204,61.65C113.496,51.4 99.558,45.25 105.366,35Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
	</g>
	<g class="cone1">
		<path
			d="M81.813,37C91.869,52.648 104.326,46.934 104.326,61.126C104.326,64.021 101.11,69.641 97.894,69.641C97.196,57.485 83.302,48.253 81.813,37Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M81.813,37C91.869,52.648 104.326,46.934 104.326,61.126C104.326,64.021 101.11,69.641 97.894,69.641C97.196,57.485 83.302,48.253 81.813,37Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M81.813,37C78.919,53.566 100.126,54.908 89.853,72.479C93.207,75.596 96.79,71.755 97.894,69.641C104.326,52.611 83.302,48.253 81.813,37Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M81.813,37C78.919,53.566 100.126,54.908 89.853,72.479C93.207,75.596 96.79,71.755 97.894,69.641C104.326,52.611 83.302,48.253 81.813,37Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M81.813,37C75.381,55.449 94.678,56.868 80.205,72.479C83.558,75.596 88.75,74.593 89.853,72.479C99.502,59.707 80.205,49.773 81.813,37Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M81.813,37C75.381,55.449 94.678,56.868 80.205,72.479C83.558,75.596 88.75,74.593 89.853,72.479C99.502,59.707 80.205,49.773 81.813,37Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M81.813,37C62.516,42.677 60.908,49.773 56.084,58.288C55.067,60.083 53.134,63.964 59.567,62.545C69.215,49.773 75.381,54.03 81.813,37Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M81.813,37C62.516,42.677 60.908,49.773 56.084,58.288C55.067,60.083 53.134,63.964 59.567,62.545C69.215,49.773 75.381,54.03 81.813,37Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M81.813,37C65.732,39.838 67.34,56.868 58.594,61.869C54.777,64.051 59.3,69.641 65.732,68.222C75.381,55.449 75.381,54.03 81.813,37Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M81.813,37C65.732,39.838 67.34,56.868 58.594,61.869C54.777,64.051 59.3,69.641 65.732,68.222C75.381,55.449 75.381,54.03 81.813,37Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M81.813,37C65.732,49.773 73.773,58.288 62.516,66.803C57.124,70.881 67.862,75.47 71.262,71.736C80.911,58.964 75.381,54.03 81.813,37Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M81.813,37C65.732,49.773 73.773,58.288 62.516,66.803C57.124,70.881 67.862,75.47 71.262,71.736C80.911,58.964 75.381,54.03 81.813,37Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M81.813,37C68.188,53.267 84.503,59.084 70.556,72.479C66.633,76.247 77.632,76.737 80.205,73.899C93.07,59.707 73.773,51.192 81.813,37Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M81.813,37C68.188,53.267 84.503,59.084 70.556,72.479C66.633,76.247 77.632,76.737 80.205,73.899C93.07,59.707 73.773,51.192 81.813,37Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
	</g>
	<g class="cone2">
		<path
			d="M62.743,56.566C70.898,69.256 81,64.622 81,76.131C81,78.478 78.392,83.036 75.784,83.036C75.218,73.178 63.951,65.692 62.743,56.566Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M62.743,56.566C70.898,69.256 81,64.622 81,76.131C81,78.478 78.392,83.036 75.784,83.036C75.218,73.178 63.951,65.692 62.743,56.566Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M62.743,56.566C60.397,70 77.594,71.089 69.264,85.338C71.983,87.865 74.889,84.75 75.784,83.036C81,69.226 63.951,65.692 62.743,56.566Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M62.743,56.566C60.397,70 77.594,71.089 69.264,85.338C71.983,87.865 74.889,84.75 75.784,83.036C81,69.226 63.951,65.692 62.743,56.566Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M62.743,56.566C57.527,71.528 73.176,72.678 61.439,85.338C64.159,87.865 68.369,87.052 69.264,85.338C77.088,74.98 61.439,66.924 62.743,56.566Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M62.743,56.566C57.527,71.528 73.176,72.678 61.439,85.338C64.159,87.865 68.369,87.052 69.264,85.338C77.088,74.98 61.439,66.924 62.743,56.566Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M62.743,56.566C47.095,61.17 45.791,66.924 41.879,73.829C41.054,75.285 39.487,78.433 44.703,77.282C52.528,66.924 57.527,70.377 62.743,56.566Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M62.743,56.566C47.095,61.17 45.791,66.924 41.879,73.829C41.054,75.285 39.487,78.433 44.703,77.282C52.528,66.924 57.527,70.377 62.743,56.566Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M62.743,56.566C49.703,58.868 51.007,72.678 43.914,76.733C40.819,78.503 44.487,83.036 49.703,81.885C57.527,71.528 57.527,70.377 62.743,56.566Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M62.743,56.566C49.703,58.868 51.007,72.678 43.914,76.733C40.819,78.503 44.487,83.036 49.703,81.885C57.527,71.528 57.527,70.377 62.743,56.566Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M62.743,56.566C49.703,66.924 56.223,73.829 47.095,80.734C42.722,84.042 51.43,87.763 54.188,84.735C62.012,74.378 57.527,70.377 62.743,56.566Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M62.743,56.566C49.703,66.924 56.223,73.829 47.095,80.734C42.722,84.042 51.43,87.763 54.188,84.735C62.012,74.378 57.527,70.377 62.743,56.566Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
		<path
			d="M62.743,56.566C51.694,69.758 64.925,74.475 53.615,85.338C50.434,88.393 59.353,88.79 61.439,86.489C71.872,74.98 56.223,68.075 62.743,56.566Z"
			style="fill:none;stroke:{cake.decorationStroke ??
				cake.corpus}; stroke:url({decorationStrokeUrl}) transparent;stroke-width:3px;"
		/>
		<path
			d="M62.743,56.566C51.694,69.758 64.925,74.475 53.615,85.338C50.434,88.393 59.353,88.79 61.439,86.489C71.872,74.98 56.223,68.075 62.743,56.566Z"
			style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;"
		/>
	</g>
</g>
