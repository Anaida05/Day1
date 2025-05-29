// let str = "madAm";
// function isPalindome(str){
//     let output = str.toLowerCase()
//     let reverse = "";
//     for(let i = output.length-1;i>=0;i--){
//         reverse += output[i]
//     }
//     if(output === reverse){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isPalindome(str))

// Find the largest number in an array
// let arr = [1,2,13,14,11,67,23,100];
// function findLargest(arr){
//     let largest = arr[0]
    
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }
// console.log(findLargest(arr))

// Example: removeDuplicates([1, 2, 2, 3]) ➞ [1, 2, 3]
// let arr = [1, 2, 2, 3];
// function dups(arr){
//     let output = [];
//     for(let i = 0;i<arr.length;i++){
//         if(!output.includes(arr[i])){
//             output.push(arr[i])
//         }
//     }
//     return output
// }
// console.log(dups(arr))

// Factorial of a number
// Example: factorial(5) ➞ 120
// let n = 5;
// function factorial(n){
//     let facto =1;
//     while(n>0){
//        facto *=  n
//         n--
//     }
//     return facto
// }
// console.log(factorial(n))