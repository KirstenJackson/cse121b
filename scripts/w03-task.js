/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// addEventListener('click', id = 'addNumbers', addNumbers());
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers() {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2) => number1 * number2;
let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;
 
let divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const date = new Date();
const year = date.getFullYear();
document.querySelector("#year").value = year;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = nums;


/* Output Odds Only Array */
odd_nums = nums.filter((num) => num % 2 === 1);
document.querySelector("#odds").innerHTML = odd_nums;


/* Output Evens Only Array */
even_nums = nums.filter((num) => num % 2 === 0);
document.querySelector("#evens").innerHTML = even_nums;


/* Output Sum of Org. Array 
Use the reduce() array method to sum the array variable elements and 
assign the result to the HTML element with an ID of sumOfArray
*/

nums_sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
// nums_sum = nums.reduce()
document.querySelector("#sumOfArray").innerHTML = nums_sum;

/* Output Multiplied by 2 Array */
nums_mult = nums.map((num) => num * 2);
document.querySelector("#multiplied").innerHTML = nums_mult;


/* Output Sum of Multiplied by 2 Array 
Use the map() and reduce() array methods to sum the array elements 
after multiplying each element by two. 
Assign the result to the HTML element with an ID of sumOfMultiplied.
*/
numsMult = nums.map((num) => num * 2);
numsSum = numsMult.reduce((accumulator, currentValue) => accumulator + currentValue);
document.querySelector("#sumOfMultiplied").innerHTML = numsSum;


