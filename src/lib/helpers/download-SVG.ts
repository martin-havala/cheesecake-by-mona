export function downloadSVG(svg: SVGElement | HTMLElement | null, name: string) {
	if (!svg) {
		return '';
	}

	const serializer = new XMLSerializer();
	let source = serializer.serializeToString(svg);

	source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

	const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
	const svgUrl = URL.createObjectURL(svgBlob);
	const downloadLink = document.createElement('a');
	downloadLink.href = svgUrl;
	downloadLink.download = `${name}`;
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
}
