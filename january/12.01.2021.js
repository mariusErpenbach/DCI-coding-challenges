// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
const lessZero = (x) => x < 0 ? true : false;
console.log(lessZero(-2));

// Dog years 
const dogYears = (x) => `the dog is ${x*7} years old` ;
console.log(dogYears(2))

// calculate the lifetimesupply
const calcLifetimeSupply = (x,y) => ((100-x)*365)*y;
console.log(calcLifetimeSupply(25,2));


// get month by month index
let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const monthNumber = (x) => months[x-1];
console.log(monthNumber(3));

// count occurrences
const countOccurrences = (x,y) => 
   {let occurences = x.split(y);
    return occurences.length-1;}

// drawing 
let tDrawing = "t";
for (i=0;i<=3;i++){
    console.log(tDrawing);
   tDrawing = tDrawing.concat(" t");    
};

let starDrawing = "* * * * ";
for (i=0;i<=3;i++){
    console.log(starDrawing);
    starDrawing = starDrawing.slice(0,-2)
}

let numberDrawing ="";
for (i=0;i<=3;i++){
    numberDrawing = numberDrawing.concat(` ${i+1}`);
    console.log(numberDrawing);
}


/* create a function should that checks if a store contains a specific product in it's inventory. */
let storeArr= ["milk", "eggs", "cheese", "butter"];
const checkInventory = (x) =>{
console.log (storeArr.includes(x));
}
checkInventory("milk");


// Full the lines beneath '//something'
const numbersCount = () => {
    for (let i = 0; i <= 5; i++) {
      //something
          let count = "";
      for (let j = 1; j <= i; j++) {
      // something
          count = count.concat(j);
      }
      // something
      console.log(count)
    }
  };
  numbersCount()

  const numbersCountBackwards = () => {
    for (let i = 0; i <= 5; i++) {
      //something
          let count = "54321";
      for (let j = 1; j <= i; j++) {
      // something
          count = count.slice(0,-1)
      }
      // something
      console.log(count)
    }
  };
  numbersCountBackwards()
