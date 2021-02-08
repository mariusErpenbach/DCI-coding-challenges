const countLetters = (string) => {
    output={};
    for (i=0;i<string.length;i++){     // check if the string.charAt(i) is already in output;
        checkLetter = string.charAt(i);
        if (!(checkLetter in output)){ // if the key is not in the object then define it:
            output[checkLetter] = 1;
        }
        else {
            output[checkLetter]++// else its property will be raised
        }
    }
  return output;
};
console.log(countLetters("tree"))// ➞ {t: 1, r: 1, e: 2}
