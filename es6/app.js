/* concepts we are going to discuss

variable declaraion with let and const
blocks and iifes
HOISTING
strings
arrow functions
Map method 
regular function
arrow functions
first class functions
anonymous function
map method 
destructurting
spread operator
arrays
rest and default parameters
maps
class and subclasses
*/

// variable declaraion with let and const

// es5

var name5 = 'Manish Kumar';
age5 = 24;
var PI = 3.14;
var PI = 5.14;
console.log(PI);


name5 = 'Manish Kumar bisoy';
PI = 3.1456445555
console.log(PI);


// es6
// LET - let is similar to var which is mutable
// CONST - WE USE CONSTANTS WHEN WE DO NOT CHANGE THE VALUE
// EG: VALUE OF PI = 3.14

const name6 = 'Manish Kumar';
let age6 = 26;
// name6 = "Manish Kumar Bisoy";
age6 = 28;
console.log(age6);
console.log(name6);


// difference between let and var
// var - function scoped
// let - block scoped

function driverLicense5(yesorno) {
    if (yesorno) {
        var firstName = 'Mohammed';
        var dob = 1990;
        console.log(firstName + ' born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

    }
    else {
        console.log('hey kid,wait for some more time');

    }

    console.log(firstName);


}

driverLicense5(true);


// es6 
// blocks and iifes
// let and const - block scope


function driverLicense6(yesorno) {
    if (true) {
        let firstName = 'Jack';
        const dob = 1990;
        console.log(firstName + 'born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

    }

    console.log(firstName);

}

driverLicense6(true)


function driverLicense6(yesorno) {
    let firstName = 'Jack';
    const dob = 1990;
    if (true) {

        console.log(firstName + 'born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

    }

    console.log(firstName);

}

driverLicense6(true)


function driverLicense6(yesorno) {
    let firstName;
    const dob = 1998; //always declare and initialize value at the same time

    if (true) {
        firstName = 'Darpan';

        console.log(firstName + 'born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

    }

    console.log(firstName);

}

driverLicense6(true)


// HOISING

console.log(a);

var a = 5;


// hoisting in es5 and es6

function driverLicense5(yesorno) {
    if (yesorno) {
        console.log(firstName);

        var firstName = 'Mohammed';
        var dob = 1990;
        console.log(firstName + ' born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

    }
    console.log(firstName);
}

driverLicense5(true);


// in es6

function driverLicense6(yesorno) {

    console.log(firstName);


    let firstName;
    const dob = 1998; //always declare and initialize value at the same time

    if (true) {
        firstName = 'Darpan';

        console.log(firstName + 'born in the year ' + dob + 'and his age is ' + (2020 - dob) + 'so he can drive the vehicle');

    }

    console.log(firstName);

}

driverLicense6(true);


// example with for loop using es5 and es6

var i = 2;
for (var i = 0; i < 5; i++) {
    console.log(i);
    // 0,1,2,3,4

}
console.log(i);

// es6

let i = 25;
for (let i = 0; i < 5; i++) {
    console.log(i);

}
console.log(i);
// not a dynamically tped language



// blocks and IIFE's - Data Privacy

// {

// }


// es5

(function () {
    var a = 5;
})();

console.log(a);


// es6 - block scoped

// in es5 - function scope
// in es6 - block scope

// {

// }

{
    var a = 50;
    let b = 100;
    const c = 'steve';
}

console.log(a);

console.log(d);
console.log(a);
console.log(b);

console.log(c);


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

console.log(`This is ${firstName} ${lastName}. I born in ${yearofBirth}. and my age is ${age(yearofBirth)}   `);


let name = 'sandeep';
const marks = 90;

console.log(name + ' got ' + marks + ' marks.');

console.log(`${name} got ${marks} marks`);


// some string methods

const fullname = firstName + ' ' + lastName;
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



// arrow functions

// map method 
// es5

// write a program to find ages of 4 people
// present year - dob

var years = [1990, 1965, 1982, 1937];

// map - we use map to loop the array to do some thing
// map(function(element,index,years))

// syntax : Map(function(array value, array index, array))

// find ages using map

var ages5 = years.map(function (el) {
    var presentYear = 2020;

    return presentYear - el;
});

console.log(ages5);


var result = []
for (var i = 0; i < years.length; i++) {
    var present_year = 2020;
    result.push(present_year - years[i])
    // console.log(present_year - years[i]);

}
console.log(result);



// //  two parameters

var ages5 = years.map(function (el, index) {
    var now = new Date().getFullYear();
    console.log(`${el} index no is ${index}`);

    return now - el;
});

console.log(ages5);


// es6
// one parameter
// arrow function - =>


a = 0;
if (a == 0)
    console.log('a is 0');


const ages6 = years.map((el) => {
    return 2020 - el;
});
console.log(ages6);

const ages6 = years.map(el => 2020 - el);
console.log(ages6);


// two parameters in es6

const ages6 = years.map((el, index) => {
    let now = new Date().getFullYear();
    console.log(`el is ${el} and index is ${index}`);
    return now - el;
});

console.log(ages6);

// this keyword

p1 = {
    name: 'Sandeep',
    marks: 25,
};
p2 = {
    name: 'Darpan',
    marks: 25,

};
p3 = {
    name: 'Mohammed',
    marks: 25,

};
p4 = {
    name: 'Prashanh',
    marks: 25,

};
p5 = {
    name: 'Manish',
    marks: 25,

};


var Person = function (name, accno, age) {
    this.name = name;
    this.age = age;
    this.accno = accno;
}

p1 = new Person('Sandeep', 12, 23);
p2 = new Person('Manish', 124, 23);


console.log(p1.name);
console.log(p2.accno);


// this in arrow function:
// they can share surrounding this keyword


// es5
// regular function

function hi(name) { //receiver - callie
    console.log('hi ' + name);

}

hi('manish');  // caller or calling or sender 



// callback function

function hi(newfun) {
    var name = 'Steve';
    console.log('hi ' + name);
    // console.log(newfun);

    newfun();

}


function hello() {
    console.log('how are you?');
}

hi(hello);


document.querySelector('.green').addEventListener('click', hello);

// first class functions

var age = function (year) {

    console.log(2020 - year);

}

age(1998);


// // anonymous function

// iife

(function () {
    var a = 10;
    console.log('inside', a);

})();
// console.log('outside', a);

document.querySelector('.green').addEventListener('click', function () {
    alert('you selected green box')
});



// es6

// arrow functions

// es5 - example for es5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        console.log('this is a ' + this.color + ' box and the position is ' + this.position);
    },
}

document.querySelector('.green').addEventListener('click', () => {

    box5.clickMe();

});

// disadvantage of es5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        console.log('outside anonymous function', this.color);

        document.querySelector('.green').addEventListener('click', function () {

            console.log('this is a ' + this.color + ' box and the position is ' + this.position);
        });
    },
}
box5.clickMe();


// es6
var box6 = {


    color: 'green',
    position: 1,
    clickMe: () => {
        console.log('outside anonymous function', this.color);

        document.querySelector('.green').addEventListener('click', () => {
            console.log(this);


            console.log('this is a ' + this.color + ' box and the position is ' + this.position);
        });
    },
}
box6.clickMe();


// es5

var box6 = {


    color: 'green',
    position: 1,
    clickMe: function () {
        console.log('outside anonymous function', this.color);

        document.querySelector('.green').addEventListener('click', () => {
            console.log(this);


            console.log('this is a ' + this.color + ' box and the position is ' + this.position);
        });

        return this.hello();
    },

    hello: function () {
        document.querySelector('.green').addEventListener('click', () => {
            console.log(this);


            console.log('this is a ' + this.color + ' box and the position is ' + this.position);
        });

    }
}
box6.clickMe();



// es6

var box6 = {


    color: 'green',
    position: 1,


    clickMe: function () {
        // console.log('outside anonymous function', this.color);

        obj = {
            name: 'mohammed',
            age: 24,
            hello: () => {
                console.log('the this of obj is :', this);

                console.log('hello world');

            },

            hello2: function () {
                console.log('the this of hello2 is:', this);

            },
        };


        obj2 = {
            college: 'Stanford',

            hello3: () => {
                console.log('the this of hello3', this);

            }

        };
        obj2.hello3();

        obj.hello();
        obj.hello2();





        document.querySelector('.green').addEventListener('click', function () {
            console.log(this);


            console.log('this is a ' + this.color + ' box and the position is ' + this.position);
        });
    },
}
box6.clickMe();



var box6 = {


    color: 'green',
    position: 1,
    clickMe: function () {
        console.log('outside anonymous function', this.color);

        document.querySelector('.green').addEventListener('click', () => {
            console.log(this);


            console.log('this is a ' + this.color + ' box and the position is ' + this.position);
        });
    },
    obj: {
        name6: 'mohammed',
        age6: 24,
        hello: function () {
            document.querySelector('.green').addEventListener('click', () => {

                console.log(`hi this is ${this.name6} and I am ${this.age6}`);
            });

        },


    }
}
box6.clickMe();

box6.obj.hello();


// two objects seperately


var box6 = {


    color: 'green',
    position: 1,
    clickMe: function () {
        console.log('outside anonymous function', this.color);

        document.querySelector('.green').addEventListener('click', () => {
            console.log(this);


            console.log('this is a ' + this.color + ' box and the position is ' + this.position);
        });
    },

}

var obj = {
    name6: 'mohammed',
    age6: 24,
    hello: () => {
        document.querySelector('.green').addEventListener('click', () => {

            console.log(`hi this is ${this.name6} and I am ${this.age6}`);
        });

    },


}
box6.clickMe();

obj.hello();


// call method

var steve = {
    name: 'steve jobs',
    age: 26,
    job: 'teacher',
    speech: function (typeOfaudience, time) {
        if (typeOfaudience === 'kids') {
            console.log(`Hi Kids,Good ${time}, I am ${this.name} and I am ${this.age} and a ${this.job}`);

        }

        else if (typeOfaudience === 'college') {
            console.log(`Good ${time} Gentlemen, I am ${this.name} and I am ${this.age} and a ${this.job}`);

        }
    }
}

var bill = {
    name: 'bill gates',
    age: 30,
    job: 'designer',
};

steve.speech('college', 'evening');

// using call method - adopt the steve speech

steve.speech.call(bill, 'kids', 'Morning');


// bind method:
// similar to call method but the only difference is,
// it allows us to copy the function and assign it to a variable

var speechOfbill = steve.speech.bind(bill, 'kids', 'Morning');
speechOfbill();

var speechOfbill = steve.speech.bind(bill, 'kids');
speechOfbill('Evening');

var speechOfbill = steve.speech.bind(bill);
speechOfbill('college', 'Evening');


// find the valid voter age

var dob = [1990, 1970, 1985, 1998, 2012, 2010]; // database of indian people date of births

function arrayCalculate(array, fun) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fun(array[i]))
    }

    return result;


}


