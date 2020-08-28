const sanitize = require('mongo-sanitize');

class SanitizeParams {
	constructor(request) {
		this.request = request;
	}

	disinfectRequest() {
		Object.keys(this.request.body).forEach((key) => {
			let dirtyValue = this.request.body[key];
			this.request.body[key] = sanitize(dirtyValue);
		});
		return this.request;
	}
}

module.exports = SanitizeParams;
