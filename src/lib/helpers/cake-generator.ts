/* eslint-disable no-fallthrough */
import { Pattern, Style, type CakeDTO } from '$lib/models/cake';
import { PALLETES, PALLETE_KEYS } from '$lib/models/palettes';

export function randomColors(palette: string[], allowEmpty = false) {
	const indices = new Array(palette.length).fill(0).map((a, i) => i);
	return {
		color: palette[indices.splice(Math.floor(Math.random() * palette.length), 1)[0]],
		secondaryColor:
			!allowEmpty || Math.random() > 0.5 ? palette[indices.splice(Math.floor(Math.random() * indices.length), 1)[0]] : undefined
	};
}

export function randomPattern(allowEmpty = true) {
	const length = Object.keys(Pattern).filter((a) => isNaN(+a)).length;
	return Math.floor(Math.random() * (allowEmpty ? length : length - 1)) + (allowEmpty ? 0 : 1);
}

export function randomStyle() {
	const r = Math.random();
	switch (true) {
		case r < 0.5:
			return Style.Inset;
	}
	return Style.Colour;
}

export function generateCake(allowEmpty = true, paletteIndex?: number, preset?: Partial<CakeDTO>): CakeDTO {
	const selectedPaletteIndex =
		paletteIndex != undefined
			? paletteIndex % PALLETE_KEYS.length
			: Math.floor(Math.random() * PALLETE_KEYS.length) % PALLETE_KEYS.length;
	const selectedPalette = PALLETES[PALLETE_KEYS[selectedPaletteIndex]];

	const newCake: CakeDTO = {
		decorationType: Math.floor(Math.random() * 11),
		bodyStroke: { color: '#000000', secondaryColor: '#000000' },
		style: randomStyle(),
		body: randomColors(selectedPalette, false),
		decorationStroke: {},
		decoration: {},
		icing: {},
		icingStroke: {},
		filling: {},
		fillingTop: {}
	};

	if (selectedPaletteIndex === PALLETE_KEYS.findIndex((p) => p == 'Neon')) {
		newCake.bodyStroke = randomColors(selectedPalette);
	}

	newCake.midSection = Math.random() > 0.5;
	if (!allowEmpty) {
		newCake.icing = { ...randomColors(selectedPalette), pattern: randomPattern(allowEmpty) };
		newCake.filling = { ...randomColors(selectedPalette), pattern: randomPattern(allowEmpty) };
		newCake.fillingTop = { ...randomColors(selectedPalette), pattern: randomPattern(allowEmpty) };
		return newCake;
	}

	const r = Math.random();

	switch (true) {
		case r > 0.8:
			newCake.decoration = {
				...randomColors(selectedPalette),
				pattern: randomPattern(allowEmpty)
			};
		case r < 0.3:
			break;
		case r < 0.4:
			newCake.icing = {
				...randomColors(selectedPalette),
				pattern: randomPattern(allowEmpty)
			};
		case r < 0.75:
			newCake.fillingTop = {
				...randomColors(selectedPalette),
				pattern: randomPattern(allowEmpty)
			};
		case r < 0.9:
			newCake.filling = {
				...randomColors(selectedPalette),
				pattern: randomPattern(allowEmpty)
			};
	}

	return { ...newCake, ...preset };
}
