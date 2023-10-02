let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];


// using array.filter()
// create array namesB with only names that start with b
function bNames(arr) {
    return arr.filter((el) => el.includes("B"))
}
console.log(bNames(names));
// answer
// let namesB = names.filter(name => name.charAt(0) === 'B');
 

// using array.map()
// create a new array namesLength with length of each name in names array
const namesLength = names.map(name => name.length);
console.log(namesLength);
// answer
// let nameLengths = names.map((name) => name.length);


// using array.reduce()
// create an expression that returns the average string length of names in names array
const initialValue = 0;
const avgName = names.reduce((accumulator, currentValue) => accumulator + currentValue.length / names.length , initialValue);
console.log(avgName);
// answer
// names.reduce((total, name) => total + name.length, 0) / names.length;
