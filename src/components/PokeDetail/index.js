import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { fetchEvolution } from '../../services/fetchPokemons';
import './PokeDetail.scss';

class PokeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.getEvolution = this.getEvolution.bind(this);
  }
  
  componentDidMount() {
    this.getEvolution();
  }
  
  getEvolution() {
    fetchEvolution(this.props.id)
      .then(data => {
        console.log(data)
      })
  }

  render() {
    const { id, pokemon } = this.props;
    return(
      <div className="wrapper__route">
        <Link to="/">Volver</Link>
        <div className="wrapper__detail">
          <h1>Pokemon nº {id}</h1>
          {pokemon.map((poke, index) => {
            return(
              <Fragment>
                <h2 className="name__detail">{poke.name}</h2>
                <ul>
                  <li key={`a${index}`} className="element__detail">Experiencia: {poke.base_experience}</li>
                  <li key={`b${index}`} className="element__detail">Altura: {poke.height}</li>
                  <li key={`c${index}`} className="element__detail">Movimientos
                    <ol className="moves__detail">
                      {poke.moves.map((move, index) => {
                        return(
                          <li key={index}>{move.move.name}</li>
                        );
                      })}
                    </ol>
                  </li>
                  <li key={`d${index}`} className="element__detail">Evoluciones:</li>
                </ul>
              </Fragment>
            );
          })}
        </div>
      </div>
    );

  }
}

export default PokeDetail;