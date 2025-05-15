// function findLargest(a,b,c){
//     let largest;
//     if(a > b && a >c){
//     largest = a;
//     }
//     else if(a<b && b>c){
//         largest = b
//     }else{
//         largest = c
//     }
//  return largest   
// }
// console.log(findLargest(99,400,1000))

// odd even
// function oddEven(num){
//     if(num%2 === 0){
//         console.log("Num is even")
//     }else{
//         console.log("Number is odd")
//     }
// }
// oddEven(5)

// function reverseStr(str) {
//     let reversed ="";

//     for (let i = str.length-1; i >=0; i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(reverseStr("anaida"))

// Example: 123 → Output: 6 (1 + 2 + 3)
// let num = 123;
// function addDigits(num){
//     let output = num.toString().split("").map(Number).reduce((n,i)=>{
//         return n+i
//     })
//     return output
// }
// console.log(addDigits(num))