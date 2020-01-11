const BOOKSURL = './services/books.json';

const getDataFromServer = () => fetch(BOOKSURL).then(response => response.json());

export default getDataFromServer;