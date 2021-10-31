import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import List from '../components/List'

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const urlBase = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = () => {
    fetch(urlBase)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(urlBase);
  }, []);

  return (
    <>
      <Header title="Rick and Morty App" />
      <div>
        <List characters={characters} />
      </div>
    </>
  );
};

export default Home;
