// Higher-Order Functions

function multiplyByTwo(number) {
    return number * 2;
  }
  
  function multiplyByThree(number) {
    return number * 3;
  }
  
  // This is a higher-order function because it takes a function as an argument
  // and returns a new function
  function multiply(number, func) {
    return func(number);
  }
  
  console.log(multiply(2, multiplyByTwo));
  console.log(multiply(2, multiplyByThree));
  
  
  // Example of a higher-order function that takes another function as an argument
  // and returns a new function
  function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
  }

  // functions like map, filter, reduce are higher-order functions
  // because they take a function as an argument
  // and return a new function
  // or a new array
  // or a new value
  // or a new object
  // or a new anything
  // they are higher-order functions
  