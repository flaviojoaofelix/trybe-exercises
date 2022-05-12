import React from "react";

class PokemonCard extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="pokemon">
        <div>
          <h3>{name}</h3>
          <p>
            <span>Tipo:</span> {type}
          </p>
          <p>
            <span>Peso:</span> {`${averageWeight.value}${averageWeight.measurementUnit}`}
          </p>
          <figure>
            <img src={image} alt={`Imagem de ${name}`} />
          </figure>
        </div>
      </div>
    )
  }
}

export default PokemonCard;