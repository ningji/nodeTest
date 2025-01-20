const num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


let sofar = num[0];
let ret = num[0];

for (let i = 1; i<num.length; i++) {
	sofar = Math.max(sofar, 0) + num[i];

		ret = Math.max(sofar, ret)

}

console.log(ret);
