<script>
	export let id = 0;
	export let top = false;
</script>

<pattern
	id="Wiggle-{top ? 'top-' : ''}{id}"
	patternUnits="userSpaceOnUse"
	width="52"
	height="26"
	patternTransform="scale(.5) rotate(0)"
>
	<rect x="0" y="0" width="100%" height="100%" style="fill:var(--filling-{top ? 'top-' : ''}color-2,  transparent)" />

	<path
		d="M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0
	2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486
	1.414-1.414z"
		style="fill: var(--filling-{top ? 'top-' : ''}color-1, black);"
	/>
</pattern>
