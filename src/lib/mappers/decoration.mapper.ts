import { Decorations } from '$lib/models/cake';
import Balls from '../components/decorations/balls.svelte';
import Berries from '../components/decorations/berries.svelte';
import Berry from '../components/decorations/berry.svelte';
import Cherry from '../components/decorations/cherry.svelte';
import CocoChips from '../components/decorations/coco-chips.svelte';
import Cones from '../components/decorations/cones.svelte';
import Heart from '../components/decorations/heart.svelte';
import HighTop from '../components/decorations/high-top.svelte';
import Oreo from '../components/decorations/oreo.svelte';
import Trio from '../components/decorations/trio.svelte';

export function decorationMapper(decoration: Decorations): any {
	switch (decoration) {
		case Decorations.Balls:
			return Balls;
		case Decorations.Berries:
			return Berries;
		case Decorations.Berry:
			return Berry;
		case Decorations.Cherry:
			return Cherry;
		case Decorations.Cocochips:
			return CocoChips;
		case Decorations.Cones:
			return Cones;
		case Decorations.Heart:
			return Heart;
		case Decorations.HighTop:
			return HighTop;
		case Decorations.Oreo:
			return Oreo;
		case Decorations.Trio:
			return Trio;
	}
}
