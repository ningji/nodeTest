const a1 = [
    {
        id: 1,
        msgs: ['h11', 'h12']
    },
    {
        id: 2,
        msgs: ['h21', 'h22']
    },
];

const a2 = a1.map(e => e.msgs.push('haha'));

console.log('---------------------');
console.dir(a1, {depth: null});
console.log('---------------------');
console.dir(a2, {depth: null});
console.log('---------------------');


const b1 = ['b1', 'b2'];
b1.map(e => e+'0');
console.dir(b1, {depth: null});
