// 1 summ array elements
// let arr = [10,20,30,40,50]
// function sumOfArray(arr){
//     let a = 0;
//     for(let i = 0;i<arr.length;i++){
//         a += arr[i]
//     }
//     console.log(a)
// }
// sumOfArray(arr)

// using inbuilt method
// let arr = [10,20,30,40,50]
// function sumOfArray(arr){
// let result = arr.reduce((acc,crr)=>acc + crr)
// return result
// }
// console.log(sumOfArray(arr))



//2.count vowels
// let vowel = ["a","e","i","o","u"];
// let str = "Anaida"
// function countVowel(v,str){
//     let count = 0;
//     let lower = str.toLowerCase()
//     for(let i=0;i<lower.length;i++){
//         if(vowel.includes(lower[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowel(vowel,str))

// USING INBUILT METHOD
// let vowel = "aeiou";
// let str = "Anaida"
// function countVowel(v,str){
//  let result = str.toLowerCase().split("").filter(char=>vowel.includes(char)).length
//  return result
// }
// console.log(countVowel(vowel,str))
