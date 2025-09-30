let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let arr2 = arr.slice(4);
console.log(arr2) //  [50, 60, 70, 80, 90, 100]

let arr3 = arr.slice(3, 7);
console.log(arr3) //  [40, 50, 60, 70]

let arr4 = arr.slice(-3); // last three elements
console.log(arr4) // [80, 90, 100]

let arr5 = arr.slice(-4, -1); 
console.log(arr5) // [70, 80 , 90]

let arr6 = arr.slice();
console.log(arr6)
