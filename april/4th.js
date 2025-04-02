//1.currying
// function multiplyOne(a){
//     return function multiplyTwo(b){
//        return function multiplyThree(c){
//            return function multipleFour(d){
//                 return a*b*c*d
//             }
//         }
//     }
// }
// console.log(multiplyOne(1)(2)(3)(4))

// //arrow function
// const multiply=(a)=>(b)=>(c)=>(d)=> a*b*c*d

// console.log(multiply(1)(2)(3)(4))

// async await
// function userData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({name:"Anaida",age:26,country : "INDIA"})
//         },5000)
//     })
// }

// async function getUserData(){
//     console.log("Getting data...")
//     let data = await userData();
//      return data
// }
// getUserData().then((result)=>{
//     console.log(result)
// })

// promise
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("REsolved")
//     },1000)
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolved2")
//     },4000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("rejected")
//     },5000)
// })

// const data = await Promise.all([promise,promise2,p3])
// console.log(data)

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("REsolved")
//     },1000)
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolved2")
//     },4000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("nsn")
//     },5000)
// })

// async function getData(){
//     try{
//         const data = await Promise.any([promise,promise2,p3]);
//         return data
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// getData().then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Promise settled")
// })

// const randomPromise = new Promise((resolve,reject)=>{
//     const success = Math.random() > 0.5;
//     if(success){
//         console.log("Success")
//     }else{
//         console.log("fail")
//     }
// })

// randomPromise.then((data)=>{
//     return data
// })
// .catch((error)=>{
//     return error
// })
// .finally(()=>{
//     return "Promise Settled"
// })

// function task1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("resolved after 1")
//         },1000)
//     })
// }

// function task2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Resolved in 4")
//         },4000)
//     })
// }

// task1().then((output)=>{
//     console.log(output);
//     return task2()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

// currying
// function multiply(a){
//     return function multiply2(b){
//         return a*b
//     }
// }

// const multiplyByTwo = multiply(10)
// console.log(multiplyByTwo(2))
// console.log(multiply(10)(10))

// const multiply =(a)=>(b)=>(c)=> a+b+c;
// // console.log(multiply(1)(1)(1))
// const multiply2 = multiply(10);
// const multiply3 = multiply2(10);
// console.log(multiply3(10))

// const logger = level =>errorMessage=> console.log(`${[level]}: ${errorMessage}`)
// const newLogger = logger("error");
// newLogger("Error fetching data")

// const addition = a => b => b!== undefined ? addition(a+b) : a
// console.log(addition(10)(10)(20)(30)())

// function multiply(a){
//     return function multiply2(b){
//         if(b!== undefined){
//             return multiply(a*b)
//         }else{
//             return a
//         }
//     }
// }
// console.log(multiply(1)(2)(3)(4)())

// const sum = a => b=> b !== undefined ? sum(a+b) : a;

// console.log(sum(10)(20)(30)(40)(50)())

const user = [
  {
    name: "tom",
    role: "admin",
  },
  {
    name: "tim",
    role: "customer",
  },
  {
    name: "tum",
    role: "admin",
  },
];

const filterByRole =
  (property =
  value =
    (array) => array.filter((user) => user[property] === value));

const forAdmin = filterByRole("role")("admin");
console.log(forAdmin(user));
