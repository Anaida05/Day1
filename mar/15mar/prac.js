// console.log(a)
// console.log(myFn)
// var a = 10
// myFn()
// function myFn(){
//     console.log("abc")
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

// function a() {
//     var a = 10;
//     function b() {
//       a = 20;
//       console.log(a);
//     }
//     b();
//     console.log(a);
//   }
//   a();

// function a() {
//     var a = 10;
//     function b() {
//       var a = 20;
//       function c() {
//         console.log(a);
//       }
//       c();
//     }
//     b();
//   }
//   a();

// function foo() {
//     function bar() {
//       return 5
//     }
//     return bar()
//     function bar() {
//       return 10
//     }
//   }
//  console.log(foo());

// function printA() {
//     a = 1;                    // a gets space in global scope
// }
// printA();
// console.log(a);
// function a() {
//     var b = function () {
//         return 3;
//     };
//     return b();
//     var b = function () {
//         return 8;
//     };
// }
// alert(a());

// // Count the Number of Vowels in a String
// // Input: "javascript"
// // Output: 3
// let str = "javascript";
// function countVowels(s) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (s[i] === vowels[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(countVowels(str));

// inbuilt
// let str ="javascript";
// function countVow(str){
// let count =0;
// let vowel = new Set(["a","e","i","o","u"]);
// for(let s of str){
//     if(vowel.has(s)){
//         return true
//     }
// }
// return false
// }
// console.log(countVow(str))

// You have a list of numbers. You need to find if a given number exists in the list.
// let numbers = [3, 8, 12, 5, 19, 7];
// let target = 5;
// const findTarget = (num, t) => {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === t) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(findTarget(numbers, target));

// binary search
// let numbers = [3, 5, 7, 8, 12, 19];
// let target = 5;
// function findTarget (n,t){
//     let start = 0;
//     let end = n.length-1;
//     while(start <= end){
//         let mid = Math.floor((start+end)/2);
//         if(n[mid] === t){
//            return true 
//         }else if(n[mid] < t){
//             start = mid + 1;
//         }else if(n[mid] > t){
//             end = mid - 1;
//         }
//     }
//     return false
// }
// console.log(findTarget(numbers,target))

// Capitalize the First Letter of Each Word
//inbuilt method
// Input: "hello world"
// Output: "Hello World"
// let str = "hello world";
// function capitalize(s){
//     let word = str.split(" ")
//     for(let i = 0; i < word.length;i++){
//         word[i] = word[i][0].toUpperCase() + word[i].slice(1);
//         console.log(word);
//     }
//     return word.join(" ")
// }
// capitalize(str)

// Find the Longest Word in a Sentence

// Input: "I love programming"
// Output: "programming"

// let str = "I love programming";
// function long(str){
// let word = str.split(" ");
// let result = word[0];

// for(let i = 0;i<word.length;i++){
//     if(word[i].length > result.length){
//         result = word[i];
//     }
// }
// return result
// }
// console.log(long(str))

