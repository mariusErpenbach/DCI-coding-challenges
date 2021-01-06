// Print out the lowest number between -1 and 4.
console.log(Math.min(-1,4));
//Print out the highest number between -1 and 4.
console.log(Math.max(-1,4));
//Round up
console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));
// Round down
console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
console.log(Math.floor(43.342));
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let street = "Museumstr.";
let number = 4;
let adresse = street + number; // The string is concatenating the string with the number.
console.log(adresse);
// Create a variable with the value of “1005”. Convert it to a number.
let importantYear = "1005";
let Year = parseInt(importantYear)
console.log(Year);
// Create a variable with the value of “10.05". Convert it to a number.
let price = "10.05";
let money = parseFloat(price);
console.log(money);