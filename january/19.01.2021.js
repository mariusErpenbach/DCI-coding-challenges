/*Create a program with two variables: “item” and “times”. 
Create a program that repeats the “item” as many times as specified by “times”.
The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated.
Print the result in an array. 
Examples:
(“example”, 3) ➞ [“example”, “example”, “example”]*/

let item = "stone";
let times = 25;
const repeating = (item,times) => {
  let output =[];
  for (i=0;i<times;i++){
    output.push(item);
}
return output
}
console.log (repeating(item,times));

/*The Greater Numbers.
 Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
i.e.
findGreatest([3, 4, 5], 4) ➞ 5
findGreatest([10, 20, 30], 12) ➞ 20, 30
findGreatest([0, 10, 3], 4) ➞ 10 */

const findGreatest = (numberList,compareTo) =>{
    let higherNumbers = [];
    for (i=0;i<numberList.length;i++){
      if (numberList[i]>compareTo){higherNumbers.push(numberList[i])};
     }
     return higherNumbers;
};
  console.log(findGreatest([3,4,5,7,8,9],7));

// check for vowels in an array
  const vowels = ["a","e","i","o","u"]
const vowelCheck = (string) => {
  let output=0;
  for (i=0;i<string.length;i++){
  if (vowels.includes(string.charAt(i))){output++;}}
  return output
};
let name = "christopher columbus";
console.log(vowelCheck(name))

// seperate unique numbers from a list of numbers
const unique = (numberArray) => {
    let solos = [];
    for (i=0;i < numberArray.length ; i++) {
     if (solos.includes(numberArray[i])){}
     else {solos.push(numberArray[i])}
    }
    return solos;
  }
  console.log(unique([1,2,3,3,5,5,7,8]));

// dictionary