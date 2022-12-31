export function downloadSvg(svg: SVGElement) {
	//get svg source.
	const serializer = new XMLSerializer();
	let source = serializer.serializeToString(svg);

	//add xml declaration
	source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

	//convert svg source to URI data scheme.
	const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

	const downloadLink = document.createElement('a');
	downloadLink.target = '_blank';
	downloadLink.href = url;
	downloadLink.click();
}
