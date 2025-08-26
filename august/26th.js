let str = "javascript"
const countChar =(str)=>{
   let vowel = ["a","e","i","o","u"]
   let vowelCount = 0
   let consonantCount = 0
   
   for(let i = 0;i<str.length;i++){
       let isVowel = false
       for(let j = 0;j<vowel.length;j++){
       if(str[i]===vowel[j]){
           vowelCount++
           isVowel = true
           break
       }
       }
       if(!isVowel){
           consonantCount++
       }
   }
   return {vowelCount,consonantCount}
}
console.log(countChar(str))



let sentence = "I am learning JavaScript"

const abc =(sen)=>{
let words = sen.split(" ")
let longest = ""
for(let i = 0;i<words.length;i++){
    if(words[i].length > longest.length){
        longest = words[i]
    }
}
    return longest
}
console.log(abc(sentence))