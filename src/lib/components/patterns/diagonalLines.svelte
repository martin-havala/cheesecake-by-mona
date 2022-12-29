<script>
	export let id = 0;
	export let top = false;
</script>

<pattern
	id="DiagonalLines-{top ? 'top-' : ''}{id}"
	patternUnits="userSpaceOnUse"
	width="6"
	height="6"
	patternTransform="scale(1) rotate(0)"
>
	<rect x="0" y="0" width="6" height="6" style="fill:var(--filling-{top ? 'top-' : ''}color-2,  transparent)" />
	<path d="M5 0h1L0 6V5 zM6 5v1H5z" style="fill: var(--filling-{top ? 'top-' : ''}color-1, black);fill-rule:evenodd;" />
</pattern>
