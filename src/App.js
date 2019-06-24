import React, { Component, Fragment } from 'react';
import { fetchPokemons } from './services/fetchPokemons';
import SearchPokemon from './components/Filters/SearchPokemon';
import PokeList from './components/PokeList';
import PokeDetail from './components/PokeDetail';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      search: ''
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.getUrlPokemons = this.getUrlPokemons.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  //Function to get numbers from 25 to 25 until 964
  //Event on scroll

  getPokemons() {
    //const getItem = JSON.parse(localStorage.getItem('pokemonsUser'));
    //if (getItem === null) {
      this.getUrlPokemons('https://pokeapi.co/api/v2/pokemon?limit=25');
      this.getUrlPokemons('https://pokeapi.co/api/v2/pokemon?offset=25&limit=25');
      this.getUrlPokemons('https://pokeapi.co/api/v2/pokemon?offset=50&limit=25');
      this.getUrlPokemons('https://pokeapi.co/api/v2/pokemon?offset=75&limit=25');
    //} else {
      //this.setState({
        //pokemons: getItem
      //})
    //}
  }

  getUrlPokemons(url) {
    fetchPokemons(url)
    .then(data => {
      const pokeData = data.results;
      pokeData
        .map(item => {
          return (
            fetch(item.url)
              .then(res => res.json())
              .then(data => {
                const newState = this.state.pokemons;
                newState.push(data);
                this.setState({
                  pokemons: newState
                })
                //localStorage.setItem('pokemonsUser', JSON.stringify(newState));
              })
          );
        })
    })
  }

  handleInputChange(event) {
    const newSearch = event.currentTarget.value;
    this.setState({
      search: newSearch
    })
  }

  render() {
    const { pokemons, search } = this.state;
    return (
      <Fragment>
        <header />
        <main className="main__pokelist">
          <Switch>
            <Route exact path="/" render={() =>
              <Fragment>
                <SearchPokemon 
                  actionSearch={this.handleInputChange}
                />
                <PokeList 
                  pokemons={pokemons}
                  search={search}
                />
              </Fragment>
            } />

            <Route path="/about/:pokemon" render={id =>
              <PokeDetail 
                id={parseInt(id.match.params.pokemon)}
                pokemon={pokemons.filter(pokemon => pokemon.id === parseInt(id.match.params.pokemon))}
              />
            } />
          </Switch>
        </main>
        <footer>
          <Contact />
        </footer>
      </Fragment>
    );
  }
}

export default App;
