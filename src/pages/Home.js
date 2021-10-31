import React, { useEffect } from 'react';
import Header from "../components/Header";




const Home = () => {

    const urlBase = "https://rickandmortyapi.com/api/character";

    const fetchCharacters = () => {
        fetch(urlBase)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCharacters(urlBase);
    }, [])

  return (
    <Header title="Rick and Morty App" />
  )
};

export default Home;
