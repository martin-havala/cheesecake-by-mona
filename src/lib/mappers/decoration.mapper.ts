import { Decoration } from '$lib/models/cake';
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

export function decorationMapper(decoration: Decoration): any {
	switch (decoration) {
		case Decoration.Balls:
			return Balls;
		case Decoration.Berries:
			return Berries;
		case Decoration.Berry:
			return Berry;
		case Decoration.Cherry:
			return Cherry;
		case Decoration.Cocochips:
			return CocoChips;
		case Decoration.Cones:
			return Cones;
		case Decoration.Heart:
			return Heart;
		case Decoration.HighTop:
			return HighTop;
		case Decoration.Oreo:
			return Oreo;
		case Decoration.Trio:
			return Trio;
	}
}
