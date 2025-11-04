const enableLogging = true;
const enableEventLogging = true;

function AppLog (...args) {
	args[0] = "🗺️"+args[0];
	if (enableLogging) console.log(...args);
}

function EventLog (...args) {
	args[0] = "🧭"+args[0];
	if (enableEventLogging) console.log(...args);
}