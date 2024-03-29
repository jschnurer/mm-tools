import FlowLayout from "components/layout/FlowLayout";
import PageTitle from "components/layout/PageTitle";
import classList from "helpers/styleHelpers";
import React, { useState } from "react";
import styles from "./Alchemy.module.scss";
import Potion, { IPotion } from "./Potion";
import mm6Recipes from "./game-data/mm6.json";
import mm7Recipes from "./game-data/mm7.json";
import mm8Recipes from "./game-data/mm8.json";

const gameRecipes: IGameIndexable = {
  "MM6": mm6Recipes,
  "MM7": mm7Recipes,
  "MM8": mm8Recipes,
};

interface IGameIndexable {
  [index: string]: IPotion[];
};

const getSimpleComponents = (recipe: string, list: IPotion[]): JSX.Element | null => {
  if (recipe.indexOf("Empty Bottle") > -1) {
    const color = recipe.substring(0, 1);
    return <span className={styles[`color-${color}`]}>{color}</span>;
  }

  let chunks = recipe.split(" + ");
  let chunk0 = list.find(x => x.name === chunks[0]);
  let chunk1 = list.find(x => x.name === chunks[1]);

  if (!chunk0
    || !chunk1) {
    return null;
  }

  return (
    <span>
      ({getSimpleComponents(chunk0?.recipe, list)} + {getSimpleComponents(chunk1.recipe, list)})
    </span>
  )
}

const Alchemy: React.FC = () => {
  const [game, setGame] = useState("MM6");
  const [potionType, setPotionType] = useState("All");
  const [potionName, setPotionName] = useState("All");
  const [showSimplified, setShowSimplified] = useState(true);

  const recipes = gameRecipes[game];
  const potionTypes = [...new Set(recipes.map(x => x.type))];

  return (
    <FlowLayout
      header={(
        <div className={classList(styles.header)}>
          <PageTitle
            title={classList(styles[game], styles.Alchemy)}
          />
          <div className={classList(styles.row)}>
            <label>Game:</label>
            <div className={classList(styles.buttons)}>
              {Object.keys(gameRecipes).map(gm => (
                <button
                  key={gm}
                  onClick={() => {
                    setGame(gm);
                    setPotionType("All");
                    setPotionName("All");
                  }}
                  className={classList(gm === game ? "primary-button" : "")}
                >
                  {gm}
                </button>
              ))}
            </div>
          </div>
          <div className={classList(styles.row)}>
            <label>Potion Type:</label>
            <div className={classList(styles.buttons)}>
              <button
                onClick={() => setPotionType("All")}
                className={classList(potionType === "All" ? "primary-button" : "")}
              >
                All
              </button>
              {potionTypes.map(pt => (
                <button
                  key={pt}
                  onClick={() => {
                    setPotionType(pt);
                    setPotionName("All");
                  }}
                  className={classList(potionType === pt ? "primary-button" : "")}
                >
                  {pt}
                </button>
              ))}
            </div>
          </div>
          <div className={classList(styles.row)}>
            <label>Potion:</label>
            <div className={classList(styles.buttons)}>
              <button
                onClick={() => setPotionName("All")}
                className={classList(potionType === "All" ? "primary-button" : "")}
              >
                All
              </button>
              {recipes
                .filter(pot => pot.type === potionType)
                .map(pt => (
                  <button
                    key={pt.name}
                    onClick={() => setPotionName(pt.name)}
                    className={classList(potionName === pt.name ? "primary-button" : "")}
                  >
                    {pt.name}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <label>
              Simplified Notation
              <input
                type="checkbox"
                value="simple"
                checked={showSimplified}
                onChange={(e) => setShowSimplified(e.target.checked)}
              />
            </label>
          </div>
        </div>
      )}
    >
      {recipes
        .filter(potion => (potionType === "All"
          || potion.type === potionType)
          && (potionName === "All"
            || potionName === potion.name))
        .map(potion => showSimplified
          ? (
            <div
              className={styles["simple-potion"]}
              key={potion.name}
            >
              <label>{potion.name}</label>
              {getSimpleComponents(potion.recipe, recipes)}
              <span
                className={classList(styles.effect)}
              >
                {potion.effect}
              </span>
            </div>
          )
          : (
            <Potion
              potion={potion}
              recipes={recipes}
              key={potion.name}
              isTop={true}
            />
          )
        )
      }
    </FlowLayout>
  );
};

export default Alchemy;