
//Basics and Time complexity
  
//Task
//write a function that takes one number as an input ,
//and then build the sum of all the numbers leading up to that number.


//first approach
const sumUp = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
};

// Measuring performance 

let start = 0;
let end = 0;

start = performance.now();
sumUp(5);
end = performance.now();
end - start;

//best solution
const sum = (n) => (n / 2) * (1 + n);

start = performance.now();
sum(5);
end = performance.now();
end - start;

//Task

//Write an algorithm  that takes an array of numbers as input and calculate the sum of those numbers . 
///Define the Time Complexity of that algorithm and determine what the lowest possible time Time complexity is for this problem

// first attempt
// const sumNum = (num)=>{
//    return num[0] + num[1] + num[2];
// }

//best solution
//numbs = [1,2,3,10]
const sumNum = (numbs) => {
  let result = 0; // runs 1
  for (const num of numbs) {
    //runs  1
    result += num; // 4=> n
  }
  return result; // 1
  //    return numbs.reduce((sum ,curNum)=> sum + curNum ,0);
};
//measuring Time complexity
//T = 1 + 1 + 1 + n
//T = 3 + n
//T = 3 + 1*n
//T = 1*n
//T = n  => o(n)  => Linear time complexity

sumNum([1, 2, 5, 50]);
