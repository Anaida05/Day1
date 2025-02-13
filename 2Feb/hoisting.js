// Hoisting-
// var When the interpreter hoists a variable declared with var, it initializes its value to undefined.

// console.log(getName); //will give reference error arrow functions are block scoped so they are stored seperately
// getName(); //will get reference error as we are declaring an arrow function which acts dfferent from traditonal fn

// getNameTfn() //will hoist the code inside the function scope of traditonal fn
// console.log(getNameTfn); //will log the whole function

// getName2() will give reference error
// console.log(getName2);  //will give outut as undefined,variable fn and arrow fns act like variable in js so the are accessed "undefined" in the memory when logged and give reference error when invoked.

// console.log(myName); //undefined op ->js will declare the foo variable to undefined
//arrow fn
let getName = ()=>{
    console.log("Anaida,from fn");
    
}
//variable function
var getName2 = function(){
    console.log("Anaida,from var fn");

}
//traditonal fn
function getNameTfn(){
    console.log("Anaida,from traditional fn");

}
var myName = "anaida"
console.log(myName);//anaida

// Why does JavaScript hoist?
// JavaScript hoists because it's part of the language specification. It's done to allow developers to use functions and variables before they are declared, which can be convenient and make the code more readable.

//Which functions are hoisted?
//Function declarations are hoisted. Function expressions are not hoisted. 
