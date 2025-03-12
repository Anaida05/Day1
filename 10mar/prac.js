// 1.Find the Most Frequent Character
// Input: "apple"
// Output: "p"
const freq=(str)=>{
let myObj ={};
let maxValue = 0
let char = ""
for(let i = 0;i< str.length;i++){
    if(!myObj[str[i]]){
        myObj[str[i]] = 1
    }else{
        myObj[str[i]]++
    }
    // console.log(my/Obj)

    if(myObj[str[i]] > maxValue){
        maxValue = myObj[str[i]]
        char = str[i]
    }
}
return char
}
// console.log(freq("apple"))

// 2.Reverse a String
// Input: "hello"
// Output: "olleh"
const reverStr=(str)=>{
let result ="";
for(let i = str.length-1;i>=0;i--){
    result += str[i]
}
return result
}
// console.log(reverStr("anaida"))

//3. Check if a String is a Palindrome
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false
function isPalindrome(str){
let left = 0;
let right = str.length-1;
while(left < right){
    if(str[left] !== str[right]){
        return false
    }
    right--;
    left++
}
return true;
}
// console.log(isPalindrome("madam"))

//4 Count Vowels in a String
// Input: "javascript"
// Output: 3 (a, i, a)
// const countVowels = (s)=>{
// let vowel = ["a","e","i","o","u"];
// let count = 0;
// let foundVowels = []
// for(let i = 0;i<s.length;i++){
//     for(let j = 0;j<vowel.length;j++){
//         if(s[i] === vowel[j]){
//             count++;
//             foundVowels[foundVowels.length] = vowel[j]
//         }
//     }
// }
// return [count,foundVowels]
// }
// console.log(countVowels("javasript"))

//nested scoped
// const name = "Anaida";

// function greet(name){
//     var greeting = "Hello";
//     {
//         let language = "English";
//         console.log(`${language}:${greeting}, ${name}`)
//     }
// }
// greet(name)

