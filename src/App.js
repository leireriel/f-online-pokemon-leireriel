import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    }

    fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    .then(res => res.json())
    .then(data => {
      const pokeData = data.results;
      pokeData
        .map((item, index) => {
          return (
            item.id = index + 1
          )
        })
      this.setState({
        pokemons: pokeData
      });
    });

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
          )
        })
      }
      </ol>
      </Fragment>
    );
  }
}

export default App;
