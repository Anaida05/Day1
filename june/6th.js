// Flatten a Nested Array
// Input: [1, [2, [3, 4], 5]] → Output: [1, 2, 3, 4, 5]
// let arr =[1, [2, [3, 4], 5]]
// function nested(a){
//    let output = a.flat(Infinity) 
//    console.log(output)
// }
// nested(arr)

// let arr =[1, [2, [3, 4], 5]]

//   function flatten(item){
//     let output = [];

//      for(let i = 0;i < item.length;i++){
//       if(Array.isArray(item[i])){
//           output.push(...flatten(item[i]))
//       }
//       else{
//           output.push(item[i])
//       }
//   }
//     return output
//   }
//   console.log(flatten(arr))



