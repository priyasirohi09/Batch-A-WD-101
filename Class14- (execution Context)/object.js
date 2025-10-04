let person = {
  name : "Ridhima" , 
  age  :  19,
  isStudent : true , 
  marks : [80, 90, 100]
}

console.log(person);

// Dot Notation 
console.log(person.age);

// Bracket Notation 
console.log(person['name'])

// Modify Values 
person.age = 20
console.log(person);

// Adding a new key-value pair
person.hobby = 'Sleeping'
console.log(person);

delete person.isStudent; 
console.log(person);

