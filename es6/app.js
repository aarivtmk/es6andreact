/* concepts we are going to discuss

variable declaraion with let and const
blocks and iifes
strings
arrow functions
destructurting
spread operator
arrays
rest and default parameters
maps
class and subclasses
*/

// variable declarations with let and const

// es5
// var name5 = 'Manish Kumar';
// age5 = 24;
// var PI = 3.14;

// name5 = 'Manish Kumar bisoy';
// PI = 3.1456445555

// console.log(PI);


// es6
// LET - let is similar to var which is mutable
// CONST - WE USE CONSTANTS WHEN WE DO NOT CHANGE THE VALUE
// EG: VALUE OF PI = 3.14

// const name6 = 'Manish Kumar';
// let age6 = 26;
// name6 = "Manish Kumar Bisoy";
// age6 = 28;
// console.log(age6);
// console.log(name6);


// difference between let and var
// var - function scoped
// let - block scoped

// function driverLicense5(yesorno) {
//     if (yesorno) {
//         var firstName = 'Mohammed';
//         var dob = 1990;
//         console.log(firstName + ' born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

//     }
//     else {
//         console.log('hey kid,wait for some more time');

//     }

//     console.log(firstName);


// }

// driverLicense5(true);


// es6 
// let and const - block scope

// function driverLicense6(yesorno) {
//     if (true) {
//         let firstName = 'Jack';
//         const dob = 1990;
//         console.log(firstName + 'born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

//     }

//     console.log(firstName);

// }

// driverLicense6(true)


// function driverLicense6(yesorno) {
//     let firstName = 'Jack';
//     const dob = 1990;
//     if (true) {

//         console.log(firstName + 'born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

//     }

//     console.log(firstName);

// }

// driverLicense6(true)


// function driverLicense6(yesorno) {
//     let firstName;
//     const dob = 1998; //always declare and initialize value at the same time

//     if (true) {
//         firstName = 'Darpan';

//         console.log(firstName + 'born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

//     }

//     console.log(firstName);

// }

// driverLicense6(true)


// hoisting

// console.log(a);

// var a = 5;


// hoisting in es5 and es6

// function driverLicense5(yesorno) {
//     if (yesorno) {
//         console.log(firstName);

//         var firstName = 'Mohammed';
//         var dob = 1990;
//         console.log(firstName + ' born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

//     }
//     console.log(firstName);
// }

// driverLicense5(true);


// in es6

// function driverLicense6(yesorno) {

//     console.log(firstName);


//     let firstName;
//     const dob = 1998; //always declare and initialize value at the same time

//     if (true) {
//         firstName = 'Darpan';

//         console.log(firstName + 'born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

//     }

//     console.log(firstName);

// }

// driverLicense6(true);


// example with for loop using es5 and es6

// var i = 2;
// for (var i = 0; i < 5; i++) {
//     console.log(i);
//     // 0,1,2,3,4

// }
// console.log(i);

// es6

// let i = 25;
// for (let i = 0; i < 5; i++) {
//     console.log(i);

// }
// console.log(i);
// not a dynamically tped language



// blocks and IIFE's - Data Privacy

// {

// }


// es5

// (function () {
//     var a = 5;

// })();

// console.log(a);


// es6 - block scoped

// {
//     let a = 5;
//     const b = 20;
//     var d = 55;
// }

// console.log(a);
// console.log(b);

// console.log(c);


// strings

// es6 - t

// introduce yourself
var firstName = 'Sandeep';
let lastName = 'Kumar';
const yearofBirth = 1990;
function age(yearofBirth) {
    return 2020 - yearofBirth;
}

console.log('hi this is ' + firstName + ' ' + lastName + '. I born in ' + yearofBirth + '. and my age is ' + age(yearofBirth));


// using template literals - ``  - backticks

// console.log(`This is ${firstName} ${lastName}. I born in ${yearofBirth}. and my age is ${age(yearofBirth)}   `);



let name = 'sandeep';
const marks = 90;

console.log(name + ' got ' + marks + ' marks.');

console.log(`${name} got ${marks} marks`);


// some string methods

// const fullname = firstName + ' ' + lastName;
const fullname = `${firstName} ${lastName}`;
console.log(fullname);

console.log(fullname.startsWith('Su'));
console.log(fullname.endsWith('rf'));
console.log(fullname.includes(' '));

passowrd = prompt('enter your password');
console.log(passowrd);

if (passowrd.includes(' ')) {
    console.log('do not give spaces in the password');

}



