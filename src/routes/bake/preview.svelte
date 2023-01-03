<script lang="ts">
	import ByMona from '$lib/components/byMona.svelte';
	import Cake from '$lib/components/cake.svelte';
	import { downloadSVG } from '$lib/helpers/download-SVG';
	import type { CakeDTO } from '$lib/models/cake';

	export let cake: CakeDTO;
	export let showAsLogo = false;
</script>

<div class="preview">
	<div class="preview__svg">
		{#if showAsLogo}
			<ByMona id="preview">
				<Cake {cake} wrap={false} />
			</ByMona>
		{:else}
			<Cake {cake} id="preview" />
		{/if}
	</div>
	<div class="preview__buttons">
		<button on:click={(e) => (showAsLogo = !showAsLogo)}>Toggle Preview</button>
		<button on:click={(e) => downloadSVG(document.getElementById('preview'), 'byMona-cake.svg')}>Download</button>
	</div>
</div>

<style>
	.preview {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.preview__svg {
		flex: 0 1 auto;
		text-align: center;
		width: 100%;
		margin: 0.5rem;
		border-radius: var(--border-radius);
	}
	.preview__svg :global(svg) {
		max-width: 36vh;
		max-height: 36vh;
	}
	.preview__buttons {
		flex: 0 0 2rem;
		text-align: center;
	}
</style>
