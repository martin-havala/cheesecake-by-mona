import { Decorations } from '$lib/models/cake';
import Balls from '../components/balls.svelte';
import Berries from '../components/berries.svelte';
import Berry from '../components/berry.svelte';
import Cherry from '../components/cherry.svelte';
import CocoChips from '../components/coco-chips.svelte';
import Cones from '../components/cones.svelte';
import Heart from '../components/heart.svelte';
import HighTop from '../components/high-top.svelte';
import Oreo from '../components/oreo.svelte';
import Trio from '../components/trio.svelte';

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
