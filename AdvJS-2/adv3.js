//Strings
const name = 'Nabendu';
const age = 40;

//old way
// console.log('My name is ' + name + ' and i am ' + age + ' year\'s old.');
//New way
// console.log(`My name is ${name} and i am ${age} year's old.`);

const str = 'Hello JavaScript';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(0, 7));
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));

//Default Parameters
const isEqual = (num1, num2=10) => {
    console.log(num1)
    console.log(num2)
    return num1 === num2;
}

// console.log(isEqual(10));
// console.log(isEqual(10, 20));

function isNormalEqual(num1=10, num2){
    console.log(num1)
    console.log(num2)
    return num1 === num2;
}

console.log(isNormalEqual(undefined, 10));
// console.log(isNormalEqual(10, 20));

