const ar = [1,2,3,4,5,6,7,8,9];

const twoSum = (a, tgt) => {
    const check = {};

    a.forEach((e) => {
        if (check[e])   console.log(e, tgt-e);
        //if (check[e])   console.log(e, tgt-e);
        else check[tgt-e] = e;
    });


    //console.log(check);
    return check;

}

twoSum(ar, 9);
