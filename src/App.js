import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    const getItem = JSON.parse(localStorage.getItem('pokemonsUser'));
    if (getItem === null) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
      .then(res => res.json())
      .then(data => {
        const pokeData = data.results;
        pokeData
          .map((item, index) => {
            item.id = index + 1;
            return (
              fetch(`https://pokeapi.co/api/v2/pokemon/${item.id}/`)
              .then(res => res.json())
              .then(data => {
                const pokeDetails = data;
                item.details = pokeDetails;
              })
            );
          })
        localStorage.setItem('pokemonsUser', JSON.stringify(pokeData));
        this.setState({
          pokemons: pokeData
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
            <li key={item.id}>
              
              <h2>{item.name}</h2>
              <p>ID/{item.id}</p>
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
