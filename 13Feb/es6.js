// arrow fn
// let num = [1,2,3,4,5]
// const output = num.map(function(n){
//     return n*2
// })

// const result = num.map((n)=>n*2)
// console.log(output,result);

// multiline strings
// const message = `This is a long message
// that spans multiple lines
// without needing escape characters.`

//calling fn using template literals
// const getname = ()=>"BOB"
// console.log(`hi ${getname()}`);

//default parameters
// const greet = (name = "guest")=>{
//     console.log(`hello ${name}`);

// }
// greet()
// greet("anaida")

//destructing assignment ->array and object

let fruits = ["apple", "orange", "grapes"]
console.log(fruits)
const [one,two,three,four = "mango"] = fruits;
console.log(four)
//trditonal way
// const one = fruits[0] 
// const two = fruits[1] 

//array destructing
// const [o,second] = fruits
// const[one,two,fourth = "mango"] = fruits
// console.log(o); //will log apple
// console.log(fourth); //will print grapes only as the value is provided.

// const [one,...rest] = fruits; //You can use the rest operator to capture the remaining items
// console.log(rest)

// object destructing
// const person = {
//     name : "Anaida",
//     age : 26,
//     job : "Developer"
// }

// const {name : personName,age,job} = person
// console.log(personName); //reamed the name variable
// console.log(age);
// console.log(job);

// rest operator
// const myData = (fName,lName,...otherInfo) =>{
// return otherInfo
// }
// console.log(myData("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"))

//spread operator
// const myData = (fName,lName,company) =>{
//     return `${fName} ${lName} runs ${company}`
// }
// console.log(myData(...["Oluwatobi", "Sofela", "CodeSweetly"])); 


// function myName(...value){
//     "use strict"
// return value
// }
// console.log(myName()); //will give an error because "use strict" is used

// define a destructing object with two regular variables and one rest variable

const { firstName, lastName, ...otherInfo } = {
    firstName: "Anaida",
    lastName: "Ambilissery",
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Female"
}

// console.log(otherInfo);  //will log the data in rest operator but in an object not array

