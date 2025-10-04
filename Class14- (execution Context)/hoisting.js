greet()
console.log(num); //undefined
var num = 30;
console.log(num); //30

function greet(){
  console.log('Hello!!!')
}

// console.log(num2) // Error: Cannot access 'num2' before initialization

let num2 = 100;

// how to avoid hoisting of function

greeting();
let greeting = function(){
  console.log("Good morning!!")
}