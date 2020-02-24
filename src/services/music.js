// import defBookCover from "../images/defBookCover.png";
// const myHeaders = new Headers();
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const MUSIC_ENDPOINT =
  "https://api.deezer.com/search?q=track:%22i%20need%20a%20dollar%22";
// const API_KEY = "6bbafd1dbea6ebfbaf804d0f5e95bcac";
// const MUSIC_ENDPOINT_1PART = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=`;
// const MUSIC_ENDPOINT_2PART = `&api_key=${API_KEY}&format=json`;

const getMusicFromApi = searchText => {
  return fetch(proxyurl + MUSIC_ENDPOINT, {
    method: "GET",
    mode: "no-cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const data = result.data;
      return data !== undefined
        ? data.reduce((unique, trackItem) => {
            let track = {};
            track.type = "music";
            track.id = trackItem.id;
            track.title = trackItem.title;
            track.image = trackItem.album.cover_small;
            track.authors = trackItem.artist.name;
            track.album = trackItem.album.title;
            // if (trackItem.Poster === "N/A") {
            //   track.image = defBookCover;
            // } else {
            //   track.image = trackItem.Poster;
            // }
            // track.year = trackItem.Year;
            return [...unique, track];
          }, [])
        : "";
    })
    .catch(function(error) {
      console.error("Looks like there was a problem: \n", error);
    });
};

export default getMusicFromApi;
