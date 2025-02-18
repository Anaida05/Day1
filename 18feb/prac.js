// var a = 19;

// {
//   var a = 10;
// } //10
// console.log("b after shadowing", a); //19

// function b() {
//   var c = 10;
//   function d() {
//     c = 20;
//     console.log(c);
//   }
//   return d;
// }
// let func = b();
// func();

let outer = "Hello"

{
    let outer = "World"
    console.log(outer,"after shadowing")

}
console.log(outer)
