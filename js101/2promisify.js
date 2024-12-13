const util = require('util');
const fs = require('fs');


const func1 = (path) => {
	fs.stat(path, function(err, stats) {
		if(err) {
			console.log('oops 1 -----');
		} else {
			console.log('good 1 -----');
		}
	});
};
func1('.');


const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  // Do something with `stats`
		console.log('good 2 -----');
}).catch((error) => {
  // Handle the error.
		console.log('oops 2 -----');
});


const statP = util.promisify(fs.stat);

async function callStat(path) {
  const stats = await statP(path);
		console.log('good 3 -----');
  console.log(`This directory is owned by ${stats.uid}`);
}
callStat('.');
console.log('Good bye ...');
