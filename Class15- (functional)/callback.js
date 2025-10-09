function printName(){
  console.log('Priyanshi Sirohi')
}
function printAge(){
  console.log(30)
}
function printAddress(){
  console.log('Delhi')
}

function printDetails(cb1, cb2, cb3){
  console.log('Details of the person : ')
  cb1()
  cb2()
  cb3()
}
printDetails(printName, printAge, printAddress)
