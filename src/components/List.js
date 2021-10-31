import React, { useState, useEffect } from "react";
import Api from'../api/Api'
import Card from '../components/Card'


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
    <div>
      {characters.map((character, index) => (
        <Card data={character} key={index} />
      ))}
    </div>

  )


};

export default List;
