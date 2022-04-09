import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector"
import PokemonMoves from "./PokemonMoves";
import PokemonCity from "./PokemonCity";

function App() {
  const abilities = ["Torrent", "Raind Dish", "Hugs"];
  const date = new Date().toLocaleDateString();
  const logWhenClicked = () => {console.log("I was clicked!")};
  return (
    <div>
      <Logo clickHandler={logWhenClicked} appName={"Jacint's Pokedex"} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
