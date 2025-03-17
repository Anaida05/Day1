// recursive function
// function counter(count) {
//   console.log(count);
//   if (count > 1) {
//     count = count - 1;
//     return counter(count);
//   } else {
//     return 0;
//   }
// }
// console.log(counter(5));

// factorial
// function fact(num){
//     if(num === 0){
//         return 1
//     }else{
//         return num * fact(num-1)
//     }
// }
// console.log(fact(5))



// generator function
// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3
// }
// const result = generator();
// console.log(result.next()) //will return the object with value and done property
// console.log(result.next())
// console.log(result.next().value)//will only return the output of the value property
// console.log(result.next().value)

// function* generator(){
//     yield "Hello";
//     yield "world";
//     yield "done";
// }
// const result = generator();
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())



// infinite number generator
// function* gen(){
//     let num = 1;
//     while(true){
//         yield num++
//     }
// }

// const result = gen();
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
