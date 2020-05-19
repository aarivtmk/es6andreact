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

// in es5 - function scope
// in es6 - block scope

// {

// }

{
    // var a = 50;
    // let b = 100;
    // const c = 'steve';
}
// console.log(a);

// console.log(d);


// console.log(a);
// console.log(b);

// console.log(c);


// strings

// es6 - t

// introduce yourself
// var firstName = 'Sandeep';
// let lastName = 'Kumar';
// const yearofBirth = 1990;
// function age(yearofBirth) {
//     return 2020 - yearofBirth;
// }

// console.log('hi this is ' + firstName + ' ' + lastName + '. I born in ' + yearofBirth + '. and my age is ' + age(yearofBirth));


// using template literals - ``  - backticks

// console.log(`This is ${firstName} ${lastName}. I born in ${yearofBirth}. and my age is ${age(yearofBirth)}   `);



// let name = 'sandeep';
// const marks = 90;

// console.log(name + ' got ' + marks + ' marks.');

// console.log(`${name} got ${marks} marks`);


// some string methods

// const fullname = firstName + ' ' + lastName;
// const fullname = `${firstName} ${lastName}`;
// console.log(fullname);

// console.log(fullname.startsWith('Su'));
// console.log(fullname.endsWith('rf'));
// console.log(fullname.includes(' '));

// passowrd = prompt('enter your password');
// console.log(passowrd);

// if (passowrd.includes(' ')) {
//     console.log('do not give spaces in the password');

// }



// Arrow functions

// map method 
// es5

// write a program to find ages of 4 people
// present year - dob

var years = [1990, 1965, 1982, 1937];

// map - we use map to loop the array to do some thing
// map(function(element,index,years))

// find ages using map

// var ages5 = years.map(function (el) {
//     var now = new Date().getFullYear();

//     return now - el;
// });

// console.log(ages5);
// //  two parameters

// var ages5 = years.map(function (el, index) {
//     var now = new Date().getFullYear();
//     console.log(`${el} index no is ${index}`);

//     return now - el;
// });

// console.log(ages5);


// es6

// one parameter
// arrow function - =>


// a = 0;
// if (a == 0)
//     console.log('a is 0');


// const ages6 = years.map((el) => {
//     return 2020 - el;
// });
// console.log(ages6);

// const ages6 = years.map(el => 2020 - el);
// console.log(ages6);


// two parameters in es6

// const ages6 = years.map((el, index) => {
//     let now = new Date().getFullYear();
//     console.log(`el is ${el} and index is ${index}`);
//     return now - el;
// });

// console.log(ages6);

// this keyword

// p1 = {
//     name: 'Sandeep',
//     marks: 25,
// };
// p2 = {
//     name: 'Darpan',
//     marks: 25,

// };
// p3 = {
//     name: 'Mohammed',
//     marks: 25,

// };
// p4 = {
//     name: 'Prashanh',
//     marks: 25,

// };
// p5 = {
//     name: 'Manish',
//     marks: 25,

// };


// var Person = function (name, accno, age) {
//     this.name = name;
//     this.age = age;
//     this.accno = accno;
// }

// p1 = new Person('Sandeep', 12, 23);
// p2 = new Person('Manish', 124, 23);


// console.log(p1.name);
// console.log(p2.accno);


// this in arrow function:
// they can share surrounding this keyword

