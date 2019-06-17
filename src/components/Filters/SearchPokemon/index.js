import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchPokemon.scss';

class SearchPokemon extends Component {
  render() {
    const { actionSearch } = this.props;
    return(
      <form action="" className="search__form--poke">
        <label 
          htmlFor="search"
          className="search__label--poke">
            Busca pokemons por nombre
        </label>
        <input 
          type="text" 
          id="search" 
          placeholder="Busca pokemons por nombre..."
          className="search__input--poke"
          onChange={actionSearch}
        />
      </form>
    );
  }
}

SearchPokemon.propTypes = {
  handleInputChange: PropTypes.func,
};

export default SearchPokemon;