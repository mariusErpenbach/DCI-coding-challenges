

((currentAge,retAge,monthWage,savingPerMonth)=>{
  let yearsLeft = retAge-currentAge;
  let monthLeft = yearsLeft*12;
  let monthSafe = (monthWage/100)*savingPerMonth;
  if (currentAge>=65){return "You're already retired!"}
  else {
    return console.log(`In your ${monthLeft} months left to live you can safe up to ${monthSafe*monthLeft}`);
  }
})(40,65,2000,5);

