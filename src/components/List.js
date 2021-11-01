import React, { useState, useEffect } from "react";
import Api from'../api/Api'
import Card from '../components/Card'
import styled from "styled-components";

const Body = styled.body`
  background-color: #190227;

  @media screen and (max-width: 768px) {
    Body {
      display: none;
    }
  }

`

const Container = styled.body`
  display: grid;	
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 0 20px 45px;
  
  @media screen and (max-width: 768px) {
    Container {	
      display: grid;	
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

const List = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, [])

  const getCharacters = async () => {
    const response = await Api.fetchGetAll();
    const data = await response.json();
    setCharacters(data.results)
  }

  return (
    <Body>
    <Container>
      {characters.map((character, index) => (
        <Card data={character} key={index} />
      ))}
    </Container>
    </Body>

  )


};

export default List;
