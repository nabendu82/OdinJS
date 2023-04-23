// let obj = { num: 3 };
// let addNumbers = function(a, b, c){
//     console.log(this);
//     return this.num + a + b + c;
// }

//call
// console.log(addNumbers.call(obj, 2, 6, 3))

//apply
// console.log(addNumbers.apply(obj, [2, 6, 3]))

//bind
// let bindFunc = addNumbers.bind(obj, 2, 6, 3)
// console.log(bindFunc())

//Immediately Invoked Function Expressions (IIFE) 
(function(){
    console.log('Welcome to OdinSchool');
})()

//Closures
var a = 10;

function outer(){
    var b = 20;

    var inner = function() {
        console.log(a)
        console.log(b)
    }
    return inner
}

var innerFn = outer()
innerFn()

