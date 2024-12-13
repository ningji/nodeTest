const request = require('request');
const { promisify } = require('util');
const requestAsync = promisify(request);

(async () => {
	try {
		//const res = await requestAsync.get('http://www.yahoo.com');
		//const res = await requestAsync.get('https://www.nasdaq.com/earnings/report/msft');
		const res = await requestAsync.get('https://nodejs.org/dist/latest-v8.x/docs/api/util.html');
		console.log('success !');
		console.log(res.headers);
	} catch (e) {
		console.log('failure !');
		console.log(e.statusCode);
	}
})();

console.log('Bye ......');