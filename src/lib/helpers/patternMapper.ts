import Chevron from '$lib/components/patterns/chevron.svelte';
import DiagonalLines from '$lib/components/patterns/diagonalLines.svelte';
import DiagonalStripes from '$lib/components/patterns/diagonalStripes.svelte';
import Diamonds from '$lib/components/patterns/diamonds.svelte';
import Dots from '$lib/components/patterns/dots.svelte';
import Gradient from '$lib/components/patterns/gradient.svelte';
import Poppy from '$lib/components/patterns/poppy.svelte';
import Rain from '$lib/components/patterns/rain.svelte';
import Sprinkles from '$lib/components/patterns/sprinkles.svelte';
import Triangles from '$lib/components/patterns/triangles.svelte';
import Waves from '$lib/components/patterns/waves.svelte';
import Wiggle from '$lib/components/patterns/wiggle.svelte';

import { Patterns } from '$lib/models/cake';

export function patternMapper(pattern?: Patterns): any {
	switch (pattern) {
		case Patterns.DiagonalLines:
			return DiagonalLines;
		case Patterns.DiagonalStripes:
			return DiagonalStripes;
		case Patterns.Diamonds:
			return Diamonds;
		case Patterns.Dots:
			return Dots;
		case Patterns.Empty:
			return Gradient;
		case Patterns.Chevron:
			return Chevron;
		case Patterns.Poppy:
			return Poppy;
		case Patterns.Rain:
			return Rain;
		case Patterns.Sprinkles:
			return Sprinkles;
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
