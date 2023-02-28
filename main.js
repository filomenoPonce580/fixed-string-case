function solve(s){
  let split = s.split('')
  
  //create uppes/lower arrays
  let uppers = s.match(/[A-Z]/g);
  let lowers = s.match(/[a-z]/g);

  
  //check for null, set to empty
  if (uppers === null){
    uppers = [];
  }else if(lowers === null){
    lowers = [];
  }
  
  //if one is longer than the other. map accordingly
  if(uppers.length > lowers.length){
    split.join('').toUpperCase
  }else if(lowers.length > uppers.length){
    split.map((x,i,a)=>{
      x.toLowerCase()
    }).join()
  }
  
  //join and return
  return split
}
