// let incrementCount;
// function outer(){
//     let x = 10;
//     function innerIncrement(){
//         x++;
//         console.log(x)
//     }
//     incrementCount = innerIncrement
// }
// outer();
// incrementCount()
// incrementCount()
// incrementCount()
// incrementCount()

// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a + b + c );
//   }
//   inner()
// }
// outer();

// const promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       resolve("Hii from resolve")
//   },2000)
// })

// promise.then((message)=>console.log(message))

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("something went wrong");
//   }, 1000);
// });

// promise
//   .then((data) => console.log(data))
//   .catch((data) => {
//     console.log(data);
//   });

// const calculate = new Promise((resolve,reject)=>{
//   setTimeout(()=>resolve(5),2000)
// })

// calculate
// .then((num)=>{
//   console.log(num)
//   return num*2;
// })
// .then((num)=>{
//   console.log(num)
//   return num + 3
// })
// .then((num)=>{
//   console.log(num)
// })
// .catch((error)=>{
//   console.log(error)
// })

// promise.all
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("task 1");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("task 2");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("task 3");
//   }, 1000);
// });

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     return console.log(data);
//   })
//   .catch((error) => {
//     return console.log(error);
//   });

// race
// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       reject("rejected")
//   },2000)
// })

// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       resolve("REsolves")
//   })
// },1000)

// Promise.race([p1,p2])
// .then((value)=>{
//   console.log(value)
// })
// .catch((value)=>{
//   console.log(value)
// })

// promise allSettled
// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       resolve("1 sec")
//   },1000)
// })

// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       reject("2 sec")
//   },2000)
// })

// const p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       resolve("3 sec")
//   })
// },3000)

// Promise.allSettled([p1,p2,p3])
// .then((value)=>{
//   console.log(value)
// })
// .catch((value)=>{
//   console.log(value)
// })

// promise any
const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("2 sec")
  },2000)
})

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("1 sec")
  },1000)
})

Promise.any([p1,p2])
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})

// {
//   let abc = 10;
//   const a = 2;
//   var c = 10
//   console.log(abc);
//   console.log(a);
//   console.log(c);
// }
// console.log(c);

let a = 10;
a = 20;

// console.log(a);

// const abc = (a, b) => a + b;
// console.log(abc(10,20))

// let str = `shsuhdhsidi
// jsodjsd
// ldjasdoask`;
// console.log(str);

// let name = "anaida";
// console.log(`${name}`);

// function greet() {
//    return "helllo";
// }

// console.log(`${greet()} ${name}`);
