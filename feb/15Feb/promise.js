// 1
// const promise = new Promise((resolve, reject) => {
//     reject(Error('Error occurred'));
//   });
  
//   promise.catch(error => console.log(error.message));
//   promise.catch(error => console.log(error.message));

// 2
// console.log("start")
// const promise1 = new Prmoise((resolve,reject)=>{
//     console.log(1)
// })
// console.log("end")

// 3
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
// }).then(() => {
//   console.log('Promise 2');
// });

// console.log('End');// Start =>End =>Promise 1 =>Promise 2 =>Timeout 


// 4
// const promise = new Promise((resolve, reject) => {
//     console.log('Promise created');
//     resolve('Resolved');
//   });
  
//   promise.then(value => {
//     console.log(value);
//     return 'Chained';
//   }).catch(err => {
//     console.log('Error:', err);
//   }).then(value => {
//     console.log('Second then:', value);
//   });// Promise created=>Resolved =>Second then: Chained

// 5
async function test() {
    try {
      await Promise.reject('Error occurred');
    } catch (error) {
      console.log('Caught:', error);
    }
    console.log('After catch');
  }
  
  test();// Caught: Error occurred=> After catch
  