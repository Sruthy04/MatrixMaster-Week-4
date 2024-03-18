const apiUrl =
 "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bab369332f03271c37cdc89151611e48&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi =
 "https://api.themoviedb.org/3/search/movie?&api_key=bab369332f03271c37cdc89151611e48&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search")

getMovies(apiUrl);

async function getMovies(url) {
 const resp = await fetch(url);
 const respData = await resp.json();

 showMovies(respData.results);
}

function showMovies(movies) {
 main.innerHTML = "";

 movies.forEach(movie => {
  const { poster_path, title, vote_average, overview } = movie;

  const movieEl = document.createElement("div");
  movieEl.classList.add("card");

  movieEl.innerHTML = `
            <img
                src="${imgPath + poster_path}"
                alt="${title}"
            />
            <div class="info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
   vote_average
  )}">${vote_average}</span>
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
 if (vote >= 8)
  return "green";
 else if (vote >= 5)
  return "orange";
 else
  return "red";
}

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const searchTerm = search.value;
 if (searchTerm) {
  getMovies(searchApi + searchTerm);

  search.value = "";
 }
});