function WaitForImages(callback) {
	const images = Array.from(document.images);
	const pending = [];

	for (const img of images) {
	//Skip images with no source
		if (img.src == "") continue;
	//If image is not loaded or is broken
		if (!img.complete || img.naturalWidth === 0) {
			pending.push(new Promise(resolve => {
				img.addEventListener('load', resolve, { once: true });
				img.addEventListener('error', resolve, { once: true });
			}));
	//Image is loaded, decode it
		} else {
			pending.push(img.decode().catch(() => {}));
		}
	}

	console.log("All images done");

//Wait for all load + decode promises to settle
	Promise.all(pending).then(() => {
		callback();
	});
}

function LoadScriptsInOrder(_scriptSrcs, startIndex = 0) {
	if (startIndex >= _scriptSrcs.length) return;
	console.log("Loading "+_scriptSrcs[startIndex]);
	const script = document.createElement('script');
	script.src = _scriptSrcs[startIndex];
	script.onload = () => LoadScriptsInOrder(_scriptSrcs, startIndex +1);
	document.body.appendChild(script);
}