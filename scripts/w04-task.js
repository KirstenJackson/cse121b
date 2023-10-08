/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kirsten Jackson",
    photo: "images/me.jpg",
    favoriteFoods: ["chocolate", "rice", "wafer cookies"],
    hobbies: ["drawing", "drums", "reading", "watching tv"],
    placesLived: []

};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Indiana", 
        length: "12 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Illinois", 
        length: "4 years"
    }
);
myProfile.placesLived.push(
    {
        place: "South Korea", 
        length: "2 years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", `Profile image of ${myProfile.name}`);


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});



/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {



    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);



});


// What could I be doing wrong? This part of my code is not working.

// myProfile.placesLived.forEach = ((placeLived) => {
//     let placeILived = document.createElement('dt');
//     placeILived.textContent = placeLived.place;

//     let livedLength = document.createElement('dd');
//     livedLength.textContent = placeLived.length;

//     document.getElementById('places-lived').appendChild(placeILived);
//     document.getElementById('places-lived').appendChild(livedLength);
// });

// Devun Durst
// Devun Durst
// YesterdayOct 6 at 11:36am
// if you are going to use the arrow function it should be formatted like this: forEach(placeLived => {

// also:

// you wouldn't need to use document.getElement and use document.querySelector('#places-lived);

// I declared mine as a constant so I would not need to write it out every time.

