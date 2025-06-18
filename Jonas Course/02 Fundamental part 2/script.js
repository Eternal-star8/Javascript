/* 1.
// Activating Strict mode

let hasDriveringLicence = false;
const passTest = true;

if (passTest) hasDriveringLicence = true;
if (hasDriveringLicence) console.log('I can drive : D');

// const interface = 'Audio';
// const private = 534;
*/

/* 2.
//FUNCTIONS
function logger(){
    console.log('My name is John');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}'oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5,0);
console.Log(applejuice.juice);

const appleOrange = fruitProcessor(10,5);
console.Log(appleOrange.juice);
*/

/* 3.
// FUNCTION DECLARATION
const age1 = calcAge1(2006);

function calcAge1(birthYear) {
    return 2025 - birthYear;
}

//function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear
}
const age2 = calcAge2(2006);
console.log(age1, age2);
*/

/* 4.
//ARROW FUNCTIONS
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2006);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2006, 'Amisha'));
console.log(yearsUntilRetirement(2000, 'John'));
*/

/* 5.
//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/
/* 6.
//REVIEWING FUNCTIONS
const calcAge = function(birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        return -1;
        console.log(`${firstName} has already retired`);
    }
}
yearsUntilRetirement(2006, 'Amisha');
yearsUntilRetirement(2000, 'John');
*/

/* //Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/* 7.
// ARRAY
const friend1 = 'Akhil';
const friend2 = 'Sam';
const friend3 = 'John';

const friends = ['Akhil', 'Sam', 'John'];
console.log(friends);

const years = new Array(1992, 2010, 2006);
console.log(years);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Riya';
console.log(friends)

const firstName = 'John';
const John = [firstName, 'Blaike', 2025-2006, 'Student', friends ];
console.log(John.length);

// Exercise
const calcAge = function (birthYear) {
    return 2025-2000;
}

const year = [1900, 1992, 2000, 2006, 2010] ;

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);
const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(age);
*/

/* 8.
// Add elements
const friends = ['Akhil', 'Sam', 'John'];
const newLength = friends.push('Riya');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(friends.indexOf('John'));
friends.shift(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('John'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Riya')) {
    console.log('You have a friend called Riya');
}
*/
 
/*
// Coding Challenge #2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

 /* 9.
// OBJECTS
//DOT vs BRACKET NOTATION
const John = {
    firstName: 'John',
    lastName: 'Blaike',
    age: 2025-2005,
    profession: 'Student',
    friends: ['Akhil', 'Sam', 'John']
};
console.log(John);

console.log(John.lastName);
console.log(John['lastName']);

const nameKey = 'Name';
console.log(John['firstName' + nameKey]);
console.log(John['lastName' + nameKey]);

//console.log(John.'last' + nameKey) --> Wrong way

const interestedIn = prompt('What do you whant to know about John? Choose between firstName, lastName, age, profession, and friends');

if (John[interestedIn]) {
    console.log(John[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, profession, and friends');
}
John.location = 'Arizona';
John['email'] = 'blaikejohn@gmail.com';
console.log(John);

// Challenge --> "John has 3 friends, and his best friend is called Sam"

console.log(`${John.firstName} has ${John.friends.length} friends, and his best friend is called ${John.friends[1]}`);
*/

/* 10.
//OBJECT METHODS

const John = {
  firstName: 'John',
  lastName: 'Blaike',
  birthYeah: 2000,
  profession: 'Student',
  friends: ['Akhil', 'Sam', 'John'],
  hasDrivingLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${John.profession}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving license.`
  }
};

console.log(John.calcAge());

console.log(John.age);
console.log(John.age);
console.log(John.age);
*/

/*
// CODING CHALLENGE
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

/* 11.
//ITERATION_THE FOR LOOP
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');


// for loop keeps running while condition is true
for(let rep = 1; rep <=30; rep++) {
    console.log(`Lifting wights repetition ${rep}`);
}
*/
/*
 12.
//LOOPING, ARRAYS, BREAKING CONDITION
const John = [
    'John',
    'Blaike',
    2025-2006,
    'Student',
    ['Akhil', 'Sam', 'Riya']
];
const types = [];

// console.log(John[0])
// console.log(John[1])
// ...
// console.log(John[4])
// jonas[5] does NOT exist

for (let i = 0; i <John.length; i++) {

  // Reading from John array
  console.log(John[i], typeof John[i]);

  // Filling types array
  // types[i] = typeof John[i];
  types.push(typeof John[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);
*/

/* 13.
//LOOPING BACKWARDS
  const John = [
    'John',
    'Blaike',
    2025-2006,
    'Student',
    ['Akhil', 'Sam', 'John']
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = John.length - 1; i >= 0; i--) {
  console.log(i, John[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/

/* 14.
// WHILE LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) { 
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

/*
// CODING CHALLENGE #4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
