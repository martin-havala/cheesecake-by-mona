<script lang="ts">
	export let id = '';
	export let area = 'background';
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="12" height="16" patternTransform="scale(1) rotate(0)">
	<rect x="0" y="0" width="100%" height="100%" style="fill:var(--{area}-color-2,  transparent)" />

	<path
		d="M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z		"
		style="fill: var(--{area}-color-1, black);"
	/>
</pattern>
