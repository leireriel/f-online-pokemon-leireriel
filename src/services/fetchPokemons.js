//const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';
const fetchPokemons = url => fetch(url).then(res => res.json())

const ENDPOINT = id => `https://pokeapi.co/api/v2/evolution-chain/${id}/`;

const fetchEvolution = id => fetch(ENDPOINT(id)).then(res => res.json())

export {fetchPokemons, fetchEvolution};
