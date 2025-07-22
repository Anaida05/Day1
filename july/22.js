// var filter = function(arr, fn) {
//     let n = false;
//     let result = []
//     for(let i = 0;i<arr.length;i++){
//         n = fn(arr[i],i)
//         if(n){
//             result.push(arr[i])
//         }
//     }
//     return result
// };


// var map = function(arr, fn) {
//     for(let i = 0;i < arr.length;i++){
//         arr[i] = fn(arr[i],i)
//     }
//     return arr}


var createCounter = function(init) {
    let current = init
    return{
        increment:()=>++current,
        reset:()=>{
            current = init
            return current
        },
        decrement:()=>--current,
     }
};
let counter = createCounter(5)