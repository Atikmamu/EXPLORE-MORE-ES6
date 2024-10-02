/**
 * 1. var let const 
 * 2. default parameter
 * 3. template string 
 * 4. arrow function 
 * 5. destructuring and spread operator
 * 6. Object.keys, Object.values ...> es6 na . es6: Object.entries 
 * 7. for of used in ....> array and string,
 * 8. for in loop used in ...> object 
 *
 */

const a = 56;
const numbers = [45, 4, 43]
const person = {
    name: 'sakib khan'
}

const message =  `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`


// arrow function
const square = x => x * x;
const sum = (a, b) => a + b;
const sum2 = (a, b) => {
    return (a+b);
}



// Object destructuring 

const {age, z, ...others } = { x: 2, y: 5, z: 3, name: 'ovijeet', age: 55 };


// array destructuring 

const [] = ['ram', 'sam', 'jodu', 'modhu']





