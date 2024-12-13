'use strict';
 
setTimeout(function () {
    console.log('three');
  }, 0);
  
  new Promise(function(resolve,reject){
      console.log(1);
    resolve(1);
    console.log(2);
  }).then(function () {
    console.log('two');
  });
  
  console.log('one');

process.nextTick(()=>{
  console.log('nextTick3');
})

