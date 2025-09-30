// let arr = [10, 'Priyanshi', true, 25, -9.5, 25]

// indexOf(elsement) : Returns the first index at which a given element 
// can be found in the array, or -1 if it is not present.
// console.log(arr.indexOf(25)); // 3
// console.log(arr.indexOf(250)); // -1
// console.log(arr.indexOf(true)); // 2
// console.log(arr.indexOf(false)); // -1

// includes(element) : checks whether an array contains a certain element, 
// returning true or false as appropriate.
// console.log(arr.includes('Priyanshi')); // true
// console.log(arr.includes('priyanshi')); // false


// let fruits = ['apple', 'kiwi', 'mango']
// let vegetables = ['carrot', 'potato', 'broccoli']
// let food = fruits.concat(vegetables)
// console.log(food); 
// ['apple', 'kiwi', 'mango', 'carrot', 'potato', 'broccoli']

// let food2 = vegetables.concat(fruits)
// console.log(food2);
// ['carrot', 'potato', 'broccoli', 'apple', 'kiwi', 'mango']


//split()
let str = 'My name is Priyanshi'
let arr = str.split(" ")
console.log(arr) // ['My', 'name', 'is', 'Priyanshi']

let arr2 = str.split("i")
console.log(arr2) // ['My name ', 's Pr', 'yansh', '']

let str2 = 'Hello'
let arr3 = str2.split("")
console.log(arr3) // ['H', 'e', 'l', 'l', 'o']

arr3.reverse()
console.log(arr3) // ['o', 'l', 'l', 'e', 'H']

let reversedStr = arr3.join('')
console.log(reversedStr) // olleH 

let joinedStr = arr3.join();
console.log(joinedStr) // o,l,l,e,H
let joinedStr1 = arr3.join(' ');
console.log(joinedStr1) //o l l e H