//Array Destructuring

const rgb = [255, 200, 0];
// const r = rgb[0];
// const g = rgb[1];
// const b = rgb[2];

const [r, g, b] = rgb;

// console.log(r, g, b);

//Object destructuring
const developer = {
    firstname: 'Nabendu',
    lastname: 'Biswas',
    country: 'India'
};

// const firstname = developer.firstname;
// const lastname = developer.lastname;
// const country = developer.country;

const { firstname, lastname, country } = developer;

// console.log(firstname, lastname, country);

//Rest Operator
let arrFunc = (...arr) => {
    console.log(arr)
}

// arrFunc(23, 12, 67, 45, 22, 19);

let restFunc = (a, b, ...rest) => {
    console.log(a, b)
    console.log(rest)
}

// restFunc(23, 12, 67, 45, 22, 19);

//Spread Operator
let a = [23, 12, 67, 45, 22, 19];
// console.log(Math.min(23, 12, 67, 45, 22, 19))
// console.log(Math.min(...a))
// console.log(Math.max(...a))

//Copy by reference issue
let x = [23, 12, 67, 45, 22, 19, 54, 65];
let y = x;
y.push(5);
// console.log(y)
// console.log(x)

//Solution with spread
let c = [23, 12, 67, 45];
let d = [...c];
d.push(15);
// console.log(d)
// console.log(c)

//Spread operator for merging
let x1 = [23, 12], x2 = [22, 19], x3 = [67, 45];
let d1 = [...x1, ...x2, ...x3];
// console.log(d1)

//Used in Objects
let obj1 = { foo: 'bar', x: 42 }, obj2 = { foo: 'baz', y: 13 };
let clonedObj = { ...obj1 }
// console.log(clonedObj)

let mergedObj = {...obj1, ...obj2}
// console.log(mergedObj)




