//curring

function multiply(a,b){
    return a*b;
}

function curriedMultiply(a){
    return function(b){
        return a*b;
    }
}

console.log(multiply(1,2));
console.log(curriedMultiply(1)(2));


// Partial Application

function partialMultiply(a){
    return function(b){
        return a*b;
    }
}

console.log(partialMultiply(2)(3)); // 6


// Curring vs Partial Application

// Curring is a technique where a function that takes multiple arguments is transformed into a sequence of functions that each take a single argument.
// Partial Application is a technique where a function that takes multiple arguments is transformed into a new function with fewer arguments, by fixing some of the arguments to the original function.

