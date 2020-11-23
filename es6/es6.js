
// // destructuring - seperating an object or array into variables

// // es5

// var person1 = ['Prashanth', 22];
// var name5 = person1[0];
// var age5 = person1[1];
// console.log(`name is ${name5} and age is ${age5}`);


// var [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);

// var [name, year] = ['Sandeep', 22];
// console.log(`name is ${name} and age is ${year}`);



// // es6

// let [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);

// let [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);


// const obj = {
//     firstName: 'Darpan',
//     lastName: 'Singh'
// };



// // console.log('last name is ', obj.lastName);

// const { firstName, lastName } = obj;
// console.log(lastName);

// const { firstName: first, lastName: last } = obj;
// console.log(first + last);


// function calculateAgeRetirement(dob) {
//     const age = 2020 - dob;
//     return [age, 65 - age];
// }

// const [age, retirementTime] = calculateAgeRetirement(2000);
// console.log(age);
// console.log(retirementTime);


// // array - list of elements

// ES5
// const boxes = document.querySelectorAll('.box');
// boxes is not an array its nodelist
// var boxArray = Array.prototype.slice.call(boxes) // converting nodelist to array
// console.log(boxes);
// console.log('box array is',boxArray);

// foreach
// var myarray = [1,2,3,4,5]
// myarray.forEach(function(element){
//     console.log(element*2);
// })

// // for loop

// // for (var i = 0; i < boxArray.length; i++) {
// //         boxArray[i].style.backgroundColor = 'yellow';
// //     }



// boxArray.forEach(function (cur) {
//     cur.style.backgroundColor = 'yellow';
// });



// // complete es6

// const boxArray = Array.from(boxes) 

// boxArray.forEach((cur) => {
//     cur.style.backgroundColor = 'yellow';
// });

// ES5
// for (var i = 0; i < boxArray.length; i++) {
//     if (boxArray[i].className === 'box blue') {
//         continue;
//     }
//     boxArray[i].style.backgroundColor = 'yellow';
// }


// for (var i = 0; i < boxArray.length; i++) {
//     if (boxArray[i].className === 'box blue') {
//         break;
//     }
//     boxArray[i].style.backgroundColor = 'yellow';
// }

// // for of inES6

// // es6

// for (const curbox of boxArray) {
//     if (curbox.className === 'box blue') {
//         continue;
//     }
//     curbox.style.backgroundColor = 'yellow';
// }


// for (const curbox of boxArray) {
//     if (curbox.className === 'box blue') {
//         break;
//     }
//     curbox.style.backgroundColor = 'yellow';
// }


// // indexOf alternatives in es6

// a = [1, 2, 4, 5, 6];
// console.log(a.indexOf(6));

// // two new methods 
// // // es5
// var ages = [17, 15, 28, 14, 22, 11];
// var full = ages.map(function (curage) {
//     return curage > 18;
// });


// console.log(ages);
// console.log(full);

// console.log(full.indexOf(true)); // it will show the first index number which has true value
// console.log(ages[full.indexOf(true)]); // first elment value

// // es6

// var ages = [17, 14, 28,21,  22, 11];

// // // findIndex
// console.log(ages.findIndex((curAge) => {
//     return curAge >= 18;
// }));

// console.log(ages.find(curage => curage >= 18));

// // destructuring - seperating an object or array into variables


// // es6

// const sumOfAges = addAges(...ages);
// console.log('sum of ages in es6', sumOfAges);


// const familyOfMuntaj = ['zulfekhar', 'arif', 'chan'];


// const familyOfDarpan = ['singh', 'Sandeep', 'prashanth'];

// // // // after two years
// const bigFamily = [...familyOfMuntaj, 'Ahmed', 'Manish', ...familyOfDarpan]
// console.log(bigFamily);



// rest operator 
// // es6

// function isFullAge6(...years) {
//     console.log(years);
//     years.forEach(year => console.log((2020 - year) >= 18));
// }

// isFullAge6(1990, 2020, 2000, 2011);

// function isFullAge6(limit, ...years) {
//     console.log('es6');

//     years.forEach(year => console.log((2020 - year) >= limit));

// }



// isFullAge6(30, 1990, 1995, 2000, 2014, 2012);


// // default operators
// function SinghFamily(firstName, yearOfBirth, lastName, nationality) {

//     if (lastName === undefined) {
//         lastName = 'Singh Bisth'
//     }

//     if (nationality === undefined) {
//         nationality = 'Indian';
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }


// var darpan = new SinghFamily('Darpan', 2000);
// console.log(darpan.nationality);


// function SinghFamily(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Singh' : lastName;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }


// var darpan = new SinghFamily('Darpan', 2000, 'Zulfekhar');
// console.log(darpan.lastName);


// function SinghFamily(firstName, yearOfBirth, lastName = 'Singh Bisth', nationality) {


//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }


