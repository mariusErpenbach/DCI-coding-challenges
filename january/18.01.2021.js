
//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
//My solution without a bool let.
const bmi = (height,mass) => mass/(height*height);
const compare =(x,y)=> x<y? `${y[0]} (${y[1]}) has a higher BMI than ${x[0]}.`:`${x[0]}(${x[1]}) has a higher BMI than ${y[0]}(${y[1]}).`;
var Mark = ["Mark",bmi(1.94,120)];
var John = ["John",bmi(1.77,90)];
console.log(compare(Mark,John));

// Solution with a Boolean
var Mark =[1.94,120];
var John =[1.77,90];
var compareBMI = Mark[1]/(Mark[0]*Mark[0]) > John [1]/(John[0]*John[1]);
console.log (compareBMI?"Mark has the higher BMI":"John has the higher BMI");

// Create a program that capitalizes the first letter of each element in an array of names.

const capitalize =(x) =>{
  let output =""
  for (i=0;i<x.length;i++){
  output +=  `${x[i][0].toUpperCase()+x[i].substring(1)} `;
  };
  return output;
};
var friends = ["dirk","julia","robert"];
var singleletter ="L";
console.log(capitalize(friends));
console.log(capitalize(singleletter));
// Create an array of city names. Loop through the array and add the city names to a string. Examples:
var coolcities = ["zons","dormagen","rommerskirchen","hamburg"];
// we can do this with the loop from the old task:
console.log(capitalize(coolcities));
// we can also do this with the new loop:
let citylist = "";
for (i=0;i<coolcities.length;i++){
 citylist+= coolcities[i]+", ";
}console.log(citylist);

/*Hello
 Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in th */
const greetings = (x) => {
  let shoutouts="";
  for (i=0;i<x.length;i++){
  shoutouts += `Hello, ${x[i]}, you are my ${i}. friend on my list `};
    return shoutouts;
}
console.log(greetings(friends));
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.
const odder=(x)=>{
let output ="";
for (i=0;i<x.length;i++){
  x[i]%2<=1? output += `${x[i]+1} `:`${x[i]-1}`;
}
return output;
};
let testing = [1,3,7,9,12,14,16];
console.log(odder(testing));
