// spread operators
// rest operators
// default parameters
// hash maps
// classes
// subclasses and inheritance


// spread operator - ...
// es5

// function addAges(a, b, c, d) {
//     return a + b + c + d;
// }

// var ages = [18, 30, 21, 12];
// // apply method

// var sumOfAges = addAges.apply(null, ages);
// console.log(sumOfAges);



// es6

// const sumOfAges = addAges(...ages);
// console.log('sum of ages in es6', sumOfAges);


// const familyOfMuntaj = ['zulfekhar', 'arif', 'chan'];


// const familyOfDarpan = ['singh', 'Sandeep', 'prashanth'];

// // after two years
// const bigFamily = [...familyOfMuntaj, 'Ahmed', 'Manish', ...familyOfDarpan]
// console.log(bigFamily);


// example with ui

// querySelector - always returns nodeList

// write program to select heading and boxes to change the text color

// es5
// var heading = document.querySelector("h1");
// var boxes = document.querySelectorAll('.box');
// console.log(boxes);
// var boxArray = Array.prototype.slice.call(boxes);
// console.log(boxArray);

// boxArray.forEach(function (curvalue) {
//     curvalue.style.color = 'purple';

// });



// heading.style.color = 'purple';

// spread operator


// es6
// const heading = document.querySelector("h1");
// const boxes = document.querySelectorAll('.box');

// //  spread operaor to form a new array all

// const all = [heading, ...boxes];
// console.log(all);

// Array.from(all).forEach((curbox) => curbox.style.color = 'purple');


// rest operators

// es5

// function isFullAge5() {
//     // console.log(arguments);
//     // console.log('type of arguments', typeof (arguments));

//     var arrArgs = Array.prototype.slice.call(arguments);
//     // console.log('type of array', typeof (arrArgs));
//     // console.log('type of array', arrArgs);




//     // arrArgs.forEach(function (curage, index) {
//     //     console.log('index is', index);

//     //     console.log((2020 - curage) >= 18);

//     // });

//     for (var i = 0; i < arrArgs.length; i++) {
//         console.log('ages list', (2020 - arrArgs(i)) >= 18);

//     }

// }

// isFullAge5(1990, 2020, 2000, 2011);

// es6

// function isFullAge6(...years) {
//     console.log(years);
//     years.forEach(year => console.log((2020 - year) >= 18));
// }

// isFullAge6(1990, 2020, 2000, 2011);




// function isFullAge5(limit) {
//     // console.log(arguments);
//     // console.log('type of arguments', typeof (arguments));

//     var arrArgs = Array.prototype.slice.call(arguments);
//     // console.log('type of array', typeof (arrArgs));
//     // console.log('type of array', arrArgs);




//     arrArgs.forEach(function (curage) {
//         console.log((2020 - curage) >= limit);

//     });

// }

// isFullAge5(21, 1990, 2014, 1998);

// // es6

// function isFullAge6(limit, ...years) {
//     console.log('es6');

//     years.forEach(year => console.log((2020 - year) >= limit));

// }



// isFullAge6(30, 1990, 1995, 2000, 2014, 2012);


// default operators
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

// hashmaps
// it is same as object but key can be any datatype 
// while in objects, it is always strings

// disadvantage of objects - you cannot use it in loops

// var s1 = {
//     firstName: 'Mohammed',
//     1: 101
// }

// console.log(typeof (s1.firstName));
// console.log(typeof (s1.1));

// build a program for multiple choice questions
//  es6

// var obj = {
//     'question': 'color of sky?',
//     1:
// }


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


const question = new Map();
question.set('question', 'what is the color of sky?');
question.set(1, 'skyblue');
question.set(2, 'red');
question.set(3, 'pink');
question.set(4, 'green');
question.set('correct', 1);
console.log(question);

question.delete(4);
console.log(question);

// has method

if (question.has(4)) {
    console.log('answer is 3');

}
else {
    console.log('no answer');

}

// looping or iteration
question.forEach((value, key) => {
    console.log(`key is ${key} and value is ${value}`);

});

// for of

for (let [key, value] of question.entries()) {
    console.log(`key is ${key} and value is ${value}`);

};


