
let str = "i am programming in javascript"
const longestWord =(s)=>{
    let words = s.split(" ")
    let longest = ""
    for(let i = 0;i<words.length;i++){
        if(words[i].length > longest.length){
            longest = words[i]
        }
    }
    return longest
}
console.log(longestWord(str))