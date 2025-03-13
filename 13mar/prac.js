// let a = [1,2,3];
// a[10] = 11;
// console.log(a) //js will create empty slots

// setInterval
// let count = 0;
// const Counter = setInterval(()=>{
//     console.log("Counter :",count);
//     count++;

//     if(count > 5){
//         clearInterval(Counter);
//         console.log("Stopped!")
//     }
// },1000)

// const date = new Date();
// console.log(date.toLocaleString()) //gives both date and time
// console.log(date.toDateString()) //gives date
// console.log(date.toTimeString()) //gives time


// let progress = 0;
// const progressBar = setInterval(()=>{
//     progress += 10;
//     console.log(`Progress: ${progress}%`);

//     if(progress >=100){
//         clearInterval(progressBar);
//         console.log("Updte completed")
//     }
// },2000)

// "use strict";
// function abc() {
//   console.log(this);
// }
// abc()
 a = 19;
console.log(this.a)