
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
  
  
  // ES6 subclasses extends class Person - Student is the same as Person
   
  // super refers to the parent class
  // it is accessing the parent class contructor  function with the correct data
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
       this.major = major;
    }
    // method that returns true if student has major, false if otherwise using logical not operator
    // !!"Christian" = true | !"Christian" = false | "Christian" = true 
    hasMajor() {
      return !!this.major
    }
  }
  
  const me = new Student("Christian Gallego", 29, "Business"); 
  // output: {name: "Christian Gallego", age: 29, major: "Business"}
  console.log(me.hasMajor);
  // output: true
  
  
  // challenge: create a new class Traveler that extends Person
  // add support for homeLocation
  // overrride getGreeting
  
  class Traveler extends Person {
    constructor(name, age, homeLocation) {
      super(name, age)
      this.homeLocation = homeLocation;
    }
    getDescription() {
      let greeting = super.getGreeting;
  
    } if(this.homeLocation) {
      greeting += "My home location is ${this.homelocation}";
    }
    return greeting;
  }
  
  const you = new Traveler("Christian Gallego", 29, "San Diego"); 
  // output: {name: "Christian Gallego", age: 29, homeLocation: "San Diego"}
  console.log()
  