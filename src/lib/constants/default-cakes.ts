import type { CakeDTO } from '$lib/models/cake';

export const DEFAULT_CAKES: CakeDTO[] = [
	{
		decorationType: 1,
		bodyStroke: { color: '#000000', secondaryColor: '#000000' },
		style: 0,
		body: { color: '#F6E0B2', secondaryColor: '#E7A27A' },
		decorationStroke: {},
		decoration: {},
		icing: {},
		icingStroke: {},
		filling: { color: '#F6E0B2', secondaryColor: '#BA555C', pattern: 10 },
		fillingTop: { color: '#C2977D', secondaryColor: '#E3B98F', pattern: 4 },
		midSection: true,
		name: 'Creamy strawberry'
	},
	{
		decorationType: 3,
		bodyStroke: { color: '#000000', secondaryColor: '#000000' },
		style: 0,
		body: { color: '#BA555C', secondaryColor: '#F6E0B2' },
		decorationStroke: {},
		decoration: {},
		icing: {},
		icingStroke: {},
		filling: { color: '#5D967F', secondaryColor: '#845C51', pattern: 1 },
		fillingTop: {},
		midSection: true,
		name: 'Raspberry choco'
	},
	{
		decorationType: 6,
		bodyStroke: { color: '#000000', secondaryColor: '#000000' },
		style: 1,
		body: { color: '#845C51', secondaryColor: '#5D967F' },
		decorationStroke: {},
		decoration: {},
		icing: {},
		icingStroke: {},
		filling: { color: '#61465F', secondaryColor: '#E7A27A', pattern: 4 },
		fillingTop: {},
		midSection: false,
		name: 'Simple caramel'
	},
	{
		decorationType: 1,
		bodyStroke: { color: '#000000', secondaryColor: '#000000' },
		style: 0,
		body: { color: '#F5E9C4', secondaryColor: '#EFAB64' },
		decorationStroke: {},
		decoration: {},
		icing: {},
		icingStroke: {},
		filling: { color: '#EFAB64', secondaryColor: '#E2816F', pattern: 3 },
		fillingTop: {},
		midSection: true,
		name: 'Simple pleasure'
	},
	{
		decorationType: 9,
		bodyStroke: { color: '#000000', secondaryColor: '#000000' },
		style: 1,
		body: { color: '#C2977D', secondaryColor: '#EFAB64' },
		decorationStroke: {},
		decoration: { color: '#61465F' },
		icing: {},
		icingStroke: {},
		filling: { color: '#E7A27A', secondaryColor: '#F6E0B2', pattern: 9 },
		fillingTop: { color: '#C2977D', secondaryColor: '#F5E9C4', pattern: 8 },
		midSection: false,
		name: 'Stracciatella magic'
	}
];
