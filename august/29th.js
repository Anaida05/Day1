// let str = "anaida"
// function reverseStr(s){
//     let result = ""
//     for(let i = s.length -1;i>=0;i--){
//         result += s[i]
//     }
//     return result
// }
// console.log(reverseStr(str))

// let s = "abcdefg"
// function isPalindrome(s){
//     let start = 0
//     let end = s.length - 1
//     while(start<end){
//         if(s[start] !== s[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// }
// console.log(isPalindrome(s))


let s = "anaida"
function countVowel(s){
  let vowel = ["a","e","i","o","u"]
  let vowelCount = 0
  let consonantCount = 0
  
  for(let i = 0;i<s.length;i++){
     let isVowel = false
      for(let j = 0;j<vowel.length;j++){
          if(s[i] === vowel[j]){
              isVowel = true
              vowelCount ++
          }
      }
      if(!isVowel){
          consonantCount++
      }
  }
  return {"vowelCount":vowelCount,"consonantCount":consonantCount}
}
console.log(countVowel(s))