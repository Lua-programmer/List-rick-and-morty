import React, { useState, useEffect } from 'react';
import Api from '../api/Api';

function CharacterView(props) {
  const _id = props.match.params.id;
  const [ character, setCharacter ] = useState({});

  useEffect(() => {
    getCharacterById();

  }, []);

  async function getCharacterById() {
    const response = await Api.fetchGetByID(_id);
    const result = await response.json();
    setCharacter(result);
    }



  return (
    <div className="container">
      <div>
        <img src={character.image}/>
      </div>
      <span>Nome: {character.name}</span>
      <span>Episódios</span>
      <ul>
        <li>{character.episode}</li>
      </ul>

    </div>
  )
}

export default CharacterView;