function calculateAge(dob_year) {
    return 2020 - dob_year;
}

function isValidAge(age) {
    return age > 18;
}


var ages = arrayCalculate(dob, calculateAge);
console.log(ages);

var validAge = [];
for (var j = 0; j < ages.length; j++) {
    validAge.push(isValidAge(ages[j]));
}

console.log('valid ages are:', validAge);


var dob = [1990, 1970, 1985, 1998, 2012, 2010]; // database of indian people date of births

function arrayCalculate(array, fun) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fun(array[i]))
    }

    return result;
}


function calculateAge(dob_year) {
    return 2020 - dob_year;
}

function isValidAge(limit, age) {
    return age >= limit;
    if (age >= limit) {
        return 'valid age';

    }
    else {
        return 'invalid age';

    }
}


var ages = arrayCalculate(dob, calculateAge);
console.log(ages);

var validAgeIndia = arrayCalculate(ages, isValidAge.bind(this, 18));
console.log(ages);

console.log(validAgeIndia);

var validAgeJapan = arrayCalculate(ages, isValidAge.bind(this, 24));
console.log(validAgeJapan);


// using function constructors
// friends list of person
// es5

var friends = ['Mohammed', 'Manish', 'Sandeep', 'Prashanth']
function Person(name) {
    this.name = name;
}

