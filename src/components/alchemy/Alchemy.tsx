import React, { useState } from "react";
import mm7Recipes from "./game-data/mm7.json";
import Potion from "./Potion";
import PageLayout from "components/layout/PageLayout";
import PageTitle from "components/layout/PageTitle";
import "./Alchemy.scoped.scss";

const potionTypes = [
  "Simple",
  "Complex",
  "Layered",
  "White",
  "Black",
];

const getSimpleComponents = (recipe: string): JSX.Element | null => {
  if (recipe.indexOf("Empty Bottle") > -1) {
    const color = recipe.substr(0, 1);
    return <span className={`color-${color}`}>{color}</span>;
  }

  let chunks = recipe.split(" + ");
  let chunk0 = mm7Recipes.find(x => x.name === chunks[0]);
  let chunk1 = mm7Recipes.find(x => x.name === chunks[1]);

  if (!chunk0
    || !chunk1) {
    return null;
  }

  return (
    <span>
      ({getSimpleComponents(chunk0?.recipe)} + {getSimpleComponents(chunk1.recipe)})
    </span>
  )
}

const Alchemy: React.FC = () => {
  const [potionType, setPotionType] = useState("All");
  const [potionName, setPotionName] = useState("All");
  const [showSimplified, setShowSimplified] = useState(true);

  return (
    <PageLayout
      header={(
        <div className="header">
          <PageTitle
            title="MM7 Alchemy"
          />
          <div className="row">
            <label>Potion Type:</label>
            <div className="buttons">
              <button
                onClick={() => setPotionType("All")}
                className={`primary-button ${"All" === potionType ? "active" : ""}`}
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
                  className={`primary-button ${pt === potionType ? "active" : ""}`}
                >
                  {pt}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            <label>Potion:</label>
            <div className="buttons">
              <button
                onClick={() => setPotionName("All")}
                className={`primary-button ${"All" === potionName ? "active" : ""}`}
              >
                All
              </button>
              {mm7Recipes.filter(pot => pot.type === potionType)
                .map(pt => (
                  <button
                    key={pt.name}
                    onClick={() => setPotionName(pt.name)}
                    className={`primary-button ${pt.name === potionName ? "active" : ""}`}
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
      {mm7Recipes
        .filter(potion => (potionType === "All"
            || potion.type === potionType)
          && (potionName === "All"
            || potionName === potion.name))
        .map(potion => showSimplified
          ? (
            <div
              className="simple-potion"
              key={potion.name}
            >
              <label>{potion.name}</label>
              {getSimpleComponents(potion.recipe)}
              <span
                className="effect"
              >
                {potion.effect}
              </span>
            </div>
          )
          : (
            <Potion
              potion={potion}
              recipes={mm7Recipes}
              key={potion.name}
              isTop={true}
            />
          )
        )
      }
    </PageLayout>
  );
};

export default Alchemy;