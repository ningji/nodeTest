const { promisify } = require("util");

//////////////////////////////////////////////
// method 1
console.log('1.1 ...');
setTimeout( function() {
	console.log('basic timeout !')
}, 8000)


//////////////////////////////////////////////
// method 2
console.log('2.1 ...');
const wait10000 = ()=> new Promise((resolve, reject) => {
	setTimeout(resolve, 10000)
});


/*
const wait1sec = async ()=> { new Promise((resolve, reject) => {
	setTimeout(resolve, 1000)
	});
};
*/

//console.log('after 1 second ...');

wait10000().then( () => {
	console.log('after 10 second ...');
});

//////////////////////////////////////////////
// method 3
const waitify = promisify(setTimeout);

console.log('3.1 ...');
waitify(2000).then( () => {
	console.log('after 2 second ...');
});


console.log('3.2 ...');
const wait5sec = async ()=> {
	await waitify(5000);
	console.log('after 5 second ...');
}

wait5sec();
