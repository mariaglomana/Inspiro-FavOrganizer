const MET_SEARCH_ENDPOINT =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
const MET_OBJECT_ENDPOINT =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

function getarrIDsResults(searchText) {
  return fetch(MET_SEARCH_ENDPOINT + searchText, {
    method: "GET"
  });
}

const mapArtData = data => {
  const artObject = {};
  artObject.type = "art";
  artObject.id = data.objectID;
  artObject.title = data.title;
  artObject.authors = data.artistDisplayName;
  artObject.image = data.primaryImageSmall;
  artObject.year = data.objectDate;
  return artObject;
};

function getArtFromAPI(searchText) {
  const promise = new Promise();

  const arrayPromises = [];

  // fetch(MET_SEARCH_ENDPOINT + searchText, {
  //   method: "GET"
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     arrIDsResults = data.objectIDs;
  //     console.log(arrIDsResults);
  getarrIDsResults(searchText)
    .then(response => response.json())
    .then(arrIDsResults => {
      console.log(arrIDsResults);

      for (let i = 0; i < 50; i++) {
        const result = arrIDsResults[i];
        const resPromise = fetch(MET_OBJECT_ENDPOINT + result).then(response =>
          response.json()
        );
        arrayPromises.push(resPromise);
      }

      Promise.all(arrayPromises).then(detailArtData => {
        const arrayResult = detailArtData.forEach(mapArtData);
        promise.resolve(arrayResult);
      });
    })
    .catch(function(error) {
      console.error("Looks like there was a problem: \n", error);
    });

  return promise;
}

export default getArtFromAPI;
