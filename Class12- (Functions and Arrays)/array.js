let arr = [10, 20, 30];

console.log(arr[1]) //20
console.log(arr[3]) //undefined

console.log(arr); //  [10, 20, 30]

// Modifying ele
arr[1] = 'krish'
console.log(arr); // [10, 'krish', 30]

arr[3] = 100
console.log(arr); // [10, 'krish', 30, 100]

// arr[6] = 'Sixth Index'
// console.log(arr); //  [10, 'krish', 30, 100, empty × 2, 'Sixth Index']

// console.log(arr[5]); // undefined

// total number of element 
console.log(arr.length); 