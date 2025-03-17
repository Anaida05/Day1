// var canPlaceFlowers = function (flowerbed, n) {
//   let count = 0;
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (
//       flowerbed[i] === 0 &&
//       (i === 0 || flowerbed[i - 1] === 0) &&
//       (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
//     ) {
//       flowerbed[i] = 1;
//       count++;
//       if (count >= n) return true;
//       i++;
//     }
//   }
//   return count >= n;
// };

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));

// let a = "red";
// let b = "blue";
//  [a,b] = [b,a]

// console.log(a)
// console.log(b)

// let hour = 10;
// if(hour >=6 && hour< 12){
//     console.log("good morning")
// }else if(hour>= 12 && hour <18){
//     console.log("good afternoon")
// }else{
//     console.log("good evening")
// }

// const person = {
//     name : "anaida",
//     age : 25
// }
// for(let key in person){
//     console.log(key,person[key])
// }

// let color = ["blue","red","yellow"]; //not recommended instead we can use the for of or for each
// for(let ele in color){
//     console.log(color[ele])
// }

// for(let ele of color){
//     console.log(ele) //we dont have to use the bracket notation to access the elements
// }

// break
// let i = 0;
// while (i <= 10) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// let i = 0;
// while(i <=10){
//     if(i%2==0){
//         i++;
//         continue
//     }
//     console.log(i);
//     i++;
// }

// waf that takes two numbers and returns the maximum of two;
// let one = 10,two =5;
// function maxofTwo(one,two){
//     if(one > two){
//         return one
//     }else{
//         return two
//     }
// }
// console.log(maxofTwo(one,two))

// landscape or potrait
// let width = 100, height= 50
// function landscape(width,height){
//     if(width > height){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(landscape(width,height))

//much shorted and cleaner way
// function landscape(width,height){
//     return (width>height)
// }
// console.log(landscape(width,height));

// fizzbuzz
// let input = "anaida";
// function fizzbuzz(i) {
//   if (i !== Number) {
//     return NaN;
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     return "fizzbuzz";
//   } else if (i % 5 === 0) {
//     return "buzz";
//   } else if (i % 3 === 0) {
//     return "fizz";
//   } else {
//     return i;
//   }
// }
// console.log(fizzbuzz(input));


// let speed = 80;
// function speedLimit(speed){
//     let speedLimit = 70;
//     let kmphr = 5
//     if(speed <= speedLimit){
//         return "ok"
//     }else{
//         const points = Math.floor((speed-speedLimit)/5);
//         if(points >= 12){
//             return "license suspended"
//         }else{
//             return [points,"points"]
//         }
//     }
// }
// console.log(speedLimit(speed))

function showNumbers(n){
    for(let i=0;i<=n;i++){
        if(i%2 === 0){
            console.log(i,"even")
        }else{
            console.log(i,"odd")
        }
    }
}
console.log(showNumbers(10))