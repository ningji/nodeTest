const request = require('request');
const { promisify } = require('util');
const requestAsync = promisify(request);
const _ = require('lodash');
const HttpStatus = require('http-status');

const defaultStrategy = (err, res) => {
	return _.get(err, 'code', false) ||
		(res && (res.statusCode >= HttpStatus.INTERNAL_SERVER_ERROR ||
			response.statusCode === HttpStatus.TOO_MANY_REQUESTS));
};

class RetryRequest {

	constructor (options) {
		this.options = options;
		this.maxAttempts = _.get(options, 'retryConfig.maxAttempts');
		this.retryDelay = _.get(options, 'retryConfig.retryDelay', -1);
		if (this.maxAttempts > 1 && this.retryDelay < 0) {
			throw new Error('retryDelay is not defined');
		}


		const retryStrategy = _.get(options, 'retryConfig.retryStrategy');
		this.retryStrategy = _.isFunction(retryStrategy) ? retryStrategy : defaultRetryStrategy;

		this.attempts = 0;
		this.log = _.get(options, 'log');
	}

	async reply(err, res) {
		if (this.attemps < this.maxAttemps 
		&& this.retryStrategy(err, res)) {
			await delay(this.retryDelay);
			return this.sendRequestWithRetry();
		}

		if (err) throw err;

		return res;
	}


	sync sendRequestWithRetry () {
		this.attempts += 1;
		try {
			const res = await requestAsync(this.options);
			if (res) {
				res.attempts = this.attemps;
			}
			return this.reply(null, res);
		} catch (err) {
			if (err) {
				err.attempts = this.attempts;
				return this.reply(err, null);
			}
		}
	}
};

const requestFactory = (options) => {
	return new RetryRequest(options).sendRequestWithRetry();
};

const defaults = (defaultOptions) => {
	const factory = (options) => {
		return requestFactory(_.merge({}, defaultOptions, options));
	};
	factory.defaults = (newDefaultOptions) => {
		return defaults(_merge({}, defaultOptions, newDefaultOptions));
	};
	return factory;
};

requestFactory.defaults = defaults;
requestFactory.defaultRetryStrategy = defaultRetryStrategy;

module.exports = requestFactory;
