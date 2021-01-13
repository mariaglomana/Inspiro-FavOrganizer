const MET_SEARCH_ENDPOINT =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
const MET_OBJECT_ENDPOINT =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

  const getArrIDsResults = async (searchText) => {
    return fetch(MET_SEARCH_ENDPOINT + searchText, {
      method: "GET"
    }).then(response => response.json())
    .catch(function(error) {
      console.error("Error in getArrIDsResults: \n", error);
    });
  }
  
  const getArtResult = async (artID) => {
    return fetch(MET_OBJECT_ENDPOINT + artID, {
      method: "GET"
    }).then(response => response.json())
    .then(result => mapArtData(result))
    .catch(function(error) {
      console.error("Error in getArtResult: \n", error);
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

const getArtFromAPI = async (searchText) => {
  const arrIDsResults = await getArrIDsResults(searchText);

  if (arrIDsResults.total !== 0) {
      const resultsArray = [];
    const numberOfResults = arrIDsResults.total > 20 ? 20 : arrIDsResults.total;
    for (let i= 0; i < numberOfResults; i++) {
      const artResult = await getArtResult(arrIDsResults.objectIDs[i])
      resultsArray.push(artResult)
    }
    return resultsArray;
  }
  return [];
}

export default getArtFromAPI;
