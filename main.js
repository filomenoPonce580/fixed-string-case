function solve(s){
  //create uppes/lower variables
  let uppers = 0;
  let lowers = 0;
  let sA = s.split('')
  
  //iterate through string. if upper, +1, if lower, +1
  for(let i = 0; i < sA.length; i++){
    if(sA[i].includes(/[a-z]/g)){
      lowers++
    }else if(sA[i].includes(/[A-Z]/g)){
      uppers++       
    }
  }
  
  //split, map(map letters to upper/lower depending on which number is greater)
  sA.split('').map((x,i,a)=>{
    if(uppers > lowers){
      x.toUpperCase()
    }else if(uppers > lowers){
      x.toLowerCase
    }
  })
  
  //join and return
  return sA
}

