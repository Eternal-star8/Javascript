'use strict';

/*const Person = function(firstName, birthYear){
console.log (this)
}

new Person('Jonas', 1991);
*/
//1. New {} is created
//2. function is called, this ={}
//3. {} linked to prototype
//4. function automatically return{}


const Person = function (firstName,birthYear){
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
     //never to this
    //this.calcage = function() {
   //     console.log(2035 - this.brithYear);
    };

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const asha = new Person('Asha', 1997);
const harsh = new Person('Harsh', 2009);
console.log(asha,harsh);


console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log (this);
};

Person.hey();


////////////////////////////////////////////////
//Prototypes 

    console.log(Person.prototype);
    Person.prototype.calcAge = function () {
       console.log(2037 - this.birthYear); 
    };
 jonas.calcAge();
 asha.calcAge();
 console.log(jonas._proto_);

 console.log(jonas.__proto__ === Person.prototype);

 console.log(Person.prototype.isPrototypeOf(jonas));
 console.log(Person.prototype.isPrototypeOf(asha));
 console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects
  
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, asha.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas._proto_);
// object.prototype(top of prototype chain)
console.log(jonas._proto_._proto_);
console.log(jonas._proto_._proto_._proto_);

console.dir(Person.prototype.constructor);

const arr =[3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__===Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this) ];

};
console.log(arr.unique());
  
const h1 = document.querySelector('h1');
console.dir(x => x + 1);



//--------------------------------------coding challenge#1---------------------------------------------------------//

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//class expression
 //const PersonCl = class {}

// class declaration
 class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
   

  //Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age(){
    return 2037 - this.birthYear;
  }
  set fullName(name){
    console.log(name) ;
    if(name.includes(' ')) this._fullName = name;
    else alert('${name} is not a full name!')
  }
  get fullName(){
    return this._fullName; 
  }
  //static method
  static hey(){
  console.log('Hey there 👋');
  console.log(this);
};

  }


const jessica = new PersonCl('Jessica Davis ', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
// console.log('Hey ${this.firstName}');
jessica.greet();

const walter = new PersonCl ('Walter White', 1965);

PersonCl.hey();



/*const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/


const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear=2002;

steven.calcAge();

console.log(steven.__proto__===PersonProto);


const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

//-----------------------------------------------------------Coding Challenge #2-----------------------------------------------------------------------------//

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

// INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS

const Person = function(firstName, birthYear) {
   
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Priya', 2005, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//------------------------------------------------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------CODING CHALLENGE #03-------------------------------------------------------------------//

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const priya = new EV('Priya', 120, 23);
priya.chargeBattery(90);
console.log();
priya.brake();
priya.accelerate();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

// INHERITANCE BETWEEN "CLASSES": ES6 CLASSES 

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2025 - this.birthYear
      } years old, but as a student I feel more like ${
        2025 - this.birthYear + 10
      }`
    );
  }
}

const Harsh = new StudentCl('Harsh', 1997, 'Computer Science');
Anshu.introduce();
Anshu.calcAge();


//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

// INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE

const Personproto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const Navi = Object.create(StudentProto);
Navi.init('Navi', 2010, 'Computer Science');
Navi.introduce();
Navi.calcAge();


//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
/*
// ANOTHER CLASS EXAMPLE

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const Acc1 = new Account('Andrew', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.approveLoan(1000);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);
*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

// ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS 

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chaninable
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    // Fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Andrew', 'EUR', 1111);
// acc1.deposit(300);
// acc1.withdraw(100);
const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();

console.log(acc1);
// console.log(acc1.#movements);
// Account.#test();
console.log(movements);

//----------------------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------CODING CHALLENGE #04---------------------------------------------------------------------//


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const Rivian = new EVCl('Rivian', 120, 23);
console.log(Rivian);
// console.log(Rivian.#charge);
Riyan
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(Rivian.speedUS);
