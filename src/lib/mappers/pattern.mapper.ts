import Chevron from '$lib/components/patterns/chevron.svelte';
import DiagonalLines from '$lib/components/patterns/diagonal-lines.svelte';
import DiagonalLines2 from '$lib/components/patterns/diagonal-lines-2.svelte';
import DiagonalLines3 from '$lib/components/patterns/diagonal-lines-3.svelte';
import Diamonds from '$lib/components/patterns/diamonds.svelte';
import Dots from '$lib/components/patterns/dots.svelte';
import Gradient from '$lib/components/patterns/gradient.svelte';
import Poppy from '$lib/components/patterns/poppy.svelte';
import Rain from '$lib/components/patterns/rain.svelte';
import Sprinkles from '$lib/components/patterns/sprinkles.svelte';
import Triangles from '$lib/components/patterns/triangles.svelte';
import Waves from '$lib/components/patterns/waves.svelte';
import Wiggle from '$lib/components/patterns/wiggle.svelte';

import CharlieBrown from '$lib/components/patterns/charlie-brown.svelte';
import Dashes from '$lib/components/patterns/dashes.svelte';
import Dashes2 from '$lib/components/patterns/dashes2.svelte';
import DiagonalDashes from '$lib/components/patterns/diagonal-dashes.svelte';
import DiagonalDashes2 from '$lib/components/patterns/diagonal-dashes-2.svelte';
import Hideout from '$lib/components/patterns/hideout.svelte';
import Stripes from '$lib/components/patterns/stripes.svelte';
import { Pattern } from '$lib/models/cake';

export function patternMapper(pattern?: Pattern): any {
	switch (pattern) {
		case Pattern.Hideout:
			return Hideout;
		case Pattern.DiagonalLines:
			return DiagonalLines;
		case Pattern.DiagonalLines2:
			return DiagonalLines2;
		case Pattern.DiagonalLines3:
			return DiagonalLines3;
		case Pattern.Dashes:
			return Dashes;
		case Pattern.Dashes2:
			return Dashes2;
		case Pattern.DiagonalDashes:
			return DiagonalDashes;
		case Pattern.DiagonalDashes2:
			return DiagonalDashes2;
		case Pattern.Diamonds:
			return Diamonds;
		case Pattern.Dots:
			return Dots;
		case Pattern.Empty:
			return Gradient;
		case Pattern.CharlieBrown:
			return CharlieBrown;
		case Pattern.Chevron:
			return Chevron;
		case Pattern.Poppy:
			return Poppy;
		case Pattern.Rain:
			return Rain;
		case Pattern.Sprinkles:
			return Sprinkles;
		case Pattern.Stripes:
			return Stripes;
		case Pattern.Triangles:
			return Triangles;
		case Pattern.Waves:
			return Waves;
		case Pattern.Wiggle:
			return Wiggle;
		default:
			return Gradient;
	}
}