// var darpan = new SinghFamily('Darpan', 2000);
// console.log(darpan.lastName);



// // hashmaps
// // it is same as object but key can be any datatype
// // while in objects, it is always strings

// // disadvantage of objects - you cannot use it in loops

// var s1 = {
//     firstName: 'Mohammed',
//     1: 101
// }

// console.log(typeof (s1.firstName));
// // console.log(typeof (s1.1));

// // build a program for multiple choice questions
// //  es6

// // var obj = {
// //     'question': 'color of sky?',
// //     1:
// // }


// const question = new Map();
// question.set('question', 'what is the color of sky?');
// question.set(1, 'skyblue');
// question.set(2, 'red');
// question.set(3, 'pink');
// question.set(4, 'green');
// question.set('correct', 1);

// console.log(question);
// answer = parseInt(prompt('choose the correct answer'));



// if (answer === question.get('correct')) {
//     console.log('correct');
// }
// else {
//     console.log('wrong answer');

// }


// const question = new Map();
// question.set('question', 'what is the color of sky?');
// question.set(1, 'skyblue');
// question.set(2, 'red');
// question.set(3, 'pink');
// question.set(4, 'green');
// question.set('correct', 1);
// console.log(question);

// question.delete(4);
// console.log(question);

// // has method

// if (question.has(4)) {
//     console.log('answer is 3');

// }
// else {
//     console.log('no answer');

// }

// // looping or iteration
// question.forEach((value, key) => {
//     console.log(`key is ${key} and value is ${value}`);

// });

// // for of

// for (let [key, value] of question.entries()) {
//     console.log(`key is ${key} and value is ${value}`);

// };

// // what is object
// // obj - having properties -variables and method - functions

// // Dog 

// // jimmy 

// // properties
// // color - white
// // breed - Lab

// // Method
// // eating
// // barking

// var object = {
//     key: value,
//     color: 'white'
// }

// var john = {
//     name: 'john doe',
//     yearOfBirth: 1998,
//     job: 'teacher',
//     calculateAge: function () {
//         this.age = 2020 - this.yearOfBirth;
//         console.log(this.age);

//     }
// }
// console.log(john);
// john.calculateAge();
// console.log(john);



// // object oriented programming
// var Student = function (name, rollno, dob) {
//     this.name = name;
//     this.rollno = rollno;
//     this.dob = dob;

// }


// Student.prototype.calculateAge = function () {
//     this.age = 2020 - this.dob;
//     return this.age;
// }

// Student.prototype.college = 'MIT';

// var s1 = new Student('manishkumar', 121, 1997);
// console.log(s1.college);
// console.log(s1.calculateAge());


// console.log(s1);

// var s2 = new Student('mohammed', 121, 1990);
// // console.log(s2);

// var s3 = new Student('Sandeep', 121, 1990);
// // console.log(s3);

// var s4 = new Student('Darpan', 121, 1990);
// console.log(s4.calculateAge());

// console.log(s4);


// var s5 = new Student('Prashanth', 121, 1990);
// console.log(s5);

// // classes and subclasses

// es5
// var Person5 = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function () {
//     this.age = 2020 - this.yearOfBirth;
//     return this.age;
// }

// var darpan = new Person5('Darpan Singh', 1990, 'teacher');
// console.log(darpan.calculateAge())


// // es6

// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     // we can write method or functions directly without the need
//     // of function keyword or prototype

//     calculateAge() {
//         let age = 2020 - this.yearOfBirth;
//         return age;
//     }

// }

// const mohammed = new Person6('Mohammed Zulfekhar', 1995, 'Software ENgineer')
// console.log(mohammed.calculateAge());


// // static methods - methods that are simply attached to the class but cannot be inherited by class objects

// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     // we can write method or functions directly without the need
//     // of function keyword or prototype

//     calculateAge() {
//         let age = 2020 - this.yearOfBirth;
//         return age;
//     }

//     static greetings() {
//         console.log('Hi there, How are you?');

//     }

// }

// const mohammed = new Person6('Mohammed Zulfekhar', 1995, 'Software ENgineer')
// console.log(mohammed.calculateAge());
// Person6.greetings();


// inheritance
// es5
// var Person5 = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function () {
//     this.age = 2020 - this.yearOfBirth;
//     return this.age;
// }

// // subclass - Athlete

// var Athlete5 = function (name, yearOfBirth, job, olymicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job);
//     console.log(this);

//     this.olymicGames = olymicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// var jack = new Athlete5('jack dorsey', 1990, 'Swimmer', 5, 4);
// console.log(jack.calculateAge());


// // es6

// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         this.age = 2020 - this.yearOfBirth;
//         return this.age;
//     }
// }

// class Athlete6 extends Person6 {
//     constructor(name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }
// }

// const steve = new Athlete6('Steve Jobs', 2000, 'runner', 5, 3);
// console.log(steve.calculateAge());


