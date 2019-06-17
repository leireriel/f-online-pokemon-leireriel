import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PokeList.scss';

class PokeList extends Component {
  render() {
    const { pokemons, search } = this.props;
    const renderPokemonSearch =
      pokemons
        .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        .map(item => {
          return (
            <li key={item.id - 1} className="list__item--poke">
              <div className="poke__image--wrapper">
                <img 
                  src={item.sprites.front_default} 
                  alt={`${item.name} front`}
                  className="poke__image--front"
                />
                <img 
                  src={item.sprites.back_default} 
                  alt={`${item.name} back`}
                  className="poke__image--back"
                />
              </div>
              <p className="poke__id">id/{item.id}</p>
              <div className="poke__text--wrapper">
                <h1 className="poke__name">{item.name}</h1>
                <ol className="poke__types--list">
                  {item.types
                    .map((item, index) => {
                      return (
                        <li key={index} className="poke__type">{item.type.name}</li>
                      );
                    })
                  }
                </ol>
              </div>
            </li>
          );
        })
        return(
          <ol className="list__all--poke">
            {renderPokemonSearch.length === 0
              ?
                <li className="try-again">No hay nada con {search} ;&#41;</li>
                  :
                    renderPokemonSearch
            } 
          </ol>
    );
  }
}

PokeList.propTypes = {
  pokemons: PropTypes.array,
  search: PropTypes.string,
};

export default PokeList;