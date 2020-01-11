const ENDPOINT = 'https://...';

const fetchFilms = () => fetch(ENDPOINT).then(response => response.json());

export { fetchFilms };