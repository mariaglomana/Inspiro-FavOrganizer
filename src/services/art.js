const MET_SEARCH_ENDPOINT =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
const MET_OBJECT_ENDPOINT =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";
let arrIDsResults = [];
let arrResults = [];

async function getarrIDsResults(searchText) {
  fetch(MET_SEARCH_ENDPOINT + searchText, {
    method: "GET"
  })
    .then(response => response.json())
    .then(data => {
      arrIDsResults = data.objectIDs;
      console.log(arrIDsResults);
    })
    .catch(function(error) {
      console.error("Looks like there was a problem: \n", error);
    });

  return arrIDsResults;
}

async function getArtFromAPI(searchText) {
  // fetch(MET_SEARCH_ENDPOINT + searchText, {
  //   method: "GET"
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     arrIDsResults = data.objectIDs;
  //     console.log(arrIDsResults);
  getarrIDsResults(searchText).then(arrIDsResults => {
    for (let i = 0; i < 50; i++) {
      const result = arrIDsResults[i];
      fetch(MET_OBJECT_ENDPOINT + result)
        .then(response => response.json())
        .then(result => {
          let artObject = {};
          artObject.type = "art";
          artObject.id = result.objectID;
          artObject.title = result.title;
          artObject.authors = result.artistDisplayName;
          artObject.image = result.primaryImageSmall;
          artObject.year = result.objectDate;
          arrResults.push(artObject);
          console.log(arrResults);
        });
    }
  });
  return arrResults;
}

export default getArtFromAPI;
