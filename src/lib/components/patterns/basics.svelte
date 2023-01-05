<script lang="ts">
	import type { CakeDTO } from '$lib/models/cake';
	export let id: string | number = 0;
	export let cake: CakeDTO;
	const seed = Math.random() * 10000;
</script>

<filter id="noise">
	<feFlood result="floodFill" flood-color="black" flood-opacity=".2" />
	<feOffset in="floodFill" dx="-5" dy="-8" result="offset" />
	<feGaussianBlur in="offset" stdDeviation="64" result="blur" />
	<feTurbulence result="waves" type="turbulence" baseFrequency="735 771" numOctaves="1" {seed} />
	<feDisplacementMap in="blur" in2="waves" scale="400" xChannelSelector="R" yChannelSelector="G" result="ripples" />
	<feComposite in="waves" in2="ripples" operator="arithmetic" k1=".1" k2="0.2" k3="1" k4="0" result="riso" />
	<feComposite in2="riso" in="SourceGraphic" operator="out" />
</filter>

<filter id="colorOffset">
	<feColorMatrix
		type="matrix"
		in="SourceGraphic"
		values="1 0 0 1 0 
				0 1 0 1 0 
				0 0 1 0 0 
				0 0 0 1 0"
		result="blue"
	/>
	<feColorMatrix
		type="matrix"
		in="SourceGraphic"
		values="1 0 0 1 0 
				0 1 0 0 0 
				0 0 1 1 0 
				0 0 0 1 0"
		result="red"
	/>
	<feColorMatrix
		type="matrix"
		in="SourceGraphic"
		values="1 0 0 0 0 
				0 1 0 1 0 
				0 0 1 1 0 
				0 0 0 1 0"
		result="green"
	/>
	<feColorMatrix
		type="matrix"
		in="SourceGraphic"
		values=" 0  0  0  0  0
	             0  0  0  0  0
	             0  0  0  0  0
	 		    -1 -1 -1 .5  0"
		result="black"
	/>
	<feOffset in="blue" dx="1" dy="-2" result="shiftedBlue" />
	<feOffset in="green" dx="0" dy="2" result="shiftedGreen" />
	<feOffset in="red" dx="-2" dy="-2" result="shiftedRed" />
	<feBlend in="shiftedBlue" in2="shiftedGreen" mode="multiply" result="bg" />
	<feBlend in="bg" in2="shiftedRed" mode="multiply" result="channels" />
	<feComposite in2="channels" in="black" operator="over" />
</filter>

<linearGradient id="gradient-body-{id}" x1="0" y1="44" x2="1" y2="182" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.body.color || 'transparent'};" />
	<stop offset="1" style="stop-color:{cake.body.secondaryColor || 'transparent'};" />
</linearGradient>

<linearGradient id="gradient-bodyStroke-{id}" x1="0" y1="44" x2="1" y2="182" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.bodyStroke.color || 'transparent'};" />
	<stop offset="1" style="stop-color:{cake.bodyStroke.secondaryColor || cake.bodyStroke.color || 'transparent'};" />
</linearGradient>

<linearGradient id="gradient-icing-{id}" x1="0" y1="44" x2="1" y2="92" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.icing.color || cake.body.color || 'transparent'};" />
	<stop offset="1" style="stop-color:{cake.icing.secondaryColor || cake.icing.color || cake.body.color || 'transparent'}" />
</linearGradient>

<linearGradient id="gradient-icingStroke-{id}" x1="0" y1="44" x2="1" y2="92" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.icingStroke.color || cake.bodyStroke.color || 'transparent'};" />
	<stop
		offset="1"
		style="stop-color:{cake.icingStroke.secondaryColor || cake.icingStroke.color || cake.bodyStroke.color || 'transparent'}"
	/>
</linearGradient>

<linearGradient id="gradient-decoration-{id}" x1="0" y1="44" x2="1" y2="92" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.decoration.color || cake.body.color || 'transparent'};" />
	<stop
		offset="1"
		style="stop-color:{cake.decoration.secondaryColor || cake.decoration.color || cake.body.color || 'transparent'};"
	/>
</linearGradient>

<linearGradient id="gradient-decorationStroke-{id}" x1="0" y1="44" x2="1" y2="92" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.decorationStroke.color || cake.bodyStroke.color || 'transparent'}" />
	<stop
		offset="1"
		style="stop-color:{cake.decorationStroke.secondaryColor ||
			cake.decorationStroke.color ||
			cake.bodyStroke.secondaryColor ||
			cake.bodyStroke.color ||
			'transparent'};"
	/>
</linearGradient>

<linearGradient id="gradient-filling-{id}" x1="0" y1="44" x2="1" y2="182" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.filling.color || cake.body.color || 'transparent'};" />
	<stop
		offset="1"
		style="stop-color:{cake.filling.secondaryColor || cake.filling.color || cake.body.color || 'transparent'};"
	/>
</linearGradient>

<linearGradient id="gradient-fillingTop-{id}" x1="0" y1="99" x2="0" y2="137" gradientUnits="userSpaceOnUse">
	<stop offset="0" style="stop-color:{cake.fillingTop.color || cake.body.color || 'transparent'};" />
	<stop
		offset="1"
		style="stop-color:{cake.fillingTop.secondaryColor || cake.fillingTop.color || cake.body.color || 'transparent'};"
	/>
</linearGradient>
