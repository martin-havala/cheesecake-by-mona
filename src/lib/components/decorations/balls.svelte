<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';

	export let decorationUrl = '';
	export let decorationStrokeUrl = '';
	export let cake: CakeDTO;
</script>

<g class="balls">
	<circle cx="96.5" cy="50.5" r="14.5" style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;" />
	<path
		d="M96.5,33C106.159,33 114,40.842 114,50.5C114,60.159 106.159,68 96.5,68C86.842,68 79,60.159 79,50.5C79,40.842 86.842,33 96.5,33ZM96.5,36C88.498,36 82,42.497 82,50.5C82,58.503 88.498,65 96.5,65C104.503,65 111,58.503 111,50.5C111,42.497 104.503,36 96.5,36Z"
		style="fill:{cake.decorationStroke ?? cake.corpus}; fill:url({decorationStrokeUrl}) transparent"
	/>
	<circle cx="137.5" cy="59.5" r="12.5" style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;" />
	<path
		d="M137.5,44C146.055,44 153,50.945 153,59.5C153,68.055 146.055,75 137.5,75C128.946,75 122,68.055 122,59.5C122,50.945 128.946,44 137.5,44ZM137.5,47C130.601,47 125,52.601 125,59.5C125,66.399 130.601,72 137.5,72C144.399,72 150,66.399 150,59.5C150,52.601 144.399,47 137.5,47Z"
		style="fill:{cake.decorationStroke ?? cake.corpus}; fill:url({decorationStrokeUrl}) transparent"
	/>
	<circle cx="114.5" cy="68.5" r="15.5" style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;" />
	<path
		d="M114.5,50C124.711,50 133,58.29 133,68.5C133,78.71 124.711,87 114.5,87C104.29,87 96,78.71 96,68.5C96,58.29 104.29,50 114.5,50ZM114.5,53C105.946,53 99,59.945 99,68.5C99,77.055 105.946,84 114.5,84C123.055,84 130,77.055 130,68.5C130,59.945 123.055,53 114.5,53Z"
		style="fill:{cake.decorationStroke ?? cake.corpus}; fill:url({decorationStrokeUrl}) transparent"
	/>
	<circle cx="71" cy="62" r="19" style="fill:{cake.decoration ?? cake.body}; fill:url({decorationUrl}) transparent;" />
	<path
		d="M71,40C83.143,40 93,49.858 93,62C93,74.142 83.143,84 71,84C58.858,84 49,74.142 49,62C49,49.858 58.858,40 71,40ZM71,43C60.514,43 52,51.514 52,62C52,72.486 60.514,81 71,81C81.487,81 90,72.486 90,62C90,51.514 81.487,43 71,43Z"
		style="fill:{cake.decorationStroke ?? cake.corpus}; fill:url({decorationStrokeUrl}) transparent"
	/>
</g>
