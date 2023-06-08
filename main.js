const API_KEY = 'a63dacc9fba072448586e0cefc11792c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const searchURL = BASE_URL + '/search/movie?&api_key=' + API_KEY + '&query=';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const submit = document.getElementById("submit");

getMovies(API_URL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img
                src="${IMG_URL + poster_path}"
                alt="${title}"
            />
       		
            <div class="movie-info">
           		<img class="imgs" src="${getClassByRate(vote_average)}" style="width:100px;"/>
	            <h3 style="bottom: 60px">${title}</h3>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote > 8) {
        return "images/Frame 380.png";
    } else if (vote > 6) {
        return "images/Frame 376.png";
    } else if(vote > 4){
        return "images/Frame 377.png";
    } else if(vote > 2){
    	return "images/Frame 378.png";
    } else if(vote > 0){
    	return "images/Frame 379.png";
    } else{
    	return "images/Frame 381.png";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(searchURL + searchTerm);

        search.value = "";
    }
});

submit.addEventListener("click", (e) => {
	e.preventDefault();

	const searchTerm = search.value;

	if(searchTerm) {
		getMovies(searchURL + searchTerm);

        search.value = "";
	}

});

const allTeamLink = document.querySelector("#all-team");
const coreLink = document.querySelector("#core");
const developersLink = document.querySelector("#developers");
const designersLink = document.querySelector("#designers");
const mentorsLink = document.querySelector("#mentors");

const name = "Sri Varshitha";
const imagePath = "images/me1.png";

function displayName() {
  main.innerHTML = "";

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";

  const nameElement = document.createElement("h2");
  nameElement.textContent = name;
  container.appendChild(nameElement);

  const imgElement = document.createElement("img");
  imgElement.src = imagePath;
  imgElement.style.width = "300px";
  imgElement.style.borderRadius = "50%";
  imgElement.style.marginTop = "10px";
  container.appendChild(imgElement);

  main.appendChild(container);

}

const mentorName = "SWC"
const mentorImg = "https://avatars.githubusercontent.com/u/26352153?s=280&v=4"

function displayMentors() {
  main.innerHTML = "";

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";

  const nameElement = document.createElement("h2");
  nameElement.textContent = mentorName;
  container.appendChild(nameElement);

  const imgElement = document.createElement("img");
  imgElement.src = mentorImg;
  imgElement.style.width = "200px";
  imgElement.style.borderRadius = "50%";
  imgElement.style.marginTop = "10px";
  container.appendChild(imgElement);

  main.appendChild(container);

}

allTeamLink.addEventListener("click", displayName);
coreLink.addEventListener("click", displayName);
developersLink.addEventListener("click", displayName);
designersLink.addEventListener("click", displayName);
mentorsLink.addEventListener("click", displayMentors);

// const addButton = document.getElementById("addButton");
// addButton.addEventListener("click", addMenuItem);

// function addMenuItem() {
//   const menuItem = prompt("Enter the menu item name:");
//   if (menuItem) {
//     const newMenuItem = document.createElement("li");
//     newMenuItem.textContent = menuItem;
//     side.appendChild(newMenuItem);
//   }
// }