// Function that return even numbers
//  in a new Array

/*
// Imperitive Code
function evenNumbers(arr){
  let ans = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      ans.push(arr[i])
    }
  }
  return ans
}
let num = [11, 22, 7, 46, 3827, 274, 100]
console.log(num)
console.log(evenNumbers(num))
*/

// Using filter()
let num = [11, 22, 7, 46, 3827, 274, 100]
let ans = num.filter(function(ele){
  return ele%2 == 0
})
console.log(ans)
let ans2 = num.map(function(ele){
  if(ele%2 == 0){
    return 'Even'
  }else{
    return 'Odd'
  }
})
console.log(ans2)