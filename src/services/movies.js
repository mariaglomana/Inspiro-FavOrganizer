import defBookCover from "../images/defBookCover.png";
const MOVIES_ENDPOINT = "https://www.omdbapi.com/?s=";
const MOVIES_APIKEY = "&apikey=cdfc1924";

const getMoviesFromApi = searchText => {
  return fetch(MOVIES_ENDPOINT + searchText + MOVIES_APIKEY, {
    method: "GET"
  })
    .then(response => response.json())
    .then(result =>
      result.Search !== undefined
        ? result.Search.reduce((unique, movieItem) => {
            let movie = {};
            movie.type = "movies";
            movie.id = movieItem.imdbID;
            movie.title = movieItem.Title;
            if (movieItem.Poster === "N/A") {
              movie.image = defBookCover;
            } else {
              movie.image = movieItem.Poster;
            }
            movie.year = movieItem.Year;
            return [...unique, movie];
          }, [])
        : ""
    );
};

export default getMoviesFromApi;
