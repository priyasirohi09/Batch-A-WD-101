//  Write a function that returns an array storing 
// square of every number


/* Imperative Code
function square(arr){
  let ans =[]
  for(let i = 0; i < arr.length; i++){
    ans.push(arr[i] * arr[i])
  }
  return ans
}
let numbers = [2, 5, 10, 6, 7]
console.log(square(numbers)) //[4, 25, 100, 36, 49]
*/

// Using map()
let numbers = [2, 5, 10, 6, 7]
let newarr = numbers.map(function(ele, idx ){
  console.log(`${ele} at index ${idx}`)
  return ele*ele
})
console.log(newarr)

/*
Output:
2 at index 0
5 at index 1
10 at index 2
6 at index 3
7 at index 4
[4, 25, 100, 36, 49]
*/


// Using a map to find area for the given 
// radiuses in the form of an array

let radiusArr = [2, 4, 1, 10, 20]
let area = radiusArr.map(function(radius){
  return 3.14*radius*radius
})
console.log(radiusArr)
console.log(area)

// Use map() to double every element of the array

// numbers = [2, 5, 10, 6, 7]
//  ans = [4, 10, 20, 12, 14]
