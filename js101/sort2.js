const d1 = [
    { k: "aa", v:2},
    { k: "b", v:1},
    { k: "a1", v:3},
];

//const d2 = d1.sort((a,b) => (a[k] - b[k]));
const d2 = d1.sort((a,b) => (b.k - a.k));

console.log(d1);
console.log(d2);
