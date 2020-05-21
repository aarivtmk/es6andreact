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

// steve.speech.call(bill, 'kids', 'Morning');


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

// var dob = [1990, 1970, 1985, 1998, 2012, 2010]; // database of indian people date of births

// function arrayCalculate(array, fun) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         result.push(fun(array[i]))
//     }

//     return result;


// }


// function calculateAge(dob_year) {
//     return 2020 - dob_year;
// }

// function isValidAge(age) {
//     return age > 18;
// }


// var ages = arrayCalculate(dob, calculateAge);
// console.log(ages);

// var validAge = [];
// for (var j = 0; j < ages.length; j++) {
//     validAge.push(isValidAge(ages[j]));
// }

// console.log('valid ages are:', validAge);


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
    // if (age >= limit) {
    //     return 'valid age';

    // }
    // else {
    //     return 'invalid age';

    // }
}


var ages = arrayCalculate(dob, calculateAge);
console.log(ages);

var validAgeIndia = arrayCalculate(ages, isValidAge.bind(this, 18));
console.log(ages);

console.log(validAgeIndia);

// var validAgeJapan = arrayCalculate(ages, isValidAge.bind(this, 24));
// console.log(validAgeJapan);


// using function constructors
// friends list of person
// es5

// var friends = ['Mohammed', 'Manish', 'Sandeep', 'Prashanth']
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myfriend5 = function (friends) {
//     var arrayFriends = friends.map((element) => {
//         return `${this.name} is a friend of  ${element};`

//     });


//     console.log(arrayFriends);

// }

// p1 = new Person('Darpan');
// console.log(p1.myfriend5(friends));


// destructuring - seperating an object or array into variables

// es5

var person1 = ['Prashanth', 22];
var name5 = person1[0];
var age5 = person1[1];
console.log(`name is ${name5} and age is ${age5}`);


// var [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);

// var [name, year] = ['Sandeep', 22];
// console.log(`name is ${name} and age is ${year}`);



// es6

let [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);

// let [name, year] = ['Prashanth', 22];
// console.log(`name is ${name} and age is ${year}`);


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


// boxArray.forEach(function (cur) {
//     cur.style.backgroundColor = 'yellow';
// });

// for loop

// for (var i = 0; i < boxArray.length; i++) {
//     boxArray[i].style.backgroundColor = 'yellow';
// }

// complete es6

// boxArray.forEach((cur) => {
//     cur.style.backgroundColor = 'yellow';
// });


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

// for of

// es6

// for (const curbox of boxArray) {
//     if (curbox.className === 'box blue') {
//         continue;
//     }
//     curbox.style.backgroundColor = 'yellow';
// }


for (const curbox of boxArray) {
    if (curbox.className === 'box blue') {
        break;
    }
    curbox.style.backgroundColor = 'yellow';
}


// indexOf alternatives in es6

// a = [1, 2, 4, 5, 6];
// console.log(a.indexOf(6));

// // two new methods 

// var ages = [17, 21, 8, 14, 22, 11];
// var full = ages.map(function (curage) {
//     return curage > 18;
// });

// // es5
// console.log(ages);
// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// es6
var ages = [17, 21, 8, 14, 22, 11];

// findIndex
console.log(ages.findIndex((curAge) => {
    return curAge >= 18;
}));

// console.log(ages.find(curage => curage >= 18));





