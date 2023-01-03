export enum Decoration {
	None,
	Balls,
	Berries,
	Berry,
	Cherry,
	Cocochips,
	Cones,
	Heart,
	HighTop,
	Oreo,
	Trio
}

export enum Pattern {
	Empty,
	Hideout,
	Chevron,
	DiagonalLines,
	DiagonalLines2,
	DiagonalLines3,
	Dashes,
	Dashes2,
	DiagonalDashes,
	DiagonalDashes2,
	Diamonds,
	Dots,
	CharlieBrown,
	Poppy,
	Rain,
	Sprinkles,
	Stripes,
	Triangles,
	Waves,
	Wiggle
}

export enum Style {
	'Colour',
	'Inset'
}

export interface ColorPattern {
	color?: string;
	secondaryColor?: string;
	pattern?: Pattern;
}

export type CakeArea =
	| 'bodyStroke'
	| 'body'
	| 'icing'
	| 'icingStroke'
	| 'decoration'
	| 'decorationStroke'
	| 'filling'
	| 'fillingTop';

export interface CakeDTO {
	name?: string;
	printOrder?: number;
	decorationType: Decoration;
	midSection?: boolean;
	style: Style;

	body: ColorPattern;
	bodyStroke: ColorPattern;
	icing: ColorPattern;
	icingStroke: ColorPattern;
	decoration: ColorPattern;
	decorationStroke: ColorPattern;
	filling: ColorPattern;
	fillingTop: ColorPattern;
}
