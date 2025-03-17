//1.
// console.log(0.1*3==0.3); //false js will give a float value when 0.1*3 will be multipled not exact value 0.3

//2.
// for (var i = 0; i < 10; i++) { setTimeout(() => { console.log(i); }, 1000) }  //will print 10 ten times

// 3
// function outer() {
//     var b = 2
//     function inner() {
//         b++;
//         console.log(b)
//         var b = 3; //this var will be hoisted to the top of inner() scope and will be undefined and trying to increment an undefined will give NaN
//     }
//     inner();
// }

// outer();

// 4

// (function () {

//     try {
//         throw new Error();
//     } catch (x) { //x is holding error
//         var x = 1, y = 2; //x is redefined here
//         console.log(x);  
//         console.log(y);

//     }
//     console.log(x);
//     console.log(y);
// })();
//x is passed as a parameter here so i will act like functionscoped varaible as the x parameter passed in here is defined in var so variables var a functionscoped it will be hoisted to thetop of function scope and be initialised undefined

// 5
// Promise.resolve(3)
//     .then((res) => { console.log(res) }) //this .then doesn't return anything thats y it passes undefined 
//     .catch()
//     .then()
//     .then(res => res)
//     .then()
//     .catch()
//     .then((res) => { console.log(res) })

// 6
// console.log([2] === [2]); //false

// 7.
// test(); //won't return anything as we are not storing the return
// function test()
// { return true }

// 8
// var person = {
//     name: 'John',
//     greet: function() {
//       console.log('Hello, ' + this.name);
//     }
//   };
  
//   var greetFunc = person.greet;
//   greetFunc();  
//   The output will be Hello, undefined. When greetFunc() is called, it's not called in the context of the person object. Therefore, within the greet function, this refers to the global object (in non-strict mode) or undefined (in strict mode). Since name is not defined in the global scope, this.name evaluates to undefined.

// 9
// console.log('Start');

// setTimeout(function() {
//   console.log('Timeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('Promise');
// });

// console.log('End');

//10
// let obj1 = { key: "value" };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = "new value";
// obj2 = { key: "another value" };

// console.log(obj1.key, obj2.key, obj3.key); //changs values of dependent objs

//11
// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };
  
//   const c = obj.b;
  
//   obj.b();//foo
//   c(); //undefined as the a variable is not there in global scope
  
// 12
// const x = { foo: 1 };
// const y = { foo: 2 };

// function addFoo(obj) {
//   return obj.foo + 1;
// }

// console.log(addFoo(x)); //2
// console.log(addFoo(y)); //3

// 13
// const arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) { //5 will be printed as less than is given
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// 14
// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (element) {
//   console.log(element);
// });

// 15
// let x = 1;

// if (function f() {}) {
//   x += typeof f;
// }

// console.log(x);
// if (function f() {}) { ... }
// function expression inside an if statement.
// In JavaScript, a function expression is treated as a truthy value, so the if condition is considered true.Therefore, the block inside the if statement will execute.x is updated by adding the result of typeof f to it.
// In JavaScript, functions defined inside blocks like this are not hoisted and are not accessible outside the block.Therefore, f is not defined outside the function expression. Since f is undefined outside the function expression, 
// typeof f becomes:typeof f → "undefined"
// So the line becomes: x += "undefined"; Which is: x = 1 + "undefined";
// In JavaScript, adding a number and a string results in a string concatenation, so:x = "1undefined";

// 16
// let a = {
//     x: 1,
//     y: 2,
//   };
//   let b = a;
//   a.x = 5;
//   console.log(a); both are referencng to same memory
//   console.log(b);

// 17
// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y); //false reference is diferent
// console.log(x === y);//false reference is diferent
// console.log(z == y);//true reference is same
// console.log(z == x);//false reference is diferent

// 18
// let a = { x: 1 };
// let b = { x: 2 }; //here variabble names are same but the memory allocation/reference is different
// let c = { x: 3 };
// let d = { x: 4 };
// let e = { x: 5 };
// let arr = [a, b, c, d, e];

// arr.forEach((obj) => (obj.x = obj.x * 2));

// console.log(a.x, b.x, c.x, d.x, e.x); //2 4 6 8 10

// 19
// let num = 0;

// function test() {
//   var num = 1;
//   return num;
// }

// console.log(test());
// console.log(num); the var inside the test() is functionscoped so changing it wont effect the global var num

// 20
// let obj = { name: "John", age: 25 };
// let newObj = { ...obj, age: 30 };

// console.log(obj.age);
// console.log(newObj.age);

// 21
// const add = (a = 1, b = 2) => a + b;
// console.log(add());
// console.log(add(5));
// console.log(add(undefined, 10)); //it used the defult value

// 22
// const arr = [1, 2, 3];
// const [a, b, c] = arr;

// console.log(a);//1
// console.log(b);//2
// console.log(c);//3

//23
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(null === undefined); //null === undefined → false (because their types are different)
// console.log(null == undefined); //null == undefined → true (because of type coercion rules in ==)

//missing number
// let arr = [1,2,3,5];
// let n = arr.length + 1;
// let totalsum = 0;
// let i = arr[0];
// while(i <= n){
//     totalsum += i;
// }
// console.log(totalsum);

// let actualsum = 0;
// let j = 0;
// while(j < arr.length){
//     actualsum += arr[j];
// }
// console.log(actualsum);

// console.log(totalsum-actualsum);

console.log(5 + + "2") //converts the string to number as it sees the 2 plus operators
console.log(5 - - "3") //converts the string to number as it sees 2 minus operators it does the maths rule 