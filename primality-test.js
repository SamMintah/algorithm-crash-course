
//Primality test

//Determine whether an input number is a prime number (A PRIME NUMBER IS A NUMBER THAT IS ONLY DIVISIBLE  BY ITSELF AND BY 1) 

// SOLUTION
 
// the Algorithm needs to do one thing: 
// (1) Try dividing the number by all smaller numbers and return true if it's only divisible by itself and 1.

//first solution

const isPrime =(n)=>{
    for(let i = 2; i < n; i++){
      if(n % i === 0){
        return false;
      }
    }
    return true;
    }
   isPrime(6)
   isPrime(5)
  
  // second solution
  const isPrime2 =(n)=>{
    for(let i = 2; i < Math.sqrt(n); i++){//1
      if(n % i === 0){//n
        return false;//1
      }
    } 
    return true;//1
    }
   isPrime2(27277)
   isPrime2(5)
    
  
  //Best Case number = 1 or Number = 2 => 0(1)
  //Average Case: 0(n) (improved :0(sqrt(n)))
  //Worst Case: number = 27,277 => 0(n) (improved :0(sqrt(n)))
  