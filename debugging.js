// const PI = 3.14;
// let radius = 3;
// let area = 0;
// area = radius * radius * PI;
// console.log(area);
// radius = 4;
// area = radius * radius * PI;
// console.log(area);

const PI = 3.14;
let area = 0;

function circleArea(radius) {
    area = radius * radius * PI;   
    return area;
}

console.log("Area1: ", circleArea(3));
console.log("Area2: ", circleArea(4));