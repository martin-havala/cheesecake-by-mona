<script lang="ts">
	import type { CakeArea, CakeDTO } from '$lib/models/cake';
	export let id = '';
	export let area: CakeArea = 'body';
	export let cake: CakeDTO;
</script>

<pattern id="{area}-{id}" patternUnits="userSpaceOnUse" width="320" height="208">
	<rect
		x="0"
		y="0"
		width="320"
		height="208"
		style="fill:{cake[area].secondaryColor ?? cake.body.secondaryColor ?? 'transparent'};"
	/>>

	<g style="fill:{cake[area].color ?? cake.body.color ?? 'transparent'};">
		<circle cx="246.556" cy="124.328" r="1" />
		<circle cx="276.556" cy="104.328" r="1" />
		<circle cx="286.556" cy="154.328" r="1" />
		<circle cx="276.556" cy="164.328" r="1" />
		<circle cx="286.556" cy="154.328" r="1" />
		<circle cx="236.556" cy="164.328" r="1" />
		<circle cx="216.556" cy="144.328" r="1" />
		<circle cx="176.556" cy="104.328" r="1" />
		<circle cx="196.556" cy="114.328" r="1" />
		<circle cx="186.556" cy="174.328" r="1" />
		<circle cx="136.556" cy="171.328" r="1" />
		<circle cx="256.556" cy="151.328" r="1" />
		<circle cx="235.556" cy="101.328" r="1" />
		<circle cx="216.556" cy="114.328" r="1" />
		<circle cx="62.556" cy="113.328" r="1" />
		<circle cx="76.556" cy="128.328" r="1" />
		<circle cx="42.556" cy="111.328" r="1" />
		<circle cx="107.556" cy="122.328" r="1" />
		<circle cx="72.556" cy="153.328" r="1" />
		<circle cx="106.556" cy="144.328" r="1" />
		<circle cx="146.556" cy="114.328" r="1" />
		<circle cx="156.556" cy="84.328" r="1" />
		<circle cx="126.556" cy="74.328" r="1" />
		<circle cx="110.556" cy="88.328" r="1" />
		<circle cx="190.556" cy="88.328" r="1" />
		<circle cx="204.556" cy="83.328" r="1" />
		<circle cx="227.556" cy="87.328" r="1" />
		<circle cx="221.556" cy="79.328" r="1" />
		<circle cx="252.556" cy="87.328" r="1" />
		<circle cx="172.556" cy="87.328" r="1" />
		<circle cx="162.556" cy="67.328" r="1" />
		<circle cx="142.556" cy="57.328" r="1" />
		<circle cx="122.556" cy="67.328" r="1" />
		<circle cx="90.556" cy="79.328" r="1" />
		<circle cx="63.556" cy="86.328" r="1" />
		<circle cx="73.556" cy="73.328" r="1" />
		<circle cx="110.556" cy="76.328" r="1" />
		<circle cx="97.556" cy="67.328" r="1" />
		<circle cx="116.556" cy="56.328" r="1" />
		<circle cx="146.556" cy="73.328" r="1" />
		<circle cx="140.556" cy="83.328" r="1" />
		<circle cx="126.556" cy="88.328" r="1" />
		<circle cx="195.556" cy="76.328" r="1" />
		<circle cx="176.556" cy="74.328" r="1" />
		<circle cx="156.556" cy="144.328" r="1" />
		<circle cx="136.556" cy="131.328" r="1" />
		<circle cx="126.556" cy="104.328" r="1" />
		<circle cx="114.556" cy="178.328" r="1" />
		<circle cx="166.556" cy="164.328" r="1" />
		<circle cx="196.556" cy="154.328" r="1" />
		<circle cx="183.556" cy="127.328" r="1" />
		<circle cx="228.556" cy="130.328" r="1" />
		<circle cx="216.556" cy="164.328" r="1" />
		<circle cx="256.556" cy="174.328" r="1" />
		<circle cx="280.556" cy="125.328" r="1" />
		<circle cx="102.556" cy="164.328" r="1" />
		<circle cx="142.556" cy="154.328" r="1" />
		<circle cx="52.556" cy="144.328" r="1" />
		<circle cx="72.556" cy="174.328" r="1" />
		<circle cx="42.556" cy="164.328" r="1" />
		<circle cx="92.556" cy="104.328" r="1" />
	</g>
</pattern>
