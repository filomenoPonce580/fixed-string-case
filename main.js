function solve(s){
  
  //create uppes/lower arrays
  let uppers = s.match(/[A-Z]/g);
  let lowers = s.match(/[a-z]/g);

  
  //check for null, set to empty
  if (uppers === null){
    uppers = [];
  }else if(lowers === null){
    lowers = [];
  }
  
  //recomment
  if(uppers.length > lowers.length){
    return s.toUpperCase()
  }else{
    return s.toLowerCase()
  }
}
