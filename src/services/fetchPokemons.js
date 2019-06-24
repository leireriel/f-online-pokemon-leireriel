//const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';

const fetchPokemons = url => fetch(url).then(res => res.json())

export {fetchPokemons};
