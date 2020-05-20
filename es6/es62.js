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
