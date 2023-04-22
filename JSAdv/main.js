//Scope

// function varExp(){
//     if(true){
//         var num1 = 10;
//         console.log('Inside if var ' + num1);
//     }
    
//     console.log('Outside if var ' + num1);
// }

// varExp();
// console.log('Outside function var ' + num1);


// if(true){
//     let num2 = 20;
//     console.log('Inside if let ' + num2);
// }

// console.log('Outside if let ' + num2);

//Hoisting
age = 40;
console.log(age);
var age;

fnDec();

function fnDec(){
    console.log('I am function decleration');
}

const fnExp = function(){
    console.log('I am function expression')
}
fnExp();
