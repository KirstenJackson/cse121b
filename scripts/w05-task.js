/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        
        // Create an HTML <article> element (createElement).
        let article = document.createElement("article");
        // Create an HTML <h3> element and add the temple's templeName property to this new element.
        let h3 = document.createElement("h3");
        document.querySelector("#h3").innerHTML = temple.templeName;
        // document.querySelector("#h3").innerHTML = templeName;
        // Create an HTML <img> element and 
        let image = document.createElement("img");
        // add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
        document.querySelector("#img").setAttribute("src", imageUrl);
        document.querySelector("#img").setAttribute("alt", location);

        // Append the <h3> element and the <img> element to the <article> element as children. (appendChild) 
        document.article.appendChild(h3);
        document.article.appendChild(image);

        // Append the <article> element to the global templesElement variable declared in Step 2. 

        document.templesElement.append(article);

    });

}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}


/* reset Function */
const reset = () => {
    document.getElementById("#temples").innerHTML = "";
}


/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").innerHTML;
    switch (filter) {
        case utah:
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        
        case nonUtah:
            displayTemples(temples.filter(temple => !(temple.location.includes("Utah"))));
            break;
        
        case older:
            displayTemples(temples.filter(temple => temple.dedicated < new Date(1950, 0, 1)));
            break;
        
        default:
            displayTemples(temples.filter(temple));
        }
}



/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();
