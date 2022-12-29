<script lang="ts">
	export let id = '';
	export let area = 'background';
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="scale(.5) rotate(0)">
	<rect x="0" y="0" width="100%" height="100%" style="fill:var(--{area}-color-2,  transparent)" />
	<path d="M50 25L37.5 50 25 25 37.5 0zm-25 0L12.5 50 0 25 12.5 0z" style="fill:none;stroke: var(--{area}-color-1, black);" />
</pattern>
