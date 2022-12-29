<script lang="ts">
	export let id = '';
	export let area = 'background';
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(.15) rotate(0)">
	<rect x="0" y="0" width="100%" height="100%" style="fill:var(--{area}-color-2);" />
	<path d="M0 40L40 0H20L0 20M40 40V20L20 40" style="fill:var(--{area}-color-1);fill-rule:evenodd;" />
</pattern>
