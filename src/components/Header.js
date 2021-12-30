import React from "react";
import styled from "styled-components";

const Nav = styled.h2`
  text-style: none;
  background-color: #919ECE;
  height: 50px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  

  a {
    text-decoration: none;
    color:black;
    
  }
`;

const Header = ({title}) => {
  return (
    <Nav>
      <a href="/">{title}</a>
    </Nav>
  );
};

export default Header;