Person.prototype.myfriend5 = function (friends) {
    var arrayFriends = friends.map((element) => {
        return `${this.name} is a friend of  ${element};`

    });


    console.log(arrayFriends);

}

p1 = new Person('Darpan');
console.log(p1.myfriend5(friends));


// destructuring - seperating an object or array into variables

// es5

var person1 = ['Prashanth', 22];
var name5 = person1[0];
var age5 = person1[1];
console.log(`name is ${name5} and age is ${age5}`);


var [name, year] = ['Prashanth', 22];
console.log(`name is ${name} and age is ${year}`);

var [name, year] = ['Sandeep', 22];
console.log(`name is ${name} and age is ${year}`);



// es6

let [name, year] = ['Prashanth', 22];
console.log(`name is ${name} and age is ${year}`);

let [name, year] = ['Prashanth', 22];
console.log(`name is ${name} and age is ${year}`);


const obj = {
    firstName: 'Darpan',
    lastName: 'Singh'
};



// console.log('last name is ', obj.lastName);

const { firstName, lastName } = obj;
console.log(lastName);

const { firstName: first, lastName: last } = obj;
console.log(first + last);


function calculateAgeRetirement(dob) {
    const age = 2020 - dob;
    return [age, 65 - age];
}

const [age, retirementTime] = calculateAgeRetirement(2000);
console.log(age);
console.log(retirementTime);


