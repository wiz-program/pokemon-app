import React from 'react'
import './Card.css';

export default function Card({ pokemon }) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        <div className="typeContainer">
          {pokemon.types.map((type, i) => {
            return (
              <span key={i} className={`typeBadge type-${type.type.name}`}>
                {type.type.name}
              </span>
            );
          })}
        </div>
      </div>
      
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">
            重さ: <span className="value">{pokemon.weight / 10} kg</span>
          </p>
        </div>
        <div className="cardData">
          <p className="title">
            高さ: <span className="value">{pokemon.height / 10} m</span>
          </p>
        </div>
        <div className="cardData">
          <p className="title">
            アビリティ: <span className="value">{pokemon.abilities[0].ability.name}</span>
          </p>
        </div>
        <div className="cardData">
          <p className="title">
            ID: <span className="value">#{pokemon.id.toString().padStart(3, '0')}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
