// Given an array of radius of diff circle, 
//  write function that return area of each Circle 
//  write function that return circumference of each Circle 
//  write function that return diameter of each Circle 

let radiusArr = [2, 4, 1, 10, 20]

function calculateArea(arr){
  let area = []
  for(let i = 0; i < arr.length; i++){
    area.push(3.14 * arr[i] * arr[i])
  }
  return area
}
function calculateCircumference(arr){
  let circumference = []
  for(let i = 0; i < arr.length; i++){
    circumference.push(2* 3.14 * arr[i])
  }
  return circumference
}
function calculateDiameter(arr){
  let diameter = []
  for(let i = 0; i < arr.length; i++){
    diameter.push(2*arr[i])
  }
  return diameter
}
console.log(calculateArea(radiusArr))
console.log(calculateCircumference(radiusArr))
console.log(calculateDiameter(radiusArr))