function WaitForImages(callback) {
	const images = Array.from(document.images);
	const pending = [];

	images.forEach(img => {
	// Skip broken images (naturalWidth === 0)
		if (!img.complete || img.naturalWidth === 0) {		//At least one of our containers IS created without an image source, so it'll always hang...
		// Wait for load or error
			pending.push(new Promise(resolve => {
				img.addEventListener('load', resolve, { once: true });
				img.addEventListener('error', resolve, { once: true });
			}));
		}
		else {
		// Already loaded, but may not be decoded
			pending.push(img.decode().catch(() => {})); // decode() returns a Promise
		}
	});

// Wait for all load + decode promises to settle
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