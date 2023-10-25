const aMovie = {

  results: null,
  movies: [
    {
      episode: 4,
      url: "https://swapi.dev/api/films/1/",
      title: getMovie(url, "title"),
      opening_crawl: getMovie(url, "opening_crawl")
    },
    {
      episode: 5, //test on 5 and then change the other ones
      url: "https://swapi.dev/api/films/2/",
      title: (getMovie(url).title), //this is like data.title I hope
      opening_crawl: (getMovie(url)).opening_crawl //this should work 
    },
    {
      episode: 6,
      url: "https://swapi.dev/api/films/3/",
      title: getMovie(url, "title"),
      opening_crawl: getMovie(url, "opening_crawl")
    },
    {
      episode: 1,
      url: "https://swapi.dev/api/films/4/",
      title: getMovie(url, "title"),
      opening_crawl: getMovie(url, "opening_crawl")
    },
    {
      episode: 2,
      url: "https://swapi.dev/api/films/5/",
      title: getMovie(url, "title"),
      opening_crawl: getMovie(url, "opening_crawl")
    },
    {
      episode: 3,
      url: "https://swapi.dev/api/films/6/",
      title: getMovie(url, "title"),
      opening_crawl: getMovie(url, "opening_crawl")
    },
  ],

  // init() {
  //   // setCrawlInfo(this); // should I have something in init()???

  //   // renderTitles(this.urls); // change these to don't use this one yet
  // },

  // init() {
  // },


  getMovie: async function (url) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // doStuff(data, selection);
      return data 
    }
  },

  // doStuff: function (data, selection) {
  //   results = data; // this isn't connected witht he universal one
  //   // but that might be okay
  //   // const outputElement  = document.querySelector("#crawl");
  //   if (selection === "title") {
  //     const html = `<h2>${data.title}</h2>`;
  //     document.querySelector("#filmTitle").innerHTML = html;
  //     // should I move this dom stuff to a different function???
  //     // gonna leave it for now
  //     // these are only called in the property assignments
  //     // could I get rid of them 
  //     // assingment to dom only necessary when changeCrawl, right??
  //     // otherwise there's nothing thereeeeee
  //     // innerHTML = 
  //     // this whole function might be obsolete
  //     // wait no
  //     // this is okay
  //     // I just won't use it

  //   }
  //   else if (selection === "opening_crawl") {
  //     const html = `<h2>${data.opening_crawl}</h2>`;
  //     document.querySelector("#filmCrawl").innerHTML = html;
  //   }
  //   else {
  //   }

  // },
  // // I could probably take these out...but I'm scared to at this point

  // setCrawlInfo: function (film) { // takes fulm num call this with click change engrollment
  //   const filmTitle = document.querySelector("#filmTitle");
  //   const filmCrawl = document.querySelector("#filmCrawl");
  //   filmTitle.textContent = film.filmTitle;
  //   filmCrawl.textContent = film.filmCrawl;
  //   // might be able to get rid of this one 
  //   // should I do innerHTML??? 
  // },

  // changeCrawl: function (filmNum) {
  //   const filmIndex = this.movies.findIndex(
  //     (movie) => movie.episode == episode
  //   );
  //   if (filmNum === 1) {
  //     filmTitle = this.movies[filmIndex].title;
  //     filmCrawl = this.movies[filmIndex].opening_crawl;
  //     // should I return these
  //   }
  //   else if (filmNum === 2) {
  //     filmTitle = this.movies[filmIndex].title;
  //     filmCrawl = this.movies[filmIndex].opening_crawl;
  //   }
  //   else if (filmNum === 3) {
  //     filmTitle = this.movies[filmIndex].title;
  //     filmCrawl = this.movies[filmIndex].opening_crawl;
  //   }
  //   else if (filmNum === 4) {
  //     filmTitle = this.movies[filmIndex].title;
  //     filmCrawl = this.movies[filmIndex].opening_crawl;
  //   }
  //   else if (filmNum === 5) {
  //     filmTitle = this.movies[filmIndex].title;
  //     filmCrawl = this.movies[filmIndex].opening_crawl;
  //   }
  //   else if (filmNum === 6) {
  //     filmTitle = this.movies[filmIndex].title;
  //     filmCrawl = this.movies[filmIndex].opening_crawl;
  //   }
  //   else {

  //   }

  // document.querySelector("#filmTitle").textContent = filmTitle
  // document.querySelector("#filmCrawl").textContent = filmCrawl
  // //   const html = `<h2>${data.opening_crawl}</h2>`;
  // //   document.querySelector("#filmCrawl").innerHTML = html;
    
  // // setCrawlInfo: function (film) { // takes fulm num call this with click change engrollment
  // //   const filmTitle = document.querySelector("#filmTitle");
  // //   const filmCrawl = document.querySelector("#filmCrawl");
  // //   filmTitle.textContent = film.filmTitle;
  // //   filmCrawl.textContent = film.filmCrawl;
  // //   // might be able to get rid of this one 
  // //   // should I do innerHTML??? 
  // },
  



  //   // return [filmTitle, filmCrawl];
  //   // or use renderthings with title and crawl input???
  //   // that would probably be easier 

  

};


export default aMovie;



// <h1 id="filmTitle"></h1>  
// <h2 id="filmCrawl"></h2>
// <label for="episodeNumber">Episode Number</label>
// <input id="episodeNumber" />
// <button id="viewCrawl">View Opening Crawl</button>

// <section id="crawl"></section>





