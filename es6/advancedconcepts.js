// console.log(this); // window object

// console.log(this === window);

// first class functions
// 1. assigning a function to a variable
// 2. passing a function as a parameter to another function
// const add = function () {
//     console.log('this inside function', this); //window object
// }

// add(); // - window object


// this inside objects
// this always refers to window object when you write outside function
// no = 1000;
// console.log(window.no === no);

// var student = {
//     name: 'steve',
//     no: 505,
//     rollno: this.no,
//     add: function () {
//         console.log('asdf');

//     }
// }

// console.log(student);


// // this always to refers to the current object when you write inside function


// college = 'lincolnstep'

// var student = {
//     name: 'steve',
//     no: 505,
//     addi: function () {
//         console.log('inside function this is ', this);
//         console.log('name is ' + this.name + ' and no is' + this.no + ' and college is', college);
//     },

//     rollno: this.no

// }

// student.addi();
// console.log('student rollno',student.rollno);


// // outside function added to object explicitly

// function sub() {
//     console.log('sub function', this);
//     console.log(this === window); // true
// }
// // sub();

// let obj = {
//     subf: sub,
//     objf: function () {
//         console.log('inside objf function',this === window); //false
//     }
// }

// obj.objf();
// obj.subf();


// -------------------------------------------------------
// copying function

// var myfun = add;
// console.log('add function is', add);

// myfun(8, 8);


// // copying function in objects

// var myobj = {
//     myfun: add,
// }

// myobj.myfun(5, 5);

// -------------------------------------------------------



// call method


// var steve = {
//     name: 'steve jobs',
//     age: 26,
//     job: 'teacher',
//     speech: function (typeOfaudience, time) {
//         if (typeOfaudience === 'kids') {
//             console.log(`Hi Kids,Good ${time}, I am ${this.name} and I am ${this.age} and a ${this.job}`);

//         }

//         else if (typeOfaudience === 'college') {
//             console.log(`Good ${time} Gentlemen, I am ${this.name} and I am ${this.age} and a ${this.job}`);

//         }
//     }
// }

// var bill = {
//     name: 'bill gates',
//     age: 30,
//     job: 'designer',
// };

// steve.speech('college', 'evening');

// using call method - adopt the steve speech 
// global object
// var name = 'mohammed';
// window.age = 56;
// this.job = 'software engineer';
// steve.speech.call(this, 'kids', 'Morning');
// console.log(this);

// using object
// steve.speech.call(bill, 'kids', 'Afternoon');



// bind method:
// similar to call method but the only difference is,
// it allows us to copy the function and assign it to a variable

// var speechOfbill = steve.speech.bind(bill, 'kids', 'Morning');
// speechOfbill();

// var speechOfbill = steve.speech.bind(bill, 'kids');
// speechOfbill('Evening');

// var speechOfbill = steve.speech.bind(bill);
// speechOfbill('college', 'Evening');


// another example
// var obj1 = {
//     name: 'mohammed',
//     dob: 1998,
//     age: function () {
//         console.log(2020 - this.dob);

//     }

// }

// var obj2 = {
//     name: 'darpan',
//     dob: 1995,
// }

// var newfun = obj1.age.bind(obj2);
// newfun();







// two types of functions
// 1. without return

// function add(a, b) {
//     console.log(a + b);

// }

// var adresult = add(5, 6);
// console.log('value of addition is', adresult);



// add(2, 3);

// copying function

// var myfun = add;
// console.log('add function is', add);

// myfun(8, 8);


// // copying function in objects

// var myobj = {
//     myfun: add,
// }

// myobj.myfun(5, 5);

// 2.with return type

// function sub(a, b) {
//     return a + b;
// }

// // console.log(sub(1, 2));
// var result = sub(5, 6);
// console.log(result);



// explanation of bind with this
// var dob = [1990, 1970, 1985, 1998, 2012, 2010]; // database of indian people date of births
// function arrayCalculate(array, fun) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         result.push(fun(array[i]));
//     }
//     return result;
// }

// function calculateAge(dob_year) {
//     return 2020 - dob_year;
// }

// function isValidAge(limit, age) {
//     return age >= limit;
// }

// for (var i = 0; i < ages.length; i++) {
//     console.log(isValidAge(18, ages[i]));

// }

// for (var i = 0; i < ages.length; i++) {
//     console.log(isValidAge(25, ages[i]));

// }

// var ages = arrayCalculate(dob, calculateAge); //[30, 50,35,22,8,10]
// console.log(ages);

// var resultofIndia = arrayCalculate(ages, isValidAge); // problem with parameters
// console.log(resultofIndia);



// var validAgeIndia = arrayCalculate(ages, isValidAge.bind(null, 18));

/*
"this argument" is confusing in bind function. I checked the MDN and my understanding is that "this" will always be the first argument in bind. As you mentioned, we don't use it in isFullAge(), so it doesn't matter. We can put null too to make it more clear.

The 'this' refers to the current value of 'this', which is the window object. The value of 'this' in this case doesn't matter because we don't use the 'this' keyword anywhere in the isFullAge() function, but we must pass something as the first argument to the bind() method (the bind() method always takes the value of 'this' as the first argument).

The bind() method creates kind of a copy of the original function with a specified value of 'this'. It also allows us to set values for the arguments, for example, isFullAge.bind(this, 20) will assign 20 to the limit parameter of the isFullAge() function.


*/

// console.log('ages are', validAgeIndia);

// console.log(validAgeIndia);

// var validAgeJapan = arrayCalculate(ages, isValidAge.bind(this, 24));
// console.log(validAgeJapan);


// / this as Global

// var lap = 'new laptop'

// console.log(window.lap)
// console.log(this===window)



// this in function
// 'use strict' //in stricy we can use call

// var lappy = 'MACBOOK'

// const laptops = function(){
//     const 
//     console.log(`my laptop is ${this.lappy}`)
// }

// laptops.call(this)



// var phones = 'redmi'

// const smartPhone = function(Pho){
//     const sPhone = function(_new){
//         console.log(`my smartphone is ${this.phones} ${_new}`)
//     }
//     sPhone.call(this, Pho)
// }

// smartPhone.call(this, 'Purchasing new phone')


// var phones = 'redmi'

// const smartPhone = function(Pho){

//     const sPhone = (_new) => {
//         console.log(`my smartphone is ${phones} ${_new}`)
//     }
//     sPhone.call(this, Pho)
// }

// smartPhone.call(this, 'Purchasing new phone')


// var phones = 'redmi'

// const smartPhone = function(Pho){

//     const sPhone = (_new) => {
//         console.log(`my smartphone is ${phones} ${_new}`)
//     }
//     sPhone.call(this, Pho)
// }

// var myFunc = smartPhone.bind(this, 'Purchasing new phone')

// myFunc()


// var phones = 'redmi'

// const smartPhone = function (Pho) {

//     const sPhone = (_new) => {
//         console.log(`my smartphone is ${phones} ${_new}`)
//     }
//     var Func = sPhone.bind(this, Pho)
//     Func()
// }

// var myFunc = smartPhone.bind(this, 'Purchasing new phone')

// myFunc()





