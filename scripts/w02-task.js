/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Kirsten Jackson";
let currentYear = "2023";
let profilePicture = "images/me.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.getElementById("picture"); //img???


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
document.getElementById(yearElement).textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${nameElement}`);


// document.body.appendChild(newImage);

// other way
// const newSection = document.createElement("section");
// newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
// document.body.appendChild(newSection);



/* Step 5 - Array */
const favoriteFoods = ["Chocolate", "Sushi", "Nachos"];
foodElement.innerHTML = `<0>${favoriteFoods}</p>;`// ol???
// document.getElementById("food").innerHTML = favoriteFoods;

let foodItem = "Soup";
favoriteFoods.push(foodItem);

// append the new array values onto the displayed content of the html element with the id of food
// using a += operator and a <br> to provide a line break as showin in figure 2




