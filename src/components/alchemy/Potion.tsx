import React from "react";
import "./Potion.scoped.scss";

interface IPotionProps {
  potion: IPotion,
  recipes: IPotion[],
}

export interface IPotion {
  name: string,
  recipe: string,
  effect: string,
  type: string,
}

const Potion: React.FC<IPotionProps> = ({ potion: { name, recipe, effect, type }, recipes }) => {
  let components = recipe.split(' + ')
    .map(pot => recipes.find(r => r.name === pot)
      || pot)
    .map((comp, ix) => {
      if (typeof comp === "string") {
        return <span key={"comp_" + ix} className="">{comp}</span>;
      } else {
        return (
          <Potion
            potion={comp}
            recipes={recipes}
            key={ix}
          />
        );
      }
    });

  let renderComps: JSX.Element[] = [];

  components.forEach((comp, ix, arr) => {
    renderComps.push(comp);
    if (ix < arr.length - 1) {
      renderComps.push(
        <span key={"plus_" + ix} className="plus">+</span>
      );
    }
  });

  return (
    <div
      className="potion"
    >
      <span
        className="name"
      >
        {name}
      </span>
      {renderComps}
    </div>
  );
};

export default Potion;