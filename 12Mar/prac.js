"use strict"
// console.log(this) //global scope

// function abc(){ //fn scope
//     console.log(this)
// }
// abc()
// window.abc()

// const myObj = {
//     a : 10,
//     x : function(){    //here x is the method of the object
//         console.log(this.a)  //the value of this is the object
//     }
// }
// myObj.x()

// const person = {
//     name : "Anaida",
//     a : function(greet){
//         console.log(`${greet},${this.name}`)
//     }
// }
// const p2 = {
//     name : "abc"
// }
// person.a.call(p2) //passing value of p2 object to the person obj

// person.a.apply(p2,["abc"])

// const newPerson = person.a.bind(p2)("hello");
// newPerson("Hello")

// this in arrow function
const myObj = {
    name : "anaida",
    x : ()=>{
        console.log(this)
    }
}
myObj.x()  //global object

const myObj2 = {
    a : 20,
    x : function (){
        const y = () =>{
            console.log(this)
        }
        y();
    }
}
myObj2.x()