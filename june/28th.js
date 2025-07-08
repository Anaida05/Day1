// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// let nums = [2,7,11,15];
// let target = 9;
// const twoSum=(nums,target)=>{
//     let output = []
//   for(let i = 0;i<nums.length;i++){
//       for(let j = i+1;j<nums.length;j++){
//           if(nums[i]+nums[j] === target){
//               output.push(i,j)
//           }
//       }
//   }
//   return output
// }
// console.log(twoSum(nums,target))


// let arr = [1, 4, 2, 3, 4]
// function secondLargest(arr){
//     let largest = arr[0];
//     let secondLargest = 0;
    
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] > largest){
//             secondLargest = largest
//             largest = arr[i];
//         }else if(arr[i] < largest && arr[i] > secondLargest){
//             secondLargest = arr[i]
//         }
//     }
//     return secondLargest
// }
// console.log(secondLargest(arr))