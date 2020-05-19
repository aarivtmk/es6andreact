// es5
// regular function

// function hi(name) { //receiver - callie
//     console.log('hi ' + name);

// }

// hi('manish');  // caller or calling or sender 



// callback function

// function hi(newfun) {
//     var name = 'Steve';
//     console.log('hi ' + name);
//     // console.log(newfun);

//     newfun();

// }


// function hello() {
//     console.log('how are you?');

// }

// hi(hello);


// document.querySelector('.green').addEventListener('click', hello);

// first class functions

// var age = function (year) {

//     console.log(2020 - year);

// }

// age(1998);


// // anonymous function

// // iife
// (function () {
//     var a = 10;
//     console.log('inside', a);

// })();
// // console.log('outside', a);

// document.querySelector('.green').addEventListener('click', function () {
//     alert('you selected green box')
// });



// es6

// arrow functions

// es5 - example for es5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         console.log('this is a ' + this.color + ' box and the position is ' + this.position);


//     },
// }

// document.querySelector('.green').addEventListener('click', () => {

//     box5.clickMe();

// });

// disadvantage of es5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         console.log('outside anonymous function', this.color);

//         document.querySelector('.green').addEventListener('click', function () {

//             console.log('this is a ' + this.color + ' box and the position is ' + this.position);
//         });
//     },
// }
// box5.clickMe();


// es6
// var box6 = {


//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         // console.log('outside anonymous function', this.color);

//         document.querySelector('.green').addEventListener('click', () => {
//             console.log(this);


//             console.log('this is a ' + this.color + ' box and the position is ' + this.position);
//         });
//     },
// }
// box6.clickMe();


// es5

// var box6 = {


//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         // console.log('outside anonymous function', this.color);

//         document.querySelector('.green').addEventListener('click', () => {
//             console.log(this);


//             console.log('this is a ' + this.color + ' box and the position is ' + this.position);
//         });

//         return this.hello();
//     },

//     hello: function () {
//         document.querySelector('.green').addEventListener('click', () => {
//             console.log(this);


//             console.log('this is a ' + this.color + ' box and the position is ' + this.position);
//         });

//     }
// }
// box6.clickMe();



// es6
// var box6 = {


//     color: 'green',
//     position: 1,


//     clickMe: function () {
//         // console.log('outside anonymous function', this.color);

//         obj = {
//             name: 'mohammed',
//             age: 24,
//             hello: () => {
//                 console.log('the this of obj is :', this);

//                 console.log('hello world');

//             },

//             hello2: function () {
//                 console.log('the this of hello2 is:', this);

//             },
//         };


//         obj2 = {
//             college: 'Stanford',

//             hello3: () => {
//                 console.log('the this of hello3', this);

//             }

//         };
//         obj2.hello3();

//         obj.hello();
//         obj.hello2();





//         document.querySelector('.green').addEventListener('click', function () {
//             console.log(this);


//             console.log('this is a ' + this.color + ' box and the position is ' + this.position);
//         });
//     },
// }
// box6.clickMe();



var box6 = {


    color: 'green',
    position: 1,
    clickMe: function () {
        // console.log('outside anonymous function', this.color);

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


