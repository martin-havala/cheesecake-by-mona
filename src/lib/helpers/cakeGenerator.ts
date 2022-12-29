import { Patterns, Style, type CakeDTO } from '$lib/models/cake';

const PALLETES = [
	//https://www.pixilart.com/palettes/aesthetic-emotions-46620
	[
		'#F8B195',
		'#F67280',
		'#C06C84',
		'#6C5B7B',
		'#355C7D',
		'#99B898',
		'#FECEAB',
		'#FF847C',
		'#E84A5F',
		'#2A363B',
		'#A8A7A7',
		'#CC527A',
		'#E8175D',
		'#474747',
		'#363636',
		'#A8E6CE',
		'#DCEDC2',
		'#FFD3B5',
		'#FFAAA6',
		'#FF8C94',
		'#A7226E',
		'#EC2049',
		'#F26B38',
		'#F7DB4F',
		'#2F9599',
		'#E1F5C4',
		'#EDE574',
		'#F9D423',
		'#FC913A',
		'#FF4E50',
		'#E5FCC2',
		'#9DE0AD',
		'#45ADA8',
		'#547980',
		'#594F4F',
		'#FE4365',
		'#FC9D9A',
		'#F9CDAD',
		'#C8C8A9',
		'#83AF9B'
	],
	//https://www.pixilart.com/palettes/pallete-build-52544
	[
		'#89D9D9',
		'#72B6CF',
		'#5C8BA8',
		'#4E6679',
		'#464969',
		'#44355D',
		'#3D003D',
		'#621748',
		'#942C4B',
		'#C7424F',
		'#E06B51',
		'#F2A561',
		'#FCEF8D',
		'#B1D480',
		'#80B878',
		'#658D78',
		'#7B334C',
		'#A14D55',
		'#C77369',
		'#E3A084',
		'#F2CB9B',
		'#D37B86',
		'#AF5D8B',
		'#804085',
		'#5B3374',
		'#412051',
		'#5C486A',
		'#887D8D',
		'#B8B4B2',
		'#DCDAC9',
		'#FFFFE0',
		'#B6F5DB'
	],
	//https://www.pixilart.com/palettes/daydream20-37182
	[
		'#430F43',
		'#472561',
		'#205973',
		'#248077',
		'#2D9A77',
		'#5EC688',
		'#AAE68F',
		'#64154D',
		'#8E184B',
		'#BA3155',
		'#D9505E',
		'#E3744F',
		'#F29E64',
		'#FFC477',
		'#FFDD96',
		'#FFF4B0',
		'#C22E35',
		'#D24F38',
		'#DF6939',
		'#ED9B4A'
	]
];
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
	const palette = PALLETES[(paletteIndex ?? Math.floor(Math.random() * PALLETES.length)) % PALLETES.length];

	const newCake: CakeDTO = {
		decorationType: Math.floor(Math.random() * 11),
		corpus: { color: '#0000000', secondaryColor: '#0000000' },
		style: randomStyle(),
		body: { color: randomColor(palette), secondaryColor: randomColor(palette) },
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
			newCake.filling = {
				color: randomColor(palette),
				secondaryColor: randomColor(palette),
				pattern: randomPattern(allowEmpty)
			};
			break;
		case r > 0.66:
			newCake.filling = {
				color: randomColor(palette),
				secondaryColor: randomColor(palette),
				pattern: randomPattern(allowEmpty)
			};
			newCake.fillingTop = {
				color: randomColor(palette),
				secondaryColor: randomColor(palette),
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
