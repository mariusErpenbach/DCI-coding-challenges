// Round 2 coding challenges
// repicking a task from yesterday and solve it in another way

// Counting Occurrences
function countOccurrences (string,letter) {  
    let occurrences = 0;                // set a var to count the occurences
  for (i=0;i<=string.length;i++){       // initialize a loop which runs as long as the string is
    if (string.charAt(i) == letter){    // controle in every iteration if the letter is at the charAt position 
      occurrences++                     // raise counter if its true
    }
  }
  return occurrences;                   
  }
  console.log(countOccurrences("this is a stringi", "i"));
// Calculate the lifetimesupply but with leap years
const calcLifetimeSupply = (age, supplyPerDay) => (((100-age)*365)*supplyPerDay)+Math.floor(25/4);  // Math.floor(25/4) adds the number of leap years to the calculation.
console.log(calcLifetimeSupply(25,2));