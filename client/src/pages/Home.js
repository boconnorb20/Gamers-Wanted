import React from "react";
import GamerList from "../components/GamerList";
import ConsoleMenu from "../components/ConsoleMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <ConsoleMenu />
      <GamerList />
      <Cart />
    </div>
  );
};


export default Home;
