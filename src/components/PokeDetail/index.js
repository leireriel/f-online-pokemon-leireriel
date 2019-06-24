import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './PokeDetail.scss';

const PokeDetail = ({ id, pokemon }) => {
  console.log(pokemon)
  return(
    <Fragment>
      <Link to="/">Volver</Link>
      <div className="wrapper__detail">
        <h1>Pokemon nº {id}</h1>
        {pokemon.map(poke => {
          return(
            <ol>
              <li>Experiencia: {poke.base_experience}</li>
              <li>Altura: {poke.height}</li>
              <li>Movimientos
                <ol>
                  {poke.moves.map(move => {
                    return(
                      <li>{move.move.name}</li>
                    );
                  })}
                </ol>
              </li>
            </ol>
          );
        })}
      </div>
    </Fragment>
  );
}

export default PokeDetail;