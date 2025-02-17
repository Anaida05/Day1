// // q1
// let candies = [2, 3, 5, 1, 3], extraCandies = 3, output = []
// var kidsWithCandies = function (candies, extraCandies) {
//     let max = candies[0]
//     for (let i = 0; i < candies.length; i++) {
//         if (candies[i] > max) {
//             max = candies[i]
//         }
//     }
//     let output = []
//     for (let i = 0; i < candies.length; i++) {
//         let sum = candies[i] + extraCandies;

//         if (sum >= max) {
//             output[output.length] = true;
//         } else {
//             output[output.length] = false;
//         }
//     }
//     return output;
// };
// console.log(kidsWithCandies(candies, extraCandies)) 

// let flowerbed = [1, 0, 0, 0, 1];
// let n = 1;

// var canPlaceFlowers = function (flowerbed, n) {
//     for (let i = 0; i < flowerbed.length; i++) {
//         if (flowerbed[i] === 0 && 
//             (i === 0 || flowerbed[i - 1] === 0) && 
//             (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
//             flowerbed[i] = 1; 
//             n--;  
//             if (n === 0) return true;  
//         }
//     }
//     return n === 0; 
// };

// console.log(canPlaceFlowers(flowerbed, n)); 
