// Remove Duplicate Characters from a String
// Input: "banana"
// Output: "ban"
// let str = "banana";
// function removeDup(str) {
//   let duplicate = {};
//   let output = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (!duplicate[char]) {
//       output += char;
//       duplicate[char] = true; //mark as present in object
//     }
//   }
//   return output;
// }
// console.log(removeDup(str));

// let str = "banana"
// function duplicateChar(str){
// let duplicate = str.split("");
// let output = []
// // console.log(duplicate)
// for(let i = 0;i < duplicate.length;i++){
//     if(!output.includes(duplicate[i])){
//         output.push(duplicate[i]);
//     }
// }return output.join("")
// }
// console.log(duplicateChar(str))

// 2Replace All Spaces in a String with %20 (URL Encoding)
// Input: "hello world"
// Output: "hello%20world"

// let str = "hello world";
// let output = str.split(" ").join("%20");
// console.log(output)

// let str = "hello world";
// function removeSpace(str) {
//   let output = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       output += "%20";
//     } else {
//       output += str[i];
//     }
//   }
//   return output;
// }
// console.log(removeSpace(str));
