export const isAdult = (x) => {
  if(x >= 18) {
    return true;
  }
}

// one liner
const isAdult = (age) => age >= 18;

export const canDrink = (y) => {
  if(y >= 21) {
    return true;
  }
}

// app.js

import {isAdult, canDrink} from "./person.js"

console.log(isAdult(18));

console.log(canDrink(20));