import { Patterns, Style, type CakeDTO } from '$lib/models/cake';
import { PALLETES, PALLETE_KEYS } from '$lib/models/palettes';

export function randomColor(palette: string[]) {
	return palette[Math.floor(Math.random() * palette.length)];
}

export function randomStyle() {
	const r = Math.random();
	switch (true) {
		case r < 0.5:
			return Style.Inset;
	}
	return Style.Colour;
}

export function randomPattern(allowEmpty = true) {
	const length = Object.keys(Patterns).filter((a) => isNaN(+a)).length;
	return Math.floor(Math.random() * (allowEmpty ? length : length - 1)) + (allowEmpty ? 0 : 1);
}

export function generateCake(allowEmpty = true, paletteIndex?: number): CakeDTO {
	const selectedPaletteIndex =
		paletteIndex != undefined
			? paletteIndex % PALLETE_KEYS.length
			: Math.floor(Math.random() * PALLETE_KEYS.length) % PALLETE_KEYS.length;
	const selectedPalette = PALLETES[PALLETE_KEYS[selectedPaletteIndex]];
	console.log(selectedPaletteIndex, selectedPalette);

	const newCake: CakeDTO = {
		decorationType: Math.floor(Math.random() * 11),
		corpus: { color: '#0000000', secondaryColor: '#0000000' },
		style: randomStyle(),
		body: { color: randomColor(selectedPalette), secondaryColor: randomColor(selectedPalette) },
		decorationStroke: {},
		decoration: {},
		icing: {},
		filling: {},
		fillingTop: {}
	};

	if (selectedPaletteIndex === PALLETE_KEYS.findIndex((p) => p == 'Neon')) {
		newCake.corpus = { color: randomColor(selectedPalette), secondaryColor: randomColor(selectedPalette) };
	}

	const r = Math.random();
	switch (true) {
		case r < 0.25:
			break;
		case r < 0.66:
			newCake.filling = {
				color: randomColor(selectedPalette),
				secondaryColor: randomColor(selectedPalette),
				pattern: randomPattern(allowEmpty)
			};
			break;
		case r > 0.66:
			newCake.filling = {
				color: randomColor(selectedPalette),
				secondaryColor: randomColor(selectedPalette),
				pattern: randomPattern(allowEmpty)
			};
			newCake.fillingTop = {
				color: randomColor(selectedPalette),
				secondaryColor: randomColor(selectedPalette),
				pattern: randomPattern(allowEmpty)
			};
	}
	if (!allowEmpty) {
		newCake.icing.pattern = randomPattern(allowEmpty);
		newCake.filling.pattern = randomPattern(allowEmpty);
		newCake.fillingTop.pattern = randomPattern(allowEmpty);
	}

	newCake.midSection = Math.random() > 0.5 && newCake.style != Style.Inset;
	return newCake;
}
