const a0 = [1,5,7,2,1]

/*
for (let i=0; i<a0.length; i++)
    console.log(a0[i])

for (let i=a0.length-1; i>=0; i--) {
    console.log(a0[i])
    if (a0[i] > a0[i-1])

}
*/

let i = a0.length-1;
while(a0[i-1] >= a0[i]) i--;

[a0[i-1], a0[i]] = [a0[i], a0[i-1]]

console.log(i)
for (e of a0) console.log(e)
