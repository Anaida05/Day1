// synchronous callback
// const a = ()=>{
//     console.log("Hello")
// }
// const b=(a)=>{
// a()
// }
// b(a)

// ayschronous callback
// function a(b){
//     setTimeout(()=>{
//         console.log("a");
//         b()
//     },1000)
// }
// function b(c){
//     setTimeout(()=>{
//         console.log("b");
//         c()
//     },2000)
// }

// function c(cb){
//     setTimeout(()=>{
//         console.log("c")
//         cb()
//     },3000)
// }

// a(()=>{
//     b(()=>{
//         c(()=>{
//             console.log("Finished")
//         })
//     })
// })

// example of settimeout
// console.log("start");
// setTimeout(()=>{
//     console.log("timer")
// },2000);
// console.log("end")

// console.log("start");
// setTimeout(()=>console.log("Timer"),0);

// Promise.resolve().then(()=>{
//     console.log("promise")
// })

// console.log("end")

//higheroreder and firstclass function
// const higher=(first)=>{
//     console.log("higer order")
//      first()
// }
// higher(first)
// function first(){
//     console.log("first class function")
// }

// map()
// let num = [1,2,3,4,5,6,7,8,9,10];;
// const result = num.map((n)=>{
//     return n * 2
// })
// console.log(result)

// Filter()
// let a = [1,2,3,4,5,6,7,8,9,10];
// const result = a.filter((n)=>{
//     return n%2 === 0
// })
// console.log(result)

// reduce
// let n = [1,2,3,4,5,6,7,8,9,10];
// const sum = n.reduce((acc,curr)=>{
//     return acc+curr
// },0);
// console.log(sum)

// 
// Promise.all([
//     new Promise((resolve)=>{
//         setTimeout(() => {
//           resolve("2 secs")  
//         }, 2000);
//     }),
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("3secs")
//         },3000)
//     }),
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("4")
//         },4000)
//     })
// ])
// .then((result=>{
//     console.log(result)
// }))
// .catch((error)=>{
//     console.log(error)
// })

// Promise.allSettled([
//     new Promise((_,reject)=>{
//         setTimeout(()=>{
//             reject(2)
//         },2000)
//     }),
//     new Promise((_,reject)=>{
//         setTimeout(()=>{
//             reject(3)
//         },3000)
//     }),
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(4)
//         },4000)
//     })
// ])
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// chaining promise
// Promise.resolve(10)
// .then((result)=>result+20)
// .then((result)=>result+30)
// .then((ans)=>console.log(ans))

//do while example
// let num = 5;
// do{
// console.log(num);
// num--
// }while(num>0)

// let obj = {name : "anaida",age:25,job : "intern"};
// for(let key in obj){
//     console.log(key,obj[key])
// }

