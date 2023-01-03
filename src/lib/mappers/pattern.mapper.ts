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
import { Patterns } from '$lib/models/cake';

export function patternMapper(pattern?: Patterns): any {
	switch (pattern) {
		case Patterns.Hideout:
			return Hideout;
		case Patterns.DiagonalLines:
			return DiagonalLines;
		case Patterns.DiagonalLines2:
			return DiagonalLines2;
		case Patterns.DiagonalLines3:
			return DiagonalLines3;
		case Patterns.Dashes:
			return Dashes;
		case Patterns.Dashes2:
			return Dashes2;
		case Patterns.DiagonalDashes:
			return DiagonalDashes;
		case Patterns.DiagonalDashes2:
			return DiagonalDashes2;
		case Patterns.Diamonds:
			return Diamonds;
		case Patterns.Dots:
			return Dots;
		case Patterns.Empty:
			return Gradient;
		case Patterns.CharlieBrown:
			return CharlieBrown;
		case Patterns.Chevron:
			return Chevron;
		case Patterns.Poppy:
			return Poppy;
		case Patterns.Rain:
			return Rain;
		case Patterns.Sprinkles:
			return Sprinkles;
		case Patterns.Stripes:
			return Stripes;
		case Patterns.Triangles:
			return Triangles;
		case Patterns.Waves:
			return Waves;
		case Patterns.Wiggle:
			return Wiggle;
		default:
			return Gradient;
	}
}
