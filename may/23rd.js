// let str = "hello world! this is javascript";
// function findLongest(str){
//     let word = str.split(" ")
//     let largest = word[0];

//     for(let i = 1;i<word.length;i++){
//       if(largest.length < word[i].length){
//         largest = word[i]
//       }
//     }
//     return largest
    
// }
// console.log(findLongest(str))

// Input: "abcde", "deabc"

function isrotation(str, str2) {
    let n = str.length;
    let fIx = -1;
    for(let i = 0; i < n; i++) {
        if(str[i] === str2[0]) {
            fIx = i;
            break;
        }
    }

    const rotated = str.substring(fIx) + str.substring(0, fIx)
    return rotated === str2;

}

console.log(isrotation("abcde", "deabc"))