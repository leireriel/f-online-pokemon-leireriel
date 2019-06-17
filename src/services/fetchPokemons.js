const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';

const fetchPokemons = () => fetch(ENDPOINT).then(res => res.json())

export {fetchPokemons};
