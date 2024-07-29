console.log('we added a js file')

class Person {

    constructor(name){
      this.name = name;
    }

    greet(){
       console.log(this.name)
    }
}
// function Person(name){
//      this.name = name;
// }
// Person.prototype.greet = function(){
//     console.log(this.name+" is user")
// }

const person = new Person('omar')
console.log(Object.getPrototypeOf(person), Person.prototype)  // this returns { greet: [Function (anonymous)] }