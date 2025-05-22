// let str = "madam"
// function isPalindrome(str){
//     let reverse = ""
//     for(let i = str.length-1;i >= 0;i--){
//         reverse += str[i]
//     }

//     if(reverse === str){
//         console.log("is palindrome")
//     }else{
//         console.log("not a palindrome")
//     }
// }
// isPalindrome(str)


// let str = "Anaida";

// function countVowel(str){
//    let vowels = ["a","e","i","o","u"] ;
//    let count = 0;
//    for(let i = 0;i<str.length;i++){
//        if(vowels.includes(str[i].toLowerCase())){
//            count++
//        }
//    }
//    return count
// }
// console.log(countVowel(str))



// function capitalizeWords(sentence) {
//   return sentence
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("hello world")); 



function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(findLongestWord("The quick brown fox")); 
