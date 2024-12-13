const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

const freq = users.reduce((acc, e) => {
        if (acc[e.age]) acc[e.age]++;
        else acc[e.age] = 1;
        return acc;
    }, {});


console.dir(freq);
