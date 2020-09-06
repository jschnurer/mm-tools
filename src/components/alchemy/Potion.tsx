import React from "react";
import "./Potion.scoped.scss";

interface IPotionProps {
  potion: IPotion,
  recipes: IPotion[],
  isTop?: boolean,
}

export interface IPotion {
  name: string,
  recipe: string,
  effect: string,
  type: string,
}

const Potion: React.FC<IPotionProps> = ({ potion: { name, recipe, effect }, recipes, isTop }) => {
  let components = recipe.split(' + ')
    .map(pot => recipes.find(r => r.name === pot)
      || pot)
    .map((comp, ix) => {
      if (typeof comp === "string") {
        if (comp === "Empty Bottle") {
          return null;
        }
        return <span key={"comp_" + ix} className={`color-${comp.substr(0, 1)}`}>{comp.substr(0, 1)}</span>;
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

  components
    .forEach((comp, ix, arr) => {
      if (comp === null) {
        return;
      }

      if (ix > 0) {
        renderComps.push(
          <span key={"plus_" + ix} className="plus">+</span>
        );
      }

      renderComps.push(comp);
    });

  return (
    <div
      className={`potion ${isTop ? "top" : ""}`}
    >
      <span
        className="name"
      >
        {name}
      </span>
      <span
        className="effect"
      >
        {effect}
      </span>
      {renderComps}
    </div>
  );
};

export default Potion;