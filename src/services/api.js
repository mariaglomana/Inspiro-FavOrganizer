import xmlToJson from "./dataFormatter";
import books from "../services/books";

const ENDPOINT =
  "https://www.goodreads.com/search/index.xml?key=aAQTbm9IPtiLyHVWW3010A&q=";
let xmlContent = "";
const formatSerieItem = seriesItem => {
  const image =
    seriesItem.show.image === null
      ? "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
      : seriesItem.show.image.medium;
  return {
    name: seriesItem.show.name,
    id: seriesItem.show.id,
    image: image
  };
};

const getDataFromApi = searchText => {
  return fetch(ENDPOINT + searchText)
    .then(response => response.text())
    .then(xml => {
      console.log(xml);
      // xmlContent= xml;
      // let parser = new DOMParser();
      // let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
      // let books = xmlDOM.querySelectorAll('work');
      let jsonData = xmlToJson(xml);
      console.log(jsonData);
    });
  // .then(items => items.map(formatSerieItem));
  // .then(books => books.)
};

export default getDataFromApi;

const fetchBooks = () => fetch(ENDPOINT).then(response => response.json());

export { fetchBooks };
