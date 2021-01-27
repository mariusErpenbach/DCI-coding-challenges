// function with optional parameter
const twofer =(userName ='you',myName="me")=>{
    console.log(`Two for ${userName}, and 1 for ${myName}.`)
  }
  console.log(twofer(("Fran")));
  
  // function with optional parameter #2 
  const powerUp =( number, powerBy = number) => number*=powerBy;      //    
  console.log(powerUp(5,3));
  
  // return the total number of arguments
  const addUpArray =(...numbers)=> numbers.length; // .. is converting the input given to an array
  console.log(addUpArray(2,1,3)) 
  
  // add up all numbers that are giving, no matter how many
  const sum2=(...args)=>{
    let result = 0;
    for (let i=0;i<args.length;i++){    // by counting the length of the array we can loop through it.
      result += args[i];
    }
    return result;
  };
  console.log(sum2(15,5,20));
  
  // return the average of the numbers given // not finished
  const average =(...numbers) =>{
    let result = 0 ;
    for (i=0;i<numbers.length;i++){
    }
  };
  console.log(average(3,3,7,5,39))
  
  // MAP how to use map
  const numbs=["1","2","3"];
  const numbers = numbs.map((item)=>parseInt(item));
  console.log(numbers);
  
  // hackerSpeak // not finished
  randomWords="th1s 1s M4r1u5";
  // Odds and Evens.
  const oddsAndEvens = (...numbers)=>{
    odd=[];
    even=[];
    for (i=0;i<numbers.length;i++){
      numbers[i]%2<1? even.push(numbers[i]):odd.push(numbers[i]);
    }
    return `odd numbers are: ${odd}, and even numbers are ${even}.`
  };
  console.log(oddsAndEvens(0,1,2,3,4,5,6,7,8,9,10));
  // Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:      
  // [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
  // [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
  const randomNumbers = [1,10,15,22];
  const oddsUpEvensDown = randomNumbers.map((item)=>item%2<1?item-1:item+1);
  console.log(oddsUpEvensDown);
  
  // how many chr in a str(not case sens) 
  // howManyStr(“I like pizza”,“p”) -> 1      // not finished 
  const howManyStr=(string,char)=>{
  string.split("");
  return string;}
  console.log(howManyStr("I like pizza","p"));