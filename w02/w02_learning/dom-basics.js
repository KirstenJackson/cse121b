const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);


// try adding an image
const newImage = document.createElement("img");
newImage.setAttribute("src", "w02_learning/porcoRosso.jpg");
newImage.setAttribute("alt", "illustration of red airplane against blue sky with fluffy white clouds");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
 

const newSection = document.createElement("section");

const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
document.body.appendChild(newH2);

const anotherParagraph = document.createElement("p");
anotherParagraph.innerText = "Welcome to Javascript Language";
document.body.appendChild(anotherParagraph);

document.body.appendChild(newSection);

// other way
// const newSection = document.createElement("section");
// newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
// document.body.appendChild(newSection);