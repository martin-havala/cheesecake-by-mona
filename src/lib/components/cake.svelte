<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';
	import CakeContent from './cake-content.svelte';

	export let cake: CakeDTO;
	export let id: string = Math.random().toString();
	export let wrap = true;
</script>

{#if wrap}
	<svg
		id={`${id}`}
		width="100%"
		height="100%"
		viewBox="0 0 320 208"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xml:space="preserve"
	>
		<g class={cake.noise ? 'noiseGrp' : ''}>
			<g class={cake.colorOffset ? 'offsetGrp' : ''}>
				<CakeContent {cake} {id} />
			</g>
		</g>
	</svg>
{:else}
	<CakeContent {cake} {id} />
{/if}

<style>
	.offsetGrp {
		filter: url(#colorOffset);
	}
	.noiseGrp {
		filter: url(#noise);
	}
</style>
