const str0 = 'hi, i love you, i love u so much ! love !!';
const str1 = str0.replace(/,|!/g, "");
console.log(str1);


const arr1 = str1.split(' ');
console.dir(arr1);

const ret = {};

arr1.forEach((e) => {
    if(ret[e]) ret[e]++;
    else ret[e]=1;
});
console.log('-------------------');
console.log(ret);
console.log(typeof ret);

//const ret1 = Object.entries(ret).sort((k1, k2) => k1[0]-k2[0]);
const ret1 = Object.entries(ret).sort((k1, k2) => k1[1]-k2[1]);
//const ret1 = Object.entries(ret).sort(([k1], [k2]) => ret[k1]-(ret[k2]));
//const ret1 = Object.entries(ret).sort(([k1], [k2]) => ret[k1].localeCompare(ret[k2]));
console.dir(ret1);
