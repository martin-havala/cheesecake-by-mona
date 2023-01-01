export enum Decorations {
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

export enum Patterns {
	Empty,
	Chevron,
	DiagonalLines,
	DiagonalStripes,
	Diamonds,
	Dots,
	Poppy,
	Rain,
	Sprinkles,
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
	pattern?: Patterns;
}

export type CakeArea = 'corpus' | 'body' | 'icing' | 'decoration' | 'decorationStroke' | 'filling' | 'fillingTop';

export interface CakeDTO {
	name?: string;
	printOrder?: number;
	decorationType: Decorations;
	midSection?: boolean;
	style: Style;

	corpus: ColorPattern;
	body: ColorPattern;
	icing: ColorPattern;
	decoration: ColorPattern;
	decorationStroke: ColorPattern;
	filling: ColorPattern;
	fillingTop: ColorPattern;
}
