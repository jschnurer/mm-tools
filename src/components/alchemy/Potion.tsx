import classList from "helpers/styleHelpers";
import React from "react";
import styles from "./Potion.module.scss";

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
        return <span key={"comp_" + ix} className={classList(styles[`color-${comp.substring(0, 1)}`])}>{comp.substring(0, 1)}</span>;
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
    .forEach((comp, ix) => {
      if (comp === null) {
        return;
      }

      if (ix > 0) {
        renderComps.push(
          <span key={"plus_" + ix} className={classList(styles.plus)}>+</span>
        );
      }

      renderComps.push(comp);
    });

  return (
    <div
      className={classList(styles.potion, isTop ? styles.top : "")}
    >
      <span
        className={classList(styles.name)}
      >
        {name}
      </span>
      <span
        className={classList(styles.effect)}
      >
        {effect}
      </span>
      {renderComps}
    </div>
  );
};

export default Potion;