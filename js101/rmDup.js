let a0 = [1,2,3,4,3,6,5,4]

const unique = (a) => {
    return a.filter((e, idx) => a.indexOf(e) === idx);

}

console.log(unique(a0))
