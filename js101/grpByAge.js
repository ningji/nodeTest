const ppl = [
    {name: "Alice", age: 21},
    {name: "Max", age: 20},
    {name: "Jane", age: 20}
];

const grpBy = (arr) => {
    const check = {};

    arr.forEach((e) => {
        if (check[e.age]) check[e.age].push(e);
        else check[e.age] = [e];
    });

    return check;
}


console.log(grpBy(ppl));

