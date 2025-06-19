const inputName = prompt('Enter your Name') 
const inputAge = parseInt(+prompt('Enter your Age')) 
const inputGender = prompt('Male or Female') 

console.log(`Name: ${inputName}`)
console.log(`Age: ${inputAge}`)
console.log(`Gender: ${inputGender}`)


if (inputAge>=0 && inputAge<=5)
{
    console.log(`${inputName} is a kid👶🏻`)
}
if (inputAge>=6 && inputAge<=18)
{
    console.log(`${inputName} is a school student🧑🏻‍🎓👨🏻‍🎓👩🏻‍🎓`)
    console.log('He/She is aspiring to become a web developer in future')
    
}

if (inputAge>=19 && inputAge<=24)
{
    console.log(`${inputName}  is a college student🎓🎓🎓`)
    console.log('He/She is learning Computer Science') 
}
    


if (inputAge>=25 && inputAge<=45)
{
    console.log(`${inputName} is a Working Professional👨🏻‍💻👩🏻‍💻🧑🏻‍💻`)
    console.log('He/She is a web developer')
}
if (inputAge>45)
{
    console.log(`${inputName}  is retired!`)
}

console.log('Program Ended!!!!!');