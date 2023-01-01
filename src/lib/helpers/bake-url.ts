import { base } from '$app/paths';
import type { CakeDTO } from '$lib/models/cake';

export function getBakeUrl(cake: CakeDTO) {
	return `${base}/bake?data=${encodeURIComponent(JSON.stringify(cake))}`;
}
