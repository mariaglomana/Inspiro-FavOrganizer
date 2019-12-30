const ENDPOINT = 'https://www.goodreads.com/search/index.xml?key=aAQTbm9IPtiLyHVWW3010A&q=Ender%27s+Game';

const fetchBooks = () => fetch(ENDPOINT).then(response => response.json());

export { fetchBooks };