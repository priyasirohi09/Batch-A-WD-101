console.log('Start')

function greet(){
  console.log('Good morning!!')
}

greet();

// wriet a function that returns sum of two numbers 
function sum(num1, num2){
  return num1+num2;
}

let ans = sum(10, 80);
console.log(ans); // 90

console.log(sum(100, 200)); //300


// wriet a function that returns product of three numbers 

const product = function(num1, num2, num3){
  return num1*num2*num3;
};

let res = product(2, 5, 8);
console.log(res); // 80 


// greet user 
function greeting(userName = 'Guest'){
  console.log(`Good morning, ${userName}`);

}
greeting('Sanskar') // Good morning, Sanskar
greeting() // Good morning, Guest

/*
function subtract(n1, n2){
  console.log(n1-n2) // NaM
}

function subtract(n1 = 45, n2 = 10){
  console.log(n1-n2) // 35
}


function subtract(n1, n2 = 10){
  console.log(n1-n2) 
}
subtract(10); // 0

*/
function subtract(n1 = 30, n2){

  console.log(n1) // 10
  console.log(n2)  //undefined
  console.log(n1-n2)  // NaN
}
subtract(10);



