const httpRequester = require('@mylib/retry');
const HttpStatus = require('http-status');
const getToekn = require('./getToken');


const sendRequestData = async(requestData, log) => {

	const mastRequest = async(token) => {
		const requester = httpRequest.defaults(
			{
				retryConfig: {
					maxAttempts: 2,
					retryDelay: 0,
				},
				json: true,
				auth: {
					bearer: token,
				},
				log,
			}
		};

	
		const response = await requester(requestData);

		return response;
	};

	const getNewToken = async (key) => {
		const token = await getToken(project, SCOPES, key);
		return token;
	};

	const abortRequest = (e) => {
		throw new UpstreamError(componentName,
			HttpStatus.INTERNAL_SERVER_ERROR,
			requestName, e);
	};

	const sendRetryableRequest = async (prevError = false) => {
		try {
			const key = prevError;
			const token = await getNewToken(key);
			const resp = await makeRequest(token);
			return _.get(resp, 'body');
		} catch (e) {
			if (prevError || e.code !== HttpStatus.FORBIDDEN) 
				return abortRequest(e);
			return sendRetryableRequest(e);
		}
	};

	const resp = await sendRetryableRequest();
	return resp;
};
