<script>
	export let id = 0;
	export let top = false;
</script>

<pattern
	id="DiagonalStripes-{top ? 'top-' : ''}{id}"
	patternUnits="userSpaceOnUse"
	width="40"
	height="40"
	patternTransform="scale(.15) rotate(0)"
>
	<rect x="0" y="0" width="100%" height="100%" style="fill:var(--filling-{top ? 'top-' : ''}color-2,  transparent)" />
	<path
		d="M0 40L40 0H20L0 20M40 40V20L20 40"
		style="fill: var(--filling-{top ? 'top-' : ''}color-1, black);fill-rule:evenodd;"
	/>
</pattern>
