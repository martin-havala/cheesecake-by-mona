<script>
	export let id = 0;
	export let top = false;
</script>

<pattern
	id="Dots-{top ? 'top-' : ''}{id}"
	patternUnits="userSpaceOnUse"
	width="40"
	height="40"
	patternTransform="scale(.5) rotate(0)"
>
	<rect x="0" y="0" width="100%" height="100%" style="fill:var(--filling-{top ? 'top-' : ''}color-2,  transparent)" />

	<path
		d="M40 45a5 5 0 110-10 5 5 0 010 10zM0 45a5 5 0 110-10 5 5 0 010 10zM0 5A5 5 0 110-5 5 5 0 010 5zm40 0a5 5 0 110-10 5 5 0 010 10z"
		style="fill: var(--filling-{top ? 'top-' : ''}color-1, black);"
	/>
	<path d="M20 25a5 5 0 110-10 5 5 0 010 10z" style="fill: var(--filling-{top ? 'top-' : ''}color-1, black); " />
</pattern>
