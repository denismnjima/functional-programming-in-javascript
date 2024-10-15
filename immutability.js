// In javascript, immutability means that once a value is created, it cannot be changed.

// Immutability is important because it helps to ensure that data is not modified unexpectedly, which can lead to bugs and errors.

// Immutability is also important because it helps to ensure that data is not modified unexpectedly, which can lead to bugs and errors.

// Immutability is also important because it helps to ensure that data is not modified unexpectedly, which can lead to bugs and errors.


// in javascript objects and arrays are mutable

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}


// to make the object immutable, we can use the Object.freeze method

Object.freeze(person);

person.name = 'Jane';

console.log(person);


// using object.assign method

const person2 = Object.assign({}, person);

person2.name = 'Jane';

console.log(person2);

// using spread operator

const person3 = {...person, name: 'Jane'};

console.log(person3);

// spread operator makes a shallow copy of the object

const person4  = {...person};

person4.address.city = 'Japan';

console.log(person4);
console.log(person);

// if you compare the person and person4, you will see that the address object is the same

console.log(person.address === person4.address);

// to solve this problem we can

const person5 = {...person, address: {...person.address}};

person5.address.city = 'Nairobi';

console.log(person5);
console.log(person);

// to make the object immutable, we can use the Object.freeze method


// imutability when dealing with arrays

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// to make the array immutable, we can use the Array.freeze method

const numbers2 = [...numbers,4];

console.log(numbers2);

// array methods like filter, map, reduce, etc. return a new array and do not modify the original array

const numbers3 = numbers.map(number => number * 2);

console.log(numbers3);

// to make the array immutable, we can use the Array.freeze method

