import React from "react";
import Jumbotron from "../components/Jumbotron";

const NotHere = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Nope! Not Here!</h1>
        <h1>
          <span role="img" aria-label="Sad devil Emoji">
            👿
          </span>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NotHere;