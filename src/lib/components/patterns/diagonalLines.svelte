<script lang="ts">
	export let id = '';
	export let area = 'background';
</script>
<pattern
	id="{area}-{id}"
	patternUnits="userSpaceOnUse"
	width="6"
	height="6"
	patternTransform="scale(1) rotate(0)"
>
	<rect x="0" y="0" width="6" height="6" style="fill:var(--{area}-color-2)" />
	<path d="M5 0h1L0 6V5 zM6 5v1H5z" style="fill: var(--{area}-color-1);fill-rule:evenodd;" />
</pattern>