// array - list of elements

const boxes = document.querySelectorAll('.box');

var boxArray = Array.prototype.slice.call(boxes)
console.log(boxes);
console.log(boxArray);


boxArray.forEach(function (cur) {
    cur.style.backgroundColor = 'yellow';
});

// for loop

// for (var i = 0; i < boxArray.length; i++) {
//         boxArray[i].style.backgroundColor = 'yellow';
//     }

// complete es6

boxArray.forEach((cur) => {
    cur.style.backgroundColor = 'yellow';
});


for (var i = 0; i < boxArray.length; i++) {
    if (boxArray[i].className === 'box blue') {
        continue;
    }
    boxArray[i].style.backgroundColor = 'yellow';
}


for (var i = 0; i < boxArray.length; i++) {
    if (boxArray[i].className === 'box blue') {
        break;
    }
    boxArray[i].style.backgroundColor = 'yellow';
}

// for of

// es6

for (const curbox of boxArray) {
    if (curbox.className === 'box blue') {
        continue;
    }
    curbox.style.backgroundColor = 'yellow';
}


for (const curbox of boxArray) {
    if (curbox.className === 'box blue') {
        break;
    }
    curbox.style.backgroundColor = 'yellow';
}


// indexOf alternatives in es6

a = [1, 2, 4, 5, 6];
console.log(a.indexOf(6));

// two new methods 

var ages = [17, 21, 8, 14, 22, 11];
var full = ages.map(function (curage) {
    return curage > 18;
});

// // es5
console.log(ages);
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// es6
var ages = [17, 21, 8, 14, 22, 11];

// findIndex
console.log(ages.findIndex((curAge) => {
    return curAge >= 18;
}));

console.log(ages.find(curage => curage >= 18));

// call method

var steve = {
    name: 'steve jobs',
    age: 26,
    job: 'teacher',
    speech: function (typeOfaudience, time) {
        if (typeOfaudience === 'kids') {
            console.log(`Hi Kids,Good ${time}, I am ${this.name} and I am ${this.age} and a ${this.job}`);

        }

        else if (typeOfaudience === 'college') {
            console.log(`Good ${time} Gentlemen, I am ${this.name} and I am ${this.age} and a ${this.job}`);

        }
    }
}

var bill = {
    name: 'bill gates',
    age: 30,
    job: 'designer',
};

// steve.speech('college', 'evening');

// using call method - adopt the steve speech

steve.speech.call(bill, 'kids', 'Morning');


