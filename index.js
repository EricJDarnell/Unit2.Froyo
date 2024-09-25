// prompt for input
// each flavor order will be seperated by a comma
// eg; vanilla,vanilla,vanilla,strawberry,coffee,coffee
//when viewed in browser console they observe a table that they have ordered
// 3 vanilla
// 2 coffee
// 1 stawberry

//prompt user for a list of flavors seperated by commas.
const userInputString = prompt(
  "Please enter your desired froyo-flavors seperated by a comma.",
  "vanilla,vanilla,strawberry,coffee,vanilla,coffee,chocolate"
);
console.log(userInputString);
// split the string into an array.
const stringArray = userInputString.split(",");
// I should sort the array to alphabetical order, to make counting duplicates easier
const alphaArray = stringArray.sort();
console.log(alphaArray);
let n = 0; //default value, just to declare n variable
const masterArray=[]; //declare the master array in which I will hold the formed arrays, to make an array of arrays
//yo, I heard you like arrays, so I put an array in your array.
for (let i = 0; i < alphaArray.length; i++) { 
  const arrayFlavor = alphaArray[i];
  console.log(arrayFlavor);
  if (alphaArray[i]===alphaArray[i-1]||i===0){
      n++
    }
    else {
      n=1;
    }
    const subArray = [arrayFlavor , n]; //creating a two property array for each iteration of i
    console.log(subArray);
    masterArray.push(subArray); // adding each two property array into the master array
  }
  console.log(masterArray);
  // console.table(obj);
  // display table of order
  const froyoOrder = Object.fromEntries(masterArray); //mdn: assigning arrays into an object
  // master array had more iterations of pairs, but duplicates were automatically reduced, and n values updated.
  // alphabetizing the entries made that possible. 
console.table(froyoOrder);