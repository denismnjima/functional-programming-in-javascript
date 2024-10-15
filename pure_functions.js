//pure functions


`Reasons Why it is Pure:
 Deterministic: For a given input (age), it will always produce the same output. If age is 20,
  the function will consistently return true, and for age 16, it will consistently return false.
 No Side Effects: The function does not modify any external variables, 
 rely on external state, or perform any operations like logging, modifying DOM elements, or making HTTP requests. It only uses the input parameter age and returns a value based on that.`


function isEligible(age){
    return age >= 18;
}

console.log(isEligible(20)); // true
console.log(isEligible(16)); // false



// Impure Function

/*

The function isEligible(age) in this case is not a pure function because it relies on an external variable, minAge, which is not passed as a parameter.

Reasons Why It is Not Pure:
Dependence on External State: The function relies on the external variable minAge to determine the output.
 If minAge changes, the output of the function can change even for the same age input.
 */

function isEligible(age){
    return age >= minAge;
}




