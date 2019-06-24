import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PokeList.scss';

const PokeList = ({ pokemons, search }) => {
  const renderPokemonSearch =
    pokemons
      .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.id - b.id)
      .map(item => {
        return (
          <Link to={`/about/${item.id}`} className="link__poke">
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
                <ol className="poke__evolutions--list">
                  <p className="poke__evolution">Evoluciona de </p>
                  {item.forms
                    .map((item, index) => {
                      return (
                        <li key={index} className="poke__evolution">{item.name}</li>
                      );
                    })
                  }
                </ol>
              </div>
            </li>
          </Link>
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

PokeList.propTypes = {
  pokemons: PropTypes.array,
  search: PropTypes.string,
};

export default PokeList;