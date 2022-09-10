// Practice Time

// Write  two Algorithms :

//(1) write a function to take an array of numbers as an input and return the minimum value in the array (i.e the smallest number)


//also define the time complexity and posible cases for both algorithms 

//Solutions 1

const smallNumber=(numbers)=>{
    let currentSmall   = numbers[0]; //1
    for(const num of numbers){//1 
      if(num < currentSmall){//n
        currentSmall = num;//
      }
    }
    return currentSmall; //1 
  }
  smallNumber([1,2,3]);
  smallNumber([3,2,1]);
  smallNumber([2, 1, 3])
  
  
  // Best case [1,2,3] => o(n);
  //worst case :[3,2,1] => o(n);
  //Average case : [2, 1, 3] => o(n);
  
  
  
  //(2) write a function to take a number as input and return "true" if it's an even number "false" for odd numbers
  
  
    const isEven=(n)=> n % 2 === 0; //1
  
  // one case : 0(1)
     
  isEven(8)
  
  
  
  