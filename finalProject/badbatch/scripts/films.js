
let results = null;
// let url = ""
// let episodes = [4, 5, 6, 1, 2, 3]
let urls = ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/4/", "https://swapi.dev/api/films/5/", "https://swapi.dev/api/films/6/"]
let titles = [getMovie(urls[0], "t"), getMovie(urls[1], "t").title, getMovie(urls[2], "t").title, getMovie(urls[3], "t").title, getMovie(urls[4], "t").title, getMovie(urls[5], "t").title]
let openingCrawls = [getMovie(urls[0], "oc"), getMovie(urls[1], "oc").opening_crawl, getMovie(urls[2], "oc").opening_crawl, getMovie(urls[3], "oc").opening_crawl, getMovie(urls[4], "oc").opening_crawl, getMovie(urls[5], "oc").opening_crawl]
// let titles = []
// let openingCrawls = []
//these are running the html output everytime of doStuff()

// let results = null
let films = [
  {
    episode: 4,
    url: "https://swapi.dev/api/films/1/",
    title: titles[0], 
    opening_crawl: openingCrawls[0]
  },
  {
    episode: 5, 
    url: "https://swapi.dev/api/films/2/",
    title: titles[1], 
    opening_crawl: openingCrawls[1]
  },
  {
    episode: 6,
    url: "https://swapi.dev/api/films/3/",
    title: titles[2], 
    opening_crawl: openingCrawls[2]
  },
  {
    episode: 1,
    url: "https://swapi.dev/api/films/4/",
    title: titles[3], 
    opening_crawl: openingCrawls[3]
  },
  {
    episode: 2,
    url: "https://swapi.dev/api/films/5/",
    title: titles[4], 
    opening_crawl: openingCrawls[4]
  },
  {
    episode: 3,
    url: "https://swapi.dev/api/films/6/",
    title: titles[5], 
    opening_crawl: openingCrawls[5]
  },
]

async function getMovie(url, selection) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    
    doStuff(data, selection);
    // return data
  }
}

// this one works
function doStuff(data, selection) {
  results = data; // this isn't connected witht he universal one
  // but that might be okay
  // const outputElement  = document.querySelector("#crawl");
  if (selection === "t") {
    const html = `<h2>${data.title}</h2>`;
    document.querySelector("#filmTitle").innerHTML = html;

  }
  else if (selection === "oc") {
    const html = `<h2>${data.opening_crawl}</h2>`;
    document.querySelector("#filmCrawl").innerHTML = html;
  }
  // else {

  // }

};



// import aMovie from "./Fetch";
// // import getMovie from
// films = aMovie.movies




document.querySelector("#viewCrawl").addEventListener("click", function () {
  const episodeNum = document.querySelector("#episodeNumber").value;
  changeCrawl(episodeNum);
})

// function setCrawlInfo(film) {
//   const filmTitle = document.querySelector("#filmTitle");
//   const filmCrawl = document.querySelector("#filmCrawl");
//   filmTitle.textContent = film.filmTitle;
//   filmCrawl.textContent = film.filmCrawl;

// }

function changeCrawl(filmNum) {
  const filmIndex = films.findIndex(
    (movie) => movie.filmNum == filmNum
  );
  if (filmNum === 1) {
    filmTitle = films[filmIndex].title; // will have to chamge this 
    filmCrawl = films[filmIndex].opening_crawl;
    // should I return these
  }
  else if (filmNum === 2) {
    filmTitle = films[filmIndex].title;
    filmCrawl = films[filmIndex].opening_crawl;
  }
  else if (filmNum === 3) {
    filmTitle = films[filmIndex].title;
    filmCrawl = films[filmIndex].opening_crawl;
  }
  else if (filmNum === 4) {
    filmTitle = films[filmIndex].title;
    filmCrawl = films[filmIndex].opening_crawl;
  }
  else if (filmNum === 5) {
    filmTitle = films[filmIndex].title;
    filmCrawl = films[filmIndex].opening_crawl;
  }
  else if (filmNum === 6) {
    filmTitle = films[filmIndex].title;
    filmCrawl = films[filmIndex].opening_crawl;
  }
  else {

  }

  document.querySelector("#filmTitle").textContent = filmTitle
  document.querySelector("#filmCrawl").textContent = filmCrawl

}
























// const url1 = "https://swapi.dev/api/films/1/";
// const url2 = "https://swapi.dev/api/films/2/";
// const url3 = "https://swapi.dev/api/films/3/";
// const url4 = "https://swapi.dev/api/films/4/";
// const url5 = "https://swapi.dev/api/films/5/";
// const url6 = "https://swapi.dev/api/films/6/";
// // const urlList = "https://pokeapi.co/api/v2/pokemon";
// let results = null;


// // user selects which movie they want to see information for
// // get user input
// // fetch info async function getMovie(url)
// // maybe get opening crawl


// async function getMovie(url) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     doStuff(data);
//   }
// }
// // async function getPokemonList(url) {
// //   const response = await fetch(url);
// //   if (response.ok) {
// //     const data = await response.json();
// //     doStuffList(data);
// //   }
// // }
// function doStuff(data) { //add paramenter to choose title, opening crawl, maybe episode number
//   results = data;
//   const outputElement = document.querySelector("#crawl");
//   const html = `<h2>${data.opening_crawl}</h2>`;
//   // <img src="${data.sprites.front_default}" alt="${data.name}">
//   outputElement.innerHTML = html;
//   console.log("first: ", results);
// }

// function userInput() {
//   // if select id = 1 (ep4), output url1 opening crawl or just select title instead
// }

// // function doStuffList(data) {
// //   console.log(data);
// //   const pokeListElement = document.querySelector("#outputList");
// //   const pokeList = data.results;
// //   pokeList.forEach((currentItem) => {
// //     const html = `<li>${currentItem.name}</li>`;
// //     // note the += here...
// //     pokeListElement.innerHTML += html;
// //   });
// // }
// getMovie(url6);//episode 4
// console.log("second: ", results);

// // getPokemonList(urlList);
