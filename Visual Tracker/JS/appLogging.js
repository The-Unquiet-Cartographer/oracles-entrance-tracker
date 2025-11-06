const enableLogging = false;
const enableEventLogging = false;

function AppLog (...args) {
	args[0] = `🗺️ ${args[0]}`;
	if (enableLogging) console.log(...args);
}

function EventLog (...args) {
	args[0] = `🧭 ${args[0]}`;
	if (enableEventLogging) console.log(...args);
}

function LogElement (_DOMElement) {
	if (enableLogging) console.log("🗺️", _DOMElement);
}