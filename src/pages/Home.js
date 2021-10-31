import React from "react";
import Header from "../components/Header";
import List from '../components/List'

const Home = () => {
  return (
    <>
      <Header title="Rick and Morty App" />
      <div>
        <List  />
      </div>
    </>
  );
};

export default Home;
