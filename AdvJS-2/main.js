// function foo(){
//     'use strict'
//     console.log(this)
//     console.log(this === window)
// }

// foo()

// var obj = {};
// obj.foo = function(){
//     console.log('Inside obj foo');
//     console.log(this);
// }

// obj.foo();

//Functions

//Method #1 - Function decleration
function addNums(num1, num2){
    console.log(num1 + num2);
}

addNums(30, 20);

//Method #2 - Function expressions
const multiNums = function(num1, num2){
    return num1 * num2;
}

console.log(multiNums(30, 20))

//Method #3 - Arrow Functions
const modNums = (num1, num2) => {
    return num1 % num2;
}

console.log(modNums(30, 20))

//Method #4 - Condensed Arrow Functions
const divNums = num =>  num / 7;

console.log(divNums(30))