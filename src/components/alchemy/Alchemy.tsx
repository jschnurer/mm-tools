import React from "react";
import mm7Recipes from "./game-data/mm7.json";
import Potion, { IPotion } from "./Potion";

const Alchemy: React.FC = () => {
  const hardenItem = mm7Recipes.find(x => x.name === "Harden Item");

  return (
    <Potion
      potion={hardenItem as IPotion}
      recipes={mm7Recipes.map(r => r as IPotion)}
    />
  );
};

export default Alchemy;