<script>
	export let id = 0;
	export let top = false;
</script>

<pattern
	id="Chevron-{top ? 'top-' : ''}{id}"
	patternUnits="userSpaceOnUse"
	width="20"
	height="20"
	patternTransform="scale(.5) rotate(0)"
>
	<rect x="0" y="0" width="100%" height="100%" style="fill:var(--filling-{top ? 'top-' : ''}color-2,  transparent)" />

	<path d="M-5 5L5.1 15 15 5l10 10" style="stroke: var(--filling-{top ? 'top-' : ''}color-1, black);fill:none" />
</pattern>