// bind method:
// similar to call method but the only difference is,
// it allows us to copy the function and assign it to a variable

var speechOfbill = steve.speech.bind(bill, 'kids', 'Morning');
// speechOfbill();

var speechOfbill = steve.speech.bind(bill, 'kids');
// speechOfbill('Evening');

var speechOfbill = steve.speech.bind(bill);
// speechOfbill('college', 'Evening');


// find the valid voter age

var dob = [1990, 1970, 1985, 1998, 2012, 2010]; // database of indian people date of births

function arrayCalculate(array, fun) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fun(array[i]))
    }

    return result;

}


function calculateAge(dob_year) {
    return 2020 - dob_year;
}


function isValidAge(age) {
    return age > 18;
}


var ages = arrayCalculate(dob, calculateAge);
console.log(ages);

var validAge = [];
for (var j = 0; j < ages.length; j++) {
    validAge.push(isValidAge(ages[j]));
}

console.log('valid ages are:', validAge);


var dob = [1990, 1970, 1985, 1998, 2012, 2010]; // database of indian people date of births

function arrayCalculate(array, fun) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fun(array[i]))
    }

    return result;
}


function calculateAge(dob_year) {
    return 2020 - dob_year;
}

function isValidAge(limit, age) {
    return age >= limit;
    if (age >= limit) {
        return 'valid age';

    }
    else {
        return 'invalid age';

    }
}


var ages = arrayCalculate(dob, calculateAge);
console.log(ages);

var validAgeIndia = arrayCalculate(ages, isValidAge.bind(this, 18));
console.log(ages);

console.log(validAgeIndia);

var validAgeJapan = arrayCalculate(ages, isValidAge.bind(this, 24));
console.log(validAgeJapan);


// using function constructors
// friends list of person
// es5

var friends = ['Mohammed', 'Manish', 'Sandeep', 'Prashanth']
function Person(name) {
    this.name = name;
}

Person.prototype.myfriend5 = function (friends) {
    var arrayFriends = friends.map((element) => {
        return `${this.name} is a friend of  ${element};`

    });


    console.log(arrayFriends);

}

p1 = new Person('Darpan');
console.log(p1.myfriend5(friends));


// destructuring - seperating an object or array into variables

// es5

var person1 = ['Prashanth', 22];
var name5 = person1[0];
var age5 = person1[1];
console.log(`name is ${name5} and age is ${age5}`);


var [name, year] = ['Prashanth', 22];
console.log(`name is ${name} and age is ${year}`);

var [name, year] = ['Sandeep', 22];
console.log(`name is ${name} and age is ${year}`);


// es6

let [name, year] = ['Prashanth', 22];
console.log(`name is ${name} and age is ${year}`);

let [name, year] = ['Prashanth', 22];
console.log(`name is ${name} and age is ${year}`);


const obj = {
    firstName: 'Darpan',
    lastName: 'Singh'
};



console.log('last name is ', obj.lastName);

const { firstName, lastName } = obj;
console.log(lastName);

const { firstName: first, lastName: last } = obj;
console.log(first + last);


function calculateAgeRetirement(dob) {
    const age = 2020 - dob;
    return [age, 65 - age];
}

const [age, retirementTime] = calculateAgeRetirement(2000);
console.log(age);
console.log(retirementTime);


// array - list of elements

const boxes = document.querySelectorAll('.box');

var boxArray = Array.prototype.slice.call(boxes)
console.log(boxes);
console.log(boxArray);


boxArray.forEach(function (cur) {
    cur.style.backgroundColor = 'yellow';
});

// for loop

for (var i = 0; i < boxArray.length; i++) {
    boxArray[i].style.backgroundColor = 'yellow';
}

// complete es6

boxArray.forEach((cur) => {
    cur.style.backgroundColor = 'yellow';
});


for (var i = 0; i < boxArray.length; i++) {
    if (boxArray[i].className === 'box blue') {
        continue;
    }
    boxArray[i].style.backgroundColor = 'yellow';
}


for (var i = 0; i < boxArray.length; i++) {
    if (boxArray[i].className === 'box blue') {
        break;
    }
    boxArray[i].style.backgroundColor = 'yellow';
}

