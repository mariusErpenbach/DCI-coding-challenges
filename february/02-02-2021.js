// Object Literal - Family - father,mother,childs are the keys - names are the values;
const family ={
    father : "Sam",
    mother : "Julia",
    childs : ["Marius","Thomas","Sandra"]
}
//accessing prpterties 
//dot notation
console.log(family.childs[0]);
//bracket notation
console.log(family["childs"])
// cool for loop
for (let prop in family){       // we loop through the properties of our objects    
    console.log(`${family[prop]}`)          // in every iteration we log the properties.
};
// tell me more about you 
const person ={
    name : "Marius",
    age: 26,
    birthYear: 1994,
    gender:"Male",
    height:194,
    print: function (){             // we can also store function in objects
        console.log(
            `I am ${this.name}, my age is ${this.age}. I was born in ${this.birthYear}}`
        )
    }
}
// Object.keys
console.log(Object.keys(person));
// Object.values
console.log(Object.values(person));



// create object yourPersonObj
const person2 = {
    name:"Harry Potter",
    age:30,
    birthYear:1991,
    gender:["Male","Susi"],
    height:175,
}
console.log(Object.keys(person2));
console.log(Object.values(person2));
// Create a function that returns an array of the properties of a javascript object.
const showProperties =(object)=>{
    let objectprops = [];
    for (let prop in object){objectprops.push(object[prop])};
    return objectprops;
};
console.log(showProperties(person2));
// Given the following object
const student = { 
firstName: "Zain", 
lastName: "Oil", 
class: 48,
//Create a method that prints the following: "Zain Oil a student in class 48"
print: function(){
    console.log(
        `I'm ${this.firstName} ${this.lastName} a student in class ${this.class}`)
}
};
console.log(student.print())

//Get Values. Create a function that returns an array of all values of an object’s properties.
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
showProp

