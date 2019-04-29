/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global object or window
* 2. Before the dot object
* 3. constructor object
* 4. new object context/explicit
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function Global(attr){
    console.log(this);
}

// Principle 2

// code example for Implicit Binding

const Implicit ={
    name: "kevin",
    sayName: function(){
        console.log(this.name);
    }
}

// Principle 3

// code example for New Binding

function Animal(name, wings){
    this.name = name;
    this.wings = wings;
}

Animal.prototype.doIhaveWings = function(){
    console.log(`I ${this.wings} have wings`);
}

const owl = new Animal("Pamela", "do");
const dog = new Animal("Kevin", "dont");

owl.doIhaveWings();
dog.doIhaveWings();


// Principle 4

// code example for Explicit Binding


owl.doIhaveWings.call(dog);
dog.doIhaveWings.apply(owl);