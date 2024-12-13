const rp = require('request-promise');
//const url = 'https://www.examples.com'; //good
//const url = 'https://www.yahoo.com'; // binary output
//const url = 'https://www.homedepot.com/s/garage%2520door%2520opener?NCNI-5';
//const url = 'https://www.nasdaq.com/earnings/report/msft'; // won't finish
const url = 'http://www.rightline.net/calendar/index.html';
const options = {
	url,
	headers: {
		'User-Agent': 'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0'
	}
};

rp(options).then( (html) => {
	console.log(html);
	}).catch( (e) => {
		console.log(e);
	});
