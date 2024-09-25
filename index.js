// prompt for input
// each flavor order will be seperated by a comma
// eg; vanilla,vanilla,vanilla,strawberry,coffee,coffee
//when viewed in browser console they observe a table that they have ordered
// 3 vanilla
// 2 coffee
// 1 stawberry

//prompt user for a list of flavors seperated by commas.
const userInputString = prompt(
  "Please enter your desired froyo-flavors seperated by a comma."
);
const stringArray = userInputString.split(","); // splits the string into an array.

const alphaArray = stringArray.sort(); // takes inputs and rearranges into alphabetical order
let n = 0; //declaring n variable, used to count quantity of each flavor ordered
const masterArray = []; //declare the master array, consisting of several two property arrays
//yo, I heard you like arrays, so I put an array in your array.
for (let i = 0; i < alphaArray.length; i++) {
  const arrayFlavor = alphaArray[i]; //declare variable that holds string of flavor
  if (alphaArray[i] === alphaArray[i - 1] || i === 0) {
    n++;  //increases n count whenever the newly iterated flavor is the same as the previous one
  } else { 
    n = 1; //resets n count to one if flavor is not repeated
  }
  const subArray = [arrayFlavor, n]; //creates a new two property array for each iteration of i
  masterArray.push(subArray); // pushes the new two property array into the master array
}
const froyoOrder = Object.fromEntries(masterArray); //mdn: creating object from the master array.
// duplicate key properties are automatically reduced when creating the object from the master array.
// n count values will be overwritten by the latest duplicate properties.
// alphabetizing the iteration made this work properly.
console.table(froyoOrder);
