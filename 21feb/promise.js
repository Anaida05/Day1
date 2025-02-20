// const promise = new Promise((resolve, reject) => {
//   const str1 = "Hello";
//   const str2 = "Hello";

//   if (str1 === str2) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise.then(()=>{
//     console.log("promise resolved")
// }).catch((error)=>{
//     console.log("Promise rejected")
// })

// const isEven = new Promise((pass, fail) => {
//   //resolve and reject are not keywords we can ue any words for the methods
//   let num = 5;
//   if (num % 2 == 0) {
//     pass("Number is even");
//   } else {
//     fail("Number is odd");
//   }
// });

// isEven
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// methods of promise
// 1 .all()
// Promise.all([
//     Promise.resolve("REsolved"),
//     Promise.resolve("REsolved"),
//     Promise.reject("Rejected")
// ])
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))

// 2 .allSettled()
// Promise.allSettled([
//     Promise.reject("rejected"),
//     Promise.resolve("Resolved"),
//     Promise.reject("Rejected")
// ])
// .then((results)=>console.log(results))

// 3 .race() //doesn't wait for other promises in array to settle,it resolves or rejects as sonn as the first promise rejects or resolves.
// Promise.race([
//   new Promise((resolve) => {
//     setTimeout(() => resolve("Resolved in 5 secs"), 5000);
//   }),
//   new Promise((reject) => {
//     setTimeout(() => reject("Rejected in 2 secs"), 2000);
//   }),
// ]).then((results) => console.log(results));

// 4 .any()
// Promise.any([
//     Promise.reject("Rejected"),
//     Promise.reject("Rejected"),
//     Promise.resolve("Resolve"),
// ])
// .then((result)=>console.log(result))

// 5 Chaining with Promise.prototype.then() Method
// Promise.resolve(10)
// .then((value)=>value+20)
// .then((value)=>value *10)
// .then((output)=>console.log(output))


//resolves as soon as any of the promise in array resolves else it gives aggregate error if all the input arrays are rejected.
// Promise.any([
//   new Promise((_,reject)=>setTimeout(()=>reject("Rejected 2"),2000)),
//   new Promise((_,reject)=>setTimeout(()=>reject("Rejected in 1"),1000)),
//   new Promise((_,reject)=>setTimeout(()=>reject("reeject i 4"),4000))
// ])
// .then((result)=>console.log(result))
// .catch((output)=>console.log(output))

// Promise.race([
//   new Promise((_,reject)=>setTimeout(()=>reject("4 secs"),4000)),
//   new Promise((_,reject)=>setTimeout(()=>reject("2 secs"),2000)),
//   new Promise((resolve)=>setTimeout(()=>resolve("3 sec"),3000))
// ])
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))

// Promise.allSettled([
//   new Promise((_,reject)=>setTimeout(()=>reject("4 secs"),4000)),
//   new Promise((resolve)=>setTimeout(()=>resolve("1 sec"),1000)),
//   Promise.resolve("resolved")
// ])
// .then((result)=>console.log(result))
// .catch((output)=>console.log(output))

// Promise.all([
//   new Promise((resolve)=>setTimeout(()=>resolve("3 sec"),3000)),
//   new Promise((_,reject)=>setTimeout(()=>reject("2"),2000)),
//   new Promise((_,reject)=>setTimeout(()=>reject("error occured"),1000))
// ])
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))