import BOOKS from '../api/books.js';

const getDataFromServer = () => {
    //return fetch(BOOKSURL).then(response => response.json);
    return BOOKS;
};

export default getDataFromServer;