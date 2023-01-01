<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';
	import Cake from './cake.svelte';

	export let printList: CakeDTO[] = [];
	export let id = 'print';
</script>

<svg
	{id}
	width="210mm"
	height="{30 + printList.length * 30}mm"
	viewBox="0 0 2100 {300 + printList.length * 300}"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xml:space="preserve"
>
	<style>
		text {
			font-family: sans-serif;
		}
	</style>
	{#each printList as cake, index}
		<g transform="translate(600, {200 + index * 300})">
			<Cake {cake} wrap={false} />
			<text x="340" y="150" style="font-size: 15mm;">{cake.name}</text>
		</g>
	{/each}
</svg>
