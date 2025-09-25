// function that prints fruit color

function checkFruit(fruitName) {

  switch (fruitName) {
    case "apple":
      console.log('Red fruit')
      break;
    case "orange":
      console.log('orange fruit')
      break;
    case "grapes":
      console.log('black fruit')
      break;
    case "mango":
      console.log('yellow fruit')
      break;
    default:
      console.log('New fruit')
  }

}

checkFruit('apple');
checkFruit('mango');