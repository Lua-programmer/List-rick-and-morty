import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.body`
  background-color: #919ECE;
  width: 300px;
  padding-bottom:40px;
  margin-top: 20px;
  margin-right: 80px;

  img {
   
    with:100%;
  }
`

const CardTitle = styled.h3`
  margin-top:10px;
  padding-top:20px;
  color: black; 
`

const Card = (props) => {
  const character = props.data;
  return (
    <Container>
      <Link style={{ textDecoration: 'none'}} to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />

        <CardTitle>
          Nome: {character.name}
          <br />
          <span>Status: {character.status}</span>
        </CardTitle>
      </Link>
    </Container>
  );
};

export default Card;
