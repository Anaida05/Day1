// Find the Most Frequent Character
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
console.log(freq("apple"))