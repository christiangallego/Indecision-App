// ES6 classes
/****************************
Let's say we are building a website that sells cars.
We make one blueprint of the car and make many new instances of it, or that class
Each car has specific info to it such as, make, model, and vin number.
Concurrently, each new instance should be able to have a unique make, model and vin number.

// make
// model
// vin 

Each car should also share similar methods or actions such as getDescription, which gets the make model and vin number
this method is shared by the class and can be called by each instance of it

*****************************/


//class naming convention is to capitalize first word
class Person {
  
  }
  const me = new Person();
  console.log(me);  // output:  Person {} 
  
  // defining the constructor function for the person class,
  // which gets called when making a new instance of that class
  // and gets passed with all of the arguments that are passed in
  // in this case, "Christian Gallego"
  // this refers to the class instance
  // this.name = name: Christian Gallego
  // you can create as many instances of the class as you want, and this.name will always
  // refer to the name being passed in the new instance of class Person
  class Person {
    constructor(name) {
        this.name = name;
      }
    }
    const me = new Person("Christian Gallego");
    console.log(me);  // output:  Person {name: "Christian Gallego"}
    
    const other = new Person();
    console.log(other); // output: {name: undefined}
  
    // ES6 template strings
  // inside template strings, you can place javascript expressions
    getGreeting() {
      return `Hi. I am test`; //output Hi. I am test
      return `Hi. I am ${this.name}`; // output Hi. I am Christian Gallego
    }
  
    // setup contructor to take name and age (default to 0)
    // getDescription method that returns a string
    // name is years old
    // paremeters can take default values, such as Anonymous and 0
    class Person {
      constructor(name = "Anonymous", age = 0) {
        this.name = name; 
        this.age = age;
      }
    }
  
    const me = new Person("Christian Gallego", 29);
  
    getDescription() {
      return `${this.name} is ${this.age} year(s)  old.`;
    }
  
  