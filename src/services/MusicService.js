const ENDPOINT = 'https://...';

const fetchMusic = () => fetch(ENDPOINT).then(response => response.json());

export { fetchMusic };