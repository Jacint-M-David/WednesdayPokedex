import React from "react";

function Logo(props) {
  return (
    <header>
      <div>
        <h1>Welcome to {props.appName}</h1>
        <img
          onClick={props.clickHandler}
          src={
            "https://static.pokemonpets.com/images/monsters-images-300-300/7-Squirtle.webp"
          }
          alt={"a pokemon"}
          width="200px"
        />
      </div>
    </header>
  );
}

export default Logo;