// for of

// es6

for (const curbox of boxArray) {
    if (curbox.className === 'box blue') {
        continue;
    }
    curbox.style.backgroundColor = 'yellow';
}


for (const curbox of boxArray) {
    if (curbox.className === 'box blue') {
        break;
    }
    curbox.style.backgroundColor = 'yellow';
}


// indexOf alternatives in es6

a = [1, 2, 4, 5, 6];
console.log(a.indexOf(6));

// // two new methods 

var ages = [17, 21, 8, 14, 22, 11];
var full = ages.map(function (curage) {
    return curage > 18;
});

// // es5
console.log(ages);
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// es6
var ages = [17, 21, 8, 14, 22, 11];

// findIndex
console.log(ages.findIndex((curAge) => {
    return curAge >= 18;
}));

console.log(ages.find(curage => curage >= 18));


// spread operators
// rest operators
// default parameters
// hash maps
// classes
// subclasses and inheritance


// spread operator - ...
// es5

function addAges(a, b, c, d) {
    return a + b + c + d;
}

var ages = [18, 30, 21, 12];
// apply method

var sumOfAges = addAges.apply(null, ages);
console.log(sumOfAges);



// es6

const sumOfAges = addAges(...ages);
console.log('sum of ages in es6', sumOfAges);


const familyOfMuntaj = ['zulfekhar', 'arif', 'chan'];


const familyOfDarpan = ['singh', 'Sandeep', 'prashanth'];

// // after two years
const bigFamily = [...familyOfMuntaj, 'Ahmed', 'Manish', ...familyOfDarpan]
console.log(bigFamily);


// example with ui

// querySelector - always returns nodeList

// write program to select heading and boxes to change the text color

// es5
var heading = document.querySelector("h1");
var boxes = document.querySelectorAll('.box');
console.log(boxes);
var boxArray = Array.prototype.slice.call(boxes);
console.log(boxArray);

boxArray.forEach(function (curvalue) {
    curvalue.style.color = 'purple';

});



heading.style.color = 'purple';

// spread operator


// es6
const heading = document.querySelector("h1");
const boxes = document.querySelectorAll('.box');

//  spread operaor to form a new array all

const all = [heading, ...boxes];
console.log(all);

Array.from(all).forEach((curbox) => curbox.style.color = 'purple');


// rest operators

// es5

function isFullAge5() {
    // console.log(arguments);
    // console.log('type of arguments', typeof (arguments));

    var arrArgs = Array.prototype.slice.call(arguments);
    // console.log('type of array', typeof (arrArgs));
    // console.log('type of array', arrArgs);




    arrArgs.forEach(function (curage, index) {
        console.log('index is', index);

        console.log((2020 - curage) >= 18);

    });

    for (var i = 0; i < arrArgs.length; i++) {
        console.log('ages list', (2020 - arrArgs(i)) >= 18);

    }

}

isFullAge5(1990, 2020, 2000, 2011);

// es6

function isFullAge6(...years) {
    console.log(years);
    years.forEach(year => console.log((2020 - year) >= 18));
}

isFullAge6(1990, 2020, 2000, 2011);




function isFullAge5(limit) {
    // console.log(arguments);
    // console.log('type of arguments', typeof (arguments));

    var arrArgs = Array.prototype.slice.call(arguments);
    // console.log('type of array', typeof (arrArgs));
    // console.log('type of array', arrArgs);




    arrArgs.forEach(function (curage) {
        console.log((2020 - curage) >= limit);

    });

}

isFullAge5(21, 1990, 2014, 1998);

// es6

function isFullAge6(limit, ...years) {
    console.log('es6');

    years.forEach(year => console.log((2020 - year) >= limit));

}



isFullAge6(30, 1990, 1995, 2000, 2014, 2012);


