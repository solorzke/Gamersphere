const sanitize = require('mongo-sanitize');

class SanitizeParams {
	constructor(request) {
		this.request = request;
	}

	disinfectRequest() {
		if (this.request.hasOwnProperty('body')) {
			Object.keys(this.request.body).forEach((key) => {
				let dirtyValue = this.request.body[key];
				this.request.body[key] = sanitize(dirtyValue);
			});
		}
		if (this.request.hasOwnProperty('params')) {
			Object.keys(this.request.params).forEach((key) => {
				let dirtyValue = this.request.params[key];
				this.request.params[key] = sanitize(dirtyValue);
			});
		}
		if (this.request.hasOwnProperty('query')) {
			Object.keys(this.request.query).forEach((key) => {
				let dirtyValue = this.request.query[key];
				this.request.query[key] = sanitize(dirtyValue);
			});
		}
		return this.request;
	}
}

module.exports = SanitizeParams;
