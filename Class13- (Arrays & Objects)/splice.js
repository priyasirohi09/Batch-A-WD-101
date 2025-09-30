let fruits = ['apple', 'kiwi', 'mango', 'melon','banana']
console.log(fruits)

//remove elements 

let removedElements = fruits.splice(2, 2)
console.log(removedElements) // [ 'mango', 'melon'] 
console.log(fruits) // ['apple', 'kiwi', 'banana']

// adding elements 
let x = fruits.splice(2, 0, 'watermelon');
console.log(x) // []
console.log(fruits) //  ['apple', 'kiwi', 'watermelon', 'banana']


// replace element 
fruits.splice(2, 1, 'peach', 'litchi')
console.log(fruits) // ['apple', 'kiwi', 'peach','litchi','banana']
