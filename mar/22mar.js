// test();
// function test() {
//     return true
//     }

// console.log("hello".toUpperCase())
// let arr = [1,2,3,4]
// console.log(arr.push(5))
// console.log(Math.max(10,30,2))
// console.log(Math.min(10,30,2))

// const add=(a,b)=>a+b
// console.log(add(10,20))

// recursvie function
// function factorial(n){
//     if(n === 0) return 1;
//     return n * factorial(n-1)
// }
// console.log(factorial(5))

// fibonacci 
// function fibonacci(n){
//     if(n===0) return 0
//     if(n===1) return 1
    
//     return (n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(3))

//  for(var i=0; i<10; i++) { setTimeout(()=>{ console.log(i); },1000) }

//  function outer(){
//      var b = 2 
//      function inner(){
//          b++;
//          console.log(b) 
//          var b = 3; 
//      } inner(); 
//  } outer()

// (function () { 
//     try { 
//         throw new Error();
//         }
//         catch (x) {
//             var x = 1,
//             y = 2; 
//             console.log(x); 
//         } 
//         console.log(x); 
//         console.log(y); })();

//  Promise.resolve(3)
//  .then((res)=>{ console.log(res) })
//  .catch() 
//  .then() 
//  .then(res=>res) 
//  .then() 
//  .catch() 
//  .then((res)=>{ console.log(res) })

//  console.log([2] === [2]);


// let counter = (function(){
//     let count = 0;
    
//     return{
//         increment:()=>{
//             count++;
//             console.log(count)
//         },
//         decrement:()=>{
//             count--;
//             console.log(count)
//         }
//     }
// })()

// counter.increment()
// counter.increment()

// for(let i = 0;i<4;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)}

// async function greet(){
//     return "Hii from async fn"
// }
// greet().then((data)=>{
//     console.log(data)
// })

// function getUser(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Resolve in 2 secs")
//         },2000)
//     })
// }

// async function fetchData(){
//     try{
//         console.log("Fetching... data");
        
//         let data = await getUser();
//         console.log(data,"USer")
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// fetchData()

// let obj1 = {a : {b : 20}}
// let obj2 = {...obj1}
// obj2.a.b = 10
// console.log(obj1.a.b)

// let obj1 = {a : {b: 10}}

// let obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.a.b = 20;

// console.log(obj1)

