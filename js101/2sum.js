const a1 = [2,4,1,5,0,7];

const twoSum = (arr) => {
    const lookFor = {};

    arr.forEach(e => {
        if (lookFor[e]) { console.log(e, 9-e) }
        else { lookFor[9-e] = e }
    });
}

const sum = (total, action) => action(total)


//const ret = sum(9, twoSum, a1);
const ret = twoSum(a1);
//console.log(ret);
