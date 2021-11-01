import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Api from '../api/Api';
import styled from "styled-components";
import Button from '../components/Button'

const Body = styled.body`
  background-color: #190227;
  height: 100vh;
  padding: 20px;

  img {
    padding: 20px;
    height: 300px
  }

  span, p {
    color: white;
  }

`

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
    <>
      <Header title="Characteristics" />
      <div>
      <Body>
      <img src={character.image}/>
      <br />
      <span>Nome: {character.name}</span>
      <hr />
      <br />
      <span>Episódios</span>
      {/* <p style={{display: 'flex', justifyContent: 'center'}}>
      {character.episode}
      </p> */}
      <br />
      <Button />
      </Body>
      </div>
    </>
  )
}

export default CharacterView;