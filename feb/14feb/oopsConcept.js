//classes
class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    //method
greet(){
    console.log(`Hi ,my name is ${this.name} and my age is ${this.age}`);
}
}

//creating object
const geek = new Person("Anaida",25)

geek.greet()
