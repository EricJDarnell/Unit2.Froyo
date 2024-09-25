// prompt for input
// each flavor order will be seperated by a comma
  // eg; vanilla,vanilla,vanilla,strawberry,coffee,coffee
//when viewed in browser console they observe a table that they have ordered
  // 3 vanilla
  // 2 coffee
  // 1 stawberry
  
  // declared object which is the froyo order.
  const froyoOrder = {}

  //prompt user for a list of flavors seperated by commas.
const userInputString = prompt(
  "Please enter your desired froyo-flavors seperated by a comma.",
  "vanilla,vanilla,strawberry,coffee,vanilla,coffee,chocolate"
);
console.log(userInputString);
// split the string into an array.
const stringArray=userInputString.split(",");
// I should sort the array to alphabetical order...
const alphaInputString = stringArray.sort();
console.log(alphaInputString);
// want to take the strings and transfer them to become the keys of an object...

// 

