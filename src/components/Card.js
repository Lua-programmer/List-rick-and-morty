import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const character = props.data;
  return (
    <Link>
      <div className="card">
        <img src={character.image} alt={character.name} />
        <div className="card-body">
          <h3 className="card-title">Nome: {character.name}</h3>
          <span>Status: {character.status}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
