// Fibonacci sequence
//test 1

//Return the nth element of the Fibonacci sequence 

//SOLUTION
function fib(n){
    const numbers = [1, 1] // 1
    for(i=2; i< n + 1; i++){ //1
      console.log("runinig") 
      numbers.push(numbers[i-2] + numbers[i -1])//n-1
    }
    console.log(numbers)
    return numbers[n ]
  }
  console.log(fib(8));
  // console.log(fib(5));
   
  //fibonacci-big-O time-complexity
  //T = 1+1+1+2*(n -1) = 3 +2n - 2 =1 +2n = 2n = n 
  // =>  0(n) => Linear Time Complexity 
   
  
  //test 2
  