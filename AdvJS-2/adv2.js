// AND and OR operators
let x = 20;
let y = 30;

if(x === 20 || y === 40){
    console.log('Any one of the statement is true')
}

if(x === 20 && y === 30){
    console.log('Both of the statement are true')
}

//Short circuit operator
const str = undefined && 'This is true';
// console.log(str);

//Nullish coalescing operator (??)
const foo = undefined ?? 'default string';
// console.log(foo)

//Object Literals Extensions
let name = 'Nabendu';
let age = 40;

let obj = {
    name,
    age
}

// console.log(obj)

// Optional chaining (?.)
const adventurer = {
    name: 'John',
    cat: {
        name: 'Kitty'
    }
}

const dogName = adventurer.dog?.name;
// console.log(dogName)

const person = {
    fname: 'Nabendu',
    lname: 'Biswas',
    age: 38,
    hobbies: ['coding', 'blogging', 'youtubing'],
    address: {
        street: '20 main st',
        city: 'Bangalore',
        state: 'KA'
    }
}

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

//Sets
const letters = new Set(['a', 'b', 'c']);
// console.log(letters)

const alphabets = new Set();
alphabets.add('a');
alphabets.add('b');
alphabets.add('c');
// console.log(alphabets);

let text = '';
alphabets.forEach(value => text+=value)
// console.log(text)

//Remove duplicates from and array
let names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

let uniq = [...new Set(names)]
// console.log(uniq)

//Map
const fruits = new Map([
    ['apples', 600],
    ['bananas', 400],
    ['oranges', 300],
])

// console.log(fruits);

const newFruits = new Map();
newFruits.set('kiwi', 400);
newFruits.set('grapes', 300);
newFruits.set('pineapple', 500);

// console.log(newFruits)





