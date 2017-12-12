// ES5
function square(x) {
  return x * x; // 9 
};
console.log(square(3));

// ES6 arrow function
const squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(3)); // 9

// ES6 arrow function that returns only one expression 
const squareArrow = (x) => x * x;
console.log(squareArrow(3)); // 9

/*
All arrow functions are anonymous, meaning they can't be named
If you want to call an arrow function later, assign it to a const variable
*/

// map examples 
let numbers = [1,2,3];
let doubled = numbers.map((n) => n * 2);  
console.log(doubled); // [2, 4, 6] 

// returns a list item for the length of the options array
const app = {
  options: [1, 2, 3]
};
app.options.map((option) => {
  return <li key = {option}>Option:{option}</li>
})
// output <li>Option: 1</li>
//        <li>Option: 2</li>
//        <li>Option: 3</li>


// Challenge - Use arrow functions to return the first word in a full name
// use regular arrow function
// use arrow function using shorthand syntax

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
};

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));
