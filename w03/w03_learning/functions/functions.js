let firstName = 'Antonia';
let lastName = 'Francesca';

// function declaration/definition
function fullName(first, last) {
    return `${first} ${last}`
}
// console.log(fullName(firstName, lastName));
 

// anonymous function expression
// const fullName = function (first, last) {
//     return `${first} ${last}`
// };
// console.log(fullName(firstName, lastName));


// arrow function expression
const afullName = (first, last) => `${first} ${last}`;
// console.log(afullName(firstName, lastName));

 
// call fullName and write result to existing html element id='fullName'
document.getElementById('fullName').innerHTML = fullName(firstName, lastName);
// document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);




// nameElement.innerHTML = `<strong>${fullName}</strong>`;
// document.getElementById(yearElement).textContent = currentYear;

