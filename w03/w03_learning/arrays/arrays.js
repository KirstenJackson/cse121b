// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//     // return element for new_array
// }[, thisArg])


// Declare an array with value = ['one', 'two', 'three']
let numArray = ['one', 'two', 'three']
console.log(numArray);

// Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>"
numArray.forEach(element => {
    `<li>${element}</li>`  
});
console.log(numArray);
