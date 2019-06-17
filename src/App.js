import React, { Component, Fragment } from 'react';
import { fetchPokemons } from './services/fetchPokemons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
    this.getPokemons = this.getPokemons.bind(this);
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

  render() {
    const { pokemons } = this.state;
    return (
      <Fragment>
      <h1>pokedex</h1>
      <ol>
      {pokemons
        .map(item => {
          return (
            <li key={item.id - 1}>
              <img 
                src={item.sprites.front_default} 
                alt={`${item.name} front`}
              />
              <p>ID/{item.id}</p>
              <h2>{item.name}</h2>
              <ol>
                {item.types
                  .map((item, index) => {
                    return (
                      <li key={index}>{item.type.name}</li>
                    );
                  })
                }
              </ol>
            </li>
          );
        })
      }
      </ol>
      </Fragment>
    );
  }
}

export default App;
