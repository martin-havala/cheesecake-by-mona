import type { CakeArea } from '$lib/models/cake';
import { onMount } from 'svelte';

export let area: CakeArea;
export let area2: CakeArea;
export const genericMount = onMount(() => {
	switch (area) {
		case 'icingStroke':
		case 'decorationStroke':
			area2 = 'bodyStroke';
			break;
		default:
			area2 = 'bodyStroke';
	}
});
