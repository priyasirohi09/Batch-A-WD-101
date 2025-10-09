// Given an array of radius of diff circle, 
//  write function that return area of each Circle 
//  write function that return circumference of each Circle 
//  write function that return diameter of each Circle 

let radiusArr = [2, 4, 1, 10, 20]

function circleArea(r){
  return 3.14*r*r;
}
function circleCircumference(r){
  return 2*3.14*r
}
function circleDiameter(r){
  return 2*r
}

function circleDetail(arr, cb){
  let ans = []
  for(let i = 0; i < arr.length; i++){
    ans.push(cb(arr[i]))
  }
  return ans 
}
console.log(circleDetail(radiusArr, circleArea))
console.log(circleDetail(radiusArr, circleCircumference))
console.log(circleDetail(radiusArr, circleDiameter))
/*
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
*/