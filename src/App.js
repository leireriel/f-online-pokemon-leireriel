import React, { Component, Fragment } from 'react';
import { fetchPokemons } from './services/fetchPokemons';
import SearchPokemon from './components/Filters/SearchPokemon';
import PokeList from './components/PokeList';
import Contact from './components/Contact';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      search: ''
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    const getItem = JSON.parse(localStorage.getItem('pokemonsUser'));
    if (getItem === null) {
      fetchPokemons()
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
                  localStorage.setItem('pokemonsUser', JSON.stringify(newState));
                })
            );
          })
      })
    } else {
      this.setState({
        pokemons: getItem
      })
    }
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
        <header>
          <SearchPokemon 
            actionSearch={this.handleInputChange}
          />
        </header>
        <main className="main__pokelist">
          <PokeList 
            pokemons={pokemons}
            search={search}
          />
        </main>
        <footer>
          <Contact />
        </footer>
      </Fragment>
    );
  }
}

export default App;
