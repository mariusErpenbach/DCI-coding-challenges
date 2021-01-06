//ex1
var sentence1 = "I can walk in the park all day";  
console.log("park") ;
//ex2
var words = "Hello World";
console.log(words.toUpperCase());
//ex3
var species = "Earthlings";
console.log(species.toLowerCase());
//ex4
var language ="JavaScript";
console.log(language.substring(3,6));
//ex5
var compliment ="nice shoes";
console.log(compliment.includes("l"));
//ex6
function newString (oldWord){
    NewWord = oldWord.charAt(0) + oldWord + oldWord.charAt(0);
    console.log(NewWord); 
};
newString(language);
//ex7
function superString (oldWord){
    superWord = oldWord.substring(oldWord.length-0,oldWord.length-3) + oldWord + oldWord.substring(oldWord.length-0,oldWord.length-3);
     console.log (superWord);
 }
 superString(language);
//ex8 
var sentence2 = "I'm having fun while I'm doing Javascript excersises :-)"
console.log(sentence2.toUpperCase());
sentence2.includes("Java") ? console.log("'Java' found ") : console.log("No 'Java' found");
//ex9
function mixletters (Word) {
    var firstLetter = Word[0]
    var lastLetter = Word.substring(Word.length-1);
    var mainWord = Word.slice(1, -1)
    var mixedWord = lastLetter + mainWord + firstLetter
    console.log(mixedWord);
    }
    mixletters (language);
//ex10
let food = "pizza";
let name = "Marius" ;
let verb = ["love","sleep","eat"];
let newSentence = `Hi my Name is ${name} and I ${verb[2]} ${food}`
console.log(newSentence)
//ex11
var animal ="the quick brown fox";
    var animalup = animal[0].toUpperCase();
    var animalupper = animal.replace(animal[0],animalup);
    console.log(animalupper);