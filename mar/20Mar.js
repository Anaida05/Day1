// let count = 0;

// function outer() {
//   function inner() {
//     console.log(++count);
//   }
//   inner(); //closures example without using the return keyword
// }

// outer();
// outer();
// outer();

// const counter = {
//     count : 0,
//     increment(){
//         console.log(++this.count)
//     }
// }
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()

// "use strict"
// function show() {
//   console.log(globalThis); // In non-strict mode, this → window (or global in Node)
// }
// show();

// const myObj = {
//   a: 10,
//   x: ()=> { //this will be NaN as the this.a is going to be undefinded
//     console.log(++this.a);
//   },
// };
// myObj.x();

// const myObj = {
//     a : 10,
//     myFn(){
//         console.log(++this.a)
//     }
// }

// const obj2 = {
//     a : 12,
// }

// myObj.myFn.call(obj2)

// function printName(homeTown,state){
//     console.log(`${this.name} from ${homeTown},${state}`)
// }
// const myObj = {
//     name : "Anaida"
// }

// const myObj2 = {
//     name : "Harry"
// }
// printName.call(myObj,"NaviMumbai","Maharashtra")
// printName.call(myObj2,"London","England")

// function print(person,place){
//     console.log(`${this.car} is ${person}'s from ${place}`)
// }

// const vehical = {
//     car : "Vento"
// }

// print.apply(vehical,["Anaida","Navi Mumbai"])

// function print(breed,color){
//     console.log(`${this.name} is a ${breed} with ${color} color`)
// }

// const dog = {
//     name : "Buddy"
// }

// const output = print.bind(dog,"Labrador","White")
// output()

// closures
// function a(){
//     let x = 10;
//     function y(){
//         x++;
//         console.log(x);
//     }
//      y()
// }
// a()

// currying
// function multiply(a){
//     return function(b){
//         return a*b;
//     }
// }
// const multiplyByTwo = multiply(2);
// const multiplyByThree = multiply(2);

// console.log(multiplyByTwo(2));
// console.log(multiplyByThree(3));

// function multiply(a){
//     return function(b){
//         return a*b
//     }
// }
// const double = multiply(10);
// console.log(double(2))
// console.log(double(4))
// console.log(double(7))

// const add = (a) => {
// return (b) => {
//     return (c) => {
//     return (d) => {
//         return a + b + c + d;
//     };
//     };
// };
// };

// console.log(add(10)(20)(10)(10))


