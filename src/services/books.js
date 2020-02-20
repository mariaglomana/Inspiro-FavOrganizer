import defBookCover from "../images/defBookCover.png";

const BOOKS_ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";
const BOOKS_APIKEY = "&key=AIzaSyAVy2FQZgnT0i3ri5vC_T_1prZsc8HLxIc";

// const deleteRepeated = results => {
//   const allTitles = results.map(book => book.title);
//   const titles = [...new Set(allTitles)];
//   results.reduce((unique, item) => {
//     let indexTitle = titles.indexOf(item.title);
//     return indexTitle === -1
//       ? unique
//       : [...unique, item] && titles.splice(indexTitle, 1);
//   }, []);
//   return results;
// };

const getBooksFromApi = searchText => {
  return fetch(BOOKS_ENDPOINT + searchText + BOOKS_APIKEY, {
    method: "GET"
  })
    .then(response => response.json())
    .then(result =>
      result.items !== undefined
        ? result.items.reduce((unique, bookItem) => {
            let book = {};
            book.type = "books";
            book.id = bookItem.id;
            book.title = bookItem.volumeInfo.title;
            book.authors = bookItem.volumeInfo.authors;
            if (bookItem.volumeInfo.imageLinks === undefined) {
              book.imageSmall = defBookCover;
            } else {
              book.imageSmall = bookItem.volumeInfo.imageLinks.smallThumbnail;
            }
            book.year = bookItem.volumeInfo.publishedDate;
            if (book.year !== undefined) {
              book.year = book.year.slice(0, 4);
            }
            return book.authors === undefined ||
              book.imageSmall === undefined ||
              book.year === undefined
              ? unique
              : [...unique, book];
          }, [])
        : ""
    );
};

export default getBooksFromApi;
