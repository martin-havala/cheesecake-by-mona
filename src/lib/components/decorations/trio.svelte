<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';

	export let decorationUrl = '';
	export let decorationStrokeUrl = '';
	export let cake: CakeDTO;
</script>

<g class="trio">
	<circle cx="114.5" cy="56.358" r="11.5" style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;" />
	<path
		d="M114.5,41.858C122.503,41.858 129,48.356 129,56.358C129,64.361 122.503,70.858 114.5,70.858C106.498,70.858 100,64.361 100,56.358C100,48.356 106.498,41.858 114.5,41.858ZM114.5,44.858C108.153,44.858 103,50.011 103,56.358C103,62.706 108.153,67.858 114.5,67.858C120.847,67.858 126,62.706 126,56.358C126,50.011 120.847,44.858 114.5,44.858Z"
		style="fill:{cake.decorationStroke ?? cake.bodyStroke}; fill:url({decorationStrokeUrl}) transparent;"
	/>
	<circle cx="80.5" cy="49.5" r="22.5" style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;" />
	<path
		d="M80.5,24C94.574,24 106,35.426 106,49.5C106,63.574 94.574,75 80.5,75C66.427,75 55,63.574 55,49.5C55,35.426 66.427,24 80.5,24ZM80.5,27C68.082,27 58,37.082 58,49.5C58,61.918 68.082,72 80.5,72C92.918,72 103,61.918 103,49.5C103,37.082 92.918,27 80.5,27Z"
		style="fill:{cake.decorationStroke ?? cake.bodyStroke}; fill:url({decorationStrokeUrl}) transparent;"
	/>
	<circle cx="98.5" cy="68.358" r="14.5" style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;" />
	<path
		d="M98.5,50.858C108.159,50.858 116,58.7 116,68.358C116,78.017 108.159,85.858 98.5,85.858C88.842,85.858 81,78.017 81,68.358C81,58.7 88.842,50.858 98.5,50.858ZM98.5,53.858C90.498,53.858 84,60.356 84,68.358C84,76.361 90.498,82.858 98.5,82.858C106.503,82.858 113,76.361 113,68.358C113,60.356 106.503,53.858 98.5,53.858Z"
		style="fill:{cake.decorationStroke ?? cake.bodyStroke}; fill:url({decorationStrokeUrl}) transparent;"
	/>
</g>
