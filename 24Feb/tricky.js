// 1
// const obj = {
//     a: 10,
//     b: () => console.log(this.a),
//     c: function() { console.log(this.a); }
//   };
//   obj.b();
//   obj.c();
  
// 2
//  function test(a = b, b = 2) { //will throw error we have initialised b
//   console.log(a, b);
// }
// test();

// 3
// console.log(foo());
// function foo() {
//   return 'Hello';
// }

// console.log(bar());

// var bar = function() {
//   return 'World';
// };

// 4
// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof typeof 1);

// 5
// console.log([] + []);  
// console.log([] + {});  
// console.log({} + []);
// console.log(true + false);
// console.log('5' - 3);

// 6
// console.log(x);
// let x = 5;

// var a = 1
// function foo(){
//  var a = 2
//  console.log(a)
// }
// foo()
// console.log(a);

// , But, if you pay attention, the variables didn't declare (without var, let, const). When we do assignments without declarations in JavaSacript (a=2), the compiler will save the variable in the global scope.
// function foo(){
//     a = 2
//   }
//   foo()
//   console.log(a);

let arr =[1,2]
function test(array){
  array = [1,2,3]
}
test(arr)
console.log(arr)
