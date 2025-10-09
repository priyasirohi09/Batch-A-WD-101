// function that returns sum of all 
// elements of array 
// eg: [1,2,3,4,5,6,7,8,9,10] ans => 55 

/*
function sumOfArray(arr){
  let sum = 0;
  for(let i = 0; i <arr.length; i++){
    sum += arr[i]
  }
  return sum
}
let num = [1,2,3,4,5,6,7,8,9,10]
console.log(sumOfArray(num))

*/

// Using reduce()
let num = [1,2,3,4,5,6,7,8,9,10]
let ans = num.reduce(function(res, ele){
  res += ele
  return res
}, 0)
console.log(ans)

// produc t of all elements in the array 