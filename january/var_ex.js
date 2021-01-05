var sentence1 = "I can walk in the park all day";
console.log("park") ;
var words = "Hello World";
console.log(words.toUpperCase());
var species = "Earthlings";
console.log(species.toLowerCase());
var language ="JavaScript";
console.log(language.substring(3,6));
var compliment ="nice shoes";
console.log(compliment.includes("l"));
function newString (oldWord){
    NewWord = oldWord.charAt(0) + oldWord + oldWord.charAt(0);
    console.log(NewWord); 
}
newString(language);