

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

/*
const dayNumber = 3
switch (dayNumber) {
  case 0:
    console.log('It is Sunday Today')
  break;
  case 1:
    console.log('It is Monday Today')
  break;
  case 2:
    console.log('It is Tuesday Today')
  break;
  case 3:
    console.log('It is Wednesday Today')
  break;
  case 4:
    console.log('It is Thursday Today')
  break;
  case 5:
    console.log('It is Friday Today')
  break;
  case 6:
    console.log('It is Saturday Today')
  break;
  
    default:
      console.log('Please Enter a Valid Day Number')
     
}
console.log('Program Ended')
*/


// const username = 'Anurag'
// const userAge = 24

// switch (true) {
//   case (userAge >= 0 && userAge <= 4):
//      console.log(`${username} is a kid.`);
//     break;

//   case (userAge >= 5 && userAge <= 17) :
//      console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
//    break;


//   case (userAge >= 18 && userAge <= 24) :
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
//     break;

//   case (userAge >= 25 && userAge <= 45):
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
//     break;


//   case (userAge > 45 && userAge < 121):
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
//     break;

//   case  (userAge >121):
//     console.log('User is immortal');
//     break;

//   default:
//     console.log('Please Enter Valid Age');
   
// }


const grade = 'C'
switch(grade) {
  case 'A':
    console.log('Your Score is between 85% to 100%.');
  break;
  case 'B':
    console.log('Your Score is between 75% to 85%.');
  break;
  case 'C':
    console.log('Your Score is between 60% to 75%.');
  break;
  case 'D':
    console.log('Your Score is between 50% to 60%.');
  break;
  case 'E':
    console.log('Your Score is between 30% to 50%.');
  break;

  default:
    console.log('Sorry, You failed!!!');
}

console.log('Program Ended!!');
