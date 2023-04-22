//Arrays of object
// const lang = [
//     {id: 1, name: 'Pascal', year: 1970},
//     {id: 2, name: 'C', year: 1972},
//     {id: 3, name: 'C++', year: 1985},
//     {id: 4, name: 'Java', year: 1995},
//     {id: 5, name: 'JavaScript', year: 1995},
//     {id: 6, name: 'Kotlin', year: 2011}
// ];

//Traditional For loop
// for(let i=0; i<lang.length; i++){
//     console.log(lang[i].id)
// }

//for..of loop
// for(let l of lang){
//     console.log(l.name)
// }

//forEach
// lang.forEach(item => console.log(item.year));

//Break statement
// let theValue = 15;
// for(let i=0; i<20; i++){
//     if(i === theValue){
//         break;
//     }
//     console.log(i)
// }

//Continue statement
// let n = 0;
// for(let i=0; i<5; i++){
//     if(i === 3){
//         continue
//     }
//     n+=i;//n=n+i
//     //0+0 = 0
//     //0+1 = 1
//     //1+2 = 3
//     //3+4 = 7
//     console.log(n)
// }

//Looping Backwards
// for(let i=10; i>0; i--){
//     console.log(i)
// }

//Loops in loops
// for(let i=0; i<10; i++){
//     console.log('i value ' + i)
//     console.log('----------')
//     for(let j=0; j<5; j++){
//         console.log('j value ' + j)
//     }
// }

//While loop
// for(let i=0; i<10; i++){
//     console.log(i)
// }

let i=0;
while(i<10){
    console.log(i)
    i++
}

