const userName = prompt('Enter your Name') 
const userAge = parseInt(+prompt('Enter your Age')) 
const userGender = prompt('Male or Female') 

console.log(`Name: ${userName}`)
console.log(`Age: ${userAge}`)
console.log(`Gender: ${userGender}`)


if (userAge>=0 && userAge<=5)
{
    console.log(`${userName} is a kid👶🏻`)
}
if (userAge>=6 && userAge<=18)
{
    console.log(`${userName} is a school student🧑🏻‍🎓👨🏻‍🎓👩🏻‍🎓`)
    console.log('He/She is aspiring to become a web developer in future')
    
}

if (userAge>=19 && userAge<=24)
{
    console.log(`${userName}  is a college student🎓🎓🎓`)
    console.log('He/She is learning Computer Science') 
}
    


if (userAge>=25 && userAge<=45)
{
    console.log(`${userName} is a Working Professional👨🏻‍💻👩🏻‍💻🧑🏻‍💻`)
    console.log('He/She is a web developer')
}
if (userAge>45)
{
    console.log(`${userName}  is retired!`)
}

console.log('Program Ended!!!!!');