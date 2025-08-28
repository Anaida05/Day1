// let str = "anaida"
// const isPalindrome =(str)=>{
//     let start = str[0]
//     let end = str.length -1

//     while(start<end){
//         if(str[start] !== str[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// }
// console.log(isPalindrome(str))


let str = "anaida"
const nonRepeatingChar =(str)=>{
    for(let i =0;i<str.length;i++){
        let repeat = false;
        for(let j=0;j<str.length;j++){
            if(i!==j && str[i]===str[j]){
                 repeat = true;
                break;
            }
        }
    if(repeat === false) return str[i]
    }
    return null
}
console.log(nonRepeatingChar(str))