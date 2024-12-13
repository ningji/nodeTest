const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

const freq = {};

const ret = users.map((e) => {
    if (freq[e.age]) freq[e.age]++;
    else freq[e.age] = 1;
});


users.forEach((e) => { e.freq = freq[e.age] });

console.dir(users);
//console.dir(freq);
