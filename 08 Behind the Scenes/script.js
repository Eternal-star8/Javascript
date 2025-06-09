// SCOPING IN PRACTICE

'use strict';
/*

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1999 && birthYear <= 2007) {
      var Millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = ' Disha';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh my god!!!,  you're a Millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(Millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Disha';
calcAge(2002);
// console.log(age);
// printAge();

*/

/*
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Disha';
let profession = 'student';
const year = 2025;

// Functions
console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
console.log(addArrow);

// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
//console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  //console.log(this)
};
calcAge(2005);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this)
};
calcAge(2002);

const Disha = {
  year: 2025,
  calcAge: function (){
    console.log(this);
    console.log(2025 - this.year);
  },
};
Disha.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = Disha.calcAge;
matilda.calcAge();

const f = Disha.calcAge;
f();
*/

/*
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Disha',
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2025 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    
    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 2000 && this.year <= 2010);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
Disha.greet();
Disha.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/
/*
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 20,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 25,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/