// default operators
function SinghFamily(firstName, yearOfBirth, lastName, nationality) {

    if (lastName === undefined) {
        lastName = 'Singh Bisth'
    }

    if (nationality === undefined) {
        nationality = 'Indian';
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var darpan = new SinghFamily('Darpan', 2000);
console.log(darpan.nationality);


function SinghFamily(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Singh' : lastName;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var darpan = new SinghFamily('Darpan', 2000, 'Zulfekhar');
console.log(darpan.lastName);


function SinghFamily(firstName, yearOfBirth, lastName = 'Singh Bisth', nationality) {


    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var darpan = new SinghFamily('Darpan', 2000);
console.log(darpan.lastName);

// hashmaps
// it is same as object but key can be any datatype
// while in objects, it is always strings

// disadvantage of objects - you cannot use it in loops

var s1 = {
    firstName: 'Mohammed',
    1: 101
}

console.log(typeof (s1.firstName));
// console.log(typeof (s1.1));

// build a program for multiple choice questions
//  es6

// var obj = {
//     'question': 'color of sky?',
//     1:
// }


const question = new Map();
question.set('question', 'what is the color of sky?');
question.set(1, 'skyblue');
question.set(2, 'red');
question.set(3, 'pink');
question.set(4, 'green');
question.set('correct', 1);

console.log(question);
answer = parseInt(prompt('choose the correct answer'));



if (answer === question.get('correct')) {
    console.log('correct');
}
else {
    console.log('wrong answer');

}


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

// what is object
// obj - having properties -variables and method - functions

// Dog 

// jimmy 

// properties
// color - white
// breed - Lab

// Method
// eating
// barking

var object = {
    key: value,
    color: 'white'
}

var john = {
    name: 'john doe',
    yearOfBirth: 1998,
    job: 'teacher',
    calculateAge: function () {
        this.age = 2020 - this.yearOfBirth;
        console.log(this.age);

    }
}
console.log(john);
john.calculateAge();
console.log(john);



// object oriented programming
var Student = function (name, rollno, dob) {
    this.name = name;
    this.rollno = rollno;
    this.dob = dob;

}


Student.prototype.calculateAge = function () {
    this.age = 2020 - this.dob;
    return this.age;
}

Student.prototype.college = 'MIT';

var s1 = new Student('manishkumar', 121, 1997);
console.log(s1.college);
console.log(s1.calculateAge());


console.log(s1);

var s2 = new Student('mohammed', 121, 1990);
// console.log(s2);

var s3 = new Student('Sandeep', 121, 1990);
// console.log(s3);

var s4 = new Student('Darpan', 121, 1990);
console.log(s4.calculateAge());

console.log(s4);


var s5 = new Student('Prashanth', 121, 1990);
console.log(s5);

// classes and subclasses

es5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    this.age = 2020 - this.yearOfBirth;
    return this.age;
}

var darpan = new Person5('Darpan Singh', 1990, 'teacher');
console.log(darpan.calculateAge())


// es6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    // we can write method or functions directly without the need
    // of function keyword or prototype

    calculateAge() {
        let age = 2020 - this.yearOfBirth;
        return age;
    }

}

const mohammed = new Person6('Mohammed Zulfekhar', 1995, 'Software ENgineer')
console.log(mohammed.calculateAge());


// static methods - methods that are simply attached to the class but cannot be inherited by class objects

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    // we can write method or functions directly without the need
    // of function keyword or prototype

    calculateAge() {
        let age = 2020 - this.yearOfBirth;
        return age;
    }

    static greetings() {
        console.log('Hi there, How are you?');

    }

}

const mohammed = new Person6('Mohammed Zulfekhar', 1995, 'Software ENgineer')
console.log(mohammed.calculateAge());
Person6.greetings();


inheritance
es5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    this.age = 2020 - this.yearOfBirth;
    return this.age;
}

// subclass - Athlete

var Athlete5 = function (name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    console.log(this);

    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var jack = new Athlete5('jack dorsey', 1990, 'Swimmer', 5, 4);
console.log(jack.calculateAge());


// es6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        this.age = 2020 - this.yearOfBirth;
        return this.age;
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
}

const steve = new Athlete6('Steve Jobs', 2000, 'runner', 5, 3);
console.log(steve.calculateAge());












