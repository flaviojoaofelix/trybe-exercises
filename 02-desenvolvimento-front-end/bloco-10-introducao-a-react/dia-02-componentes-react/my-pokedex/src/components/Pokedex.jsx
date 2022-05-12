import React from "react";
import Pokemon from "./Pokemon"

class Pokedex extends React.Component {
  render () {
    const { pokemons } = this.props;
    return (
      <ul className="pokedex">
        { pokemons.map((pokemon) => (
          <li key={ pokemon.id }>
            <Pokemon
              pokemon ={ pokemon }
            />
          </li>
          )) }
      </ul>
    )
  }
}

export default Pokedex;
