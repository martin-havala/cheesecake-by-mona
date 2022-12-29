import { Patterns, Style, type CakeDTO } from '$lib/models/cake';

export function randomColor() {
	return (
		'#' +
		`${(160 + Math.floor(Math.random() * 96)).toString(16)}` +
		`${(140 + Math.floor(Math.random() * 76)).toString(16)}` +
		`${(140 + Math.floor(Math.random() * 106)).toString(16)}`
	);
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

export function generateCake(allowEmpty = true): CakeDTO {
	const newCake: CakeDTO = {
		decorationType: Math.floor(Math.random() * 11),
		corpus: { color: '#0000000', secondaryColor: '#0000000' },
		style: randomStyle(),
		body: { color: randomColor(), secondaryColor: randomColor() },
		decorationStroke: {},
		decoration: {},
		icing: {},
		filling: {},
		fillingTop: {}
	};

	const r = Math.random();
	switch (true) {
		case r < 0.25:
			break;
		case r < 0.66:
			newCake.filling = { color: randomColor(), secondaryColor: randomColor(), pattern: randomPattern(allowEmpty) };
			break;
		case r > 0.66:
			newCake.filling = { color: randomColor(), secondaryColor: randomColor(), pattern: randomPattern(allowEmpty) };
			newCake.fillingTop = { color: randomColor(), secondaryColor: randomColor(), pattern: randomPattern(allowEmpty) };
	}
	if (!allowEmpty) {
		newCake.icing.pattern = randomPattern(allowEmpty);
		newCake.filling.pattern = randomPattern(allowEmpty);
		newCake.fillingTop.pattern = randomPattern(allowEmpty);
	}

	newCake.midSection = Math.random() > 0.5 && newCake.style != Style.Inset;
	return newCake;
}
