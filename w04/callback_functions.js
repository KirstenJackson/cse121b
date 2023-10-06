function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    console.log(`The result is: ${result}`);
}

// call a function named calculate and pass it the arguments to support
// the console output of the equation 2 + 3
calculate(2, 3, displayResult);
 
