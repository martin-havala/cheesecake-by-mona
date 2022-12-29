<script>
	export let id = '';
	export let area = 'background';
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(.5) rotate(0)">
	<rect x="0" y="0" width="100%" height="100%" style="fill:var(--{area}-color-2);" />

	<path d="M-5 5L5.1 15 15 5l10 10" style="stroke: var(--{area}-color-1);fill:none" />
</pattern>
