function solve(s){
  //create variables for upper/lowercase. match to create array
  let uppers = s.match(/[A-Z]/g);
  let lowers = s.match(/[a-z]/g);

  //if statements
  if(uppers === null || uppers.length <= lowers.length){
    return s.toLowerCase()
  }else{
    return s.toUpperCase()    
  }
}
