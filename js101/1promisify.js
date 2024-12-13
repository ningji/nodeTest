const { promisify } = require('util');
const { get, post, patch, del } = require('https');

const [ getPm, postPm ] = [get, post ].map(promisify);
//const getPm = promisify(get);

(async () => {
	try {
		const res = await getPm('https://www.yahoo.com');
		console.log('success !');
	} catch (e) {
		console.log('failure !');
		console.log(e.statusCode);
	}
})();
