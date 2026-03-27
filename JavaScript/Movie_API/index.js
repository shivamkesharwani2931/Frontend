function displayValue() {
  let inputValue = document.getElementById('nameInput').value;
  let outputParagraph = document.getElementById('outputParagraph');
  let output = document.getElementById('output');

  outputParagraph.textContent = inputValue;

  // Clear old results
  output.innerHTML = "";

  if (inputValue.length < 3) return; // avoid too many API calls

  const BASE_URL = `https://www.omdbapi.com/?s=${inputValue}&apikey=98913b84`;

  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      if (data.Search) {
        data.Search.forEach(movie => {
          getMovieDetails(movie.imdbID);
        });
      } else {
        output.innerHTML = "No movies found";
      }
    })
    .catch(err => console.error(err));
}


function getMovieDetails(imdbID) {
  fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=98913b84`)
    .then(res => res.json())
    .then(data => {
      renderUI(data);
    });
}


function renderUI(movie) {
  let output = document.getElementById('output');

  const container = document.createElement('div');
  container.style.border = "1px solid black";
  container.style.margin = "10px";
  container.style.padding = "10px";

  const title = document.createElement('h3');
  title.textContent = movie.Title;

  const poster = document.createElement('img');
  poster.src = movie.Poster;
  poster.style.width = "120px";

  const genre = document.createElement('p');
  genre.textContent = "Genre: " + movie.Genre;

  const rating = document.createElement('p');
  rating.textContent = "IMDB Rating: " + movie.imdbRating;

  container.append(title, poster, genre, rating);
  output.appendChild(container);